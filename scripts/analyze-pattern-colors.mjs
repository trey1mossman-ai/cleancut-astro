#!/usr/bin/env node
/**
 * Analyze dominant colors in pattern images
 * Usage: node scripts/analyze-pattern-colors.mjs [pattern-file]
 */

import { execSync } from 'child_process';
import { existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(__dirname, '..');

// Default to pattern-04.webp if no argument provided
const patternFile = process.argv[2] || 'pattern-04.webp';
const imagePath = resolve(projectRoot, 'public/patterns', patternFile);

if (!existsSync(imagePath)) {
  console.error(`Error: File not found: ${imagePath}`);
  process.exit(1);
}

console.log(`\nAnalyzing colors in: ${patternFile}\n`);
console.log('='.repeat(50));

// Use macOS sips to get image info
try {
  const sipsInfo = execSync(`sips -g all "${imagePath}" 2>/dev/null`, { encoding: 'utf-8' });
  console.log('\nImage Info:');
  const lines = sipsInfo.split('\n').filter(line =>
    line.includes('pixelWidth') ||
    line.includes('pixelHeight') ||
    line.includes('format')
  );
  lines.forEach(line => console.log('  ' + line.trim()));
} catch (e) {
  // sips might not work on webp, continue anyway
}

// Convert webp to a temp PNG for analysis, then use ImageMagick or built-in tools
// Since we may not have ImageMagick, let's try a different approach with Node

// Simple approach: Sample pixel colors using macOS built-in tools
console.log('\n' + '='.repeat(50));
console.log('\nExtracting color palette...\n');

// Try using the `convert` command (ImageMagick) if available
try {
  // Check if ImageMagick is installed
  execSync('which convert', { encoding: 'utf-8' });

  // Get dominant colors using ImageMagick
  const colors = execSync(
    `convert "${imagePath}" -resize 100x100! -colors 10 -unique-colors txt:- | tail -n +2`,
    { encoding: 'utf-8' }
  );

  console.log('Dominant Colors (via ImageMagick):');
  console.log('-'.repeat(40));

  const colorLines = colors.trim().split('\n');
  colorLines.forEach(line => {
    // Parse ImageMagick output: "0,0: (R,G,B)  #RRGGBB  srgb(r,g,b)"
    const hexMatch = line.match(/#([0-9A-Fa-f]{6})/);
    const rgbMatch = line.match(/srgb\((\d+),(\d+),(\d+)\)/);

    if (hexMatch) {
      const hex = hexMatch[1];
      const rgb = rgbMatch ? `rgb(${rgbMatch[1]}, ${rgbMatch[2]}, ${rgbMatch[3]})` : '';
      console.log(`  #${hex.toUpperCase()}  ${rgb}`);
    }
  });

} catch (e) {
  // ImageMagick not available, try alternative method
  console.log('ImageMagick not found, trying alternative method...\n');

  try {
    // Use Python with PIL if available
    const pythonScript = `
import sys
try:
    from PIL import Image
    from collections import Counter

    img = Image.open("${imagePath}")
    img = img.convert('RGB')
    img = img.resize((100, 100))

    pixels = list(img.getdata())

    # Count colors
    color_counts = Counter(pixels)

    # Get top 10 colors
    top_colors = color_counts.most_common(10)

    print("Top 10 Colors by frequency:")
    print("-" * 50)

    total_pixels = sum(color_counts.values())

    for (r, g, b), count in top_colors:
        hex_color = '#{:02x}{:02x}{:02x}'.format(r, g, b)
        percentage = (count / total_pixels) * 100
        print(f"  {hex_color.upper()}  rgb({r}, {g}, {b})  {percentage:.1f}%")

    # Calculate average color
    avg_r = sum(p[0] for p in pixels) // len(pixels)
    avg_g = sum(p[1] for p in pixels) // len(pixels)
    avg_b = sum(p[2] for p in pixels) // len(pixels)
    avg_hex = '#{:02x}{:02x}{:02x}'.format(avg_r, avg_g, avg_b)

    print()
    print("=" * 50)
    print(f"\\nAverage Color: {avg_hex.upper()}  rgb({avg_r}, {avg_g}, {avg_b})")

except ImportError:
    print("PIL not available")
    sys.exit(1)
`;

    const result = execSync(`python3 -c '${pythonScript}'`, { encoding: 'utf-8' });
    console.log(result);

  } catch (pyError) {
    // Python/PIL not available either, use basic sips sampling
    console.log('Python PIL not available.\n');
    console.log('Manual inspection recommended.');
    console.log(`\nTo view the image, run:\n  open "${imagePath}"`);
  }
}

console.log('\n' + '='.repeat(50));
console.log('\nUsage tips:');
console.log('  - Use the hex values directly in Tailwind: bg-[#XXXXXX]');
console.log('  - The average color is good for solid backgrounds');
console.log('  - Top colors help identify the color palette\n');
