/**
 * schema.ts
 * Loads business data from SCHEMA-DATA.yaml
 * This is the single source of truth for all schema markup
 */

import fs from 'node:fs';
import path from 'node:path';
import yaml from 'js-yaml';

// Type definitions for schema data
export interface Location {
  name: string;
  streetAddress: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  telephone: string;
  telephoneRaw: string;
  latitude?: number;
  longitude?: number;
}

export interface BusinessHours {
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
  saturday: string;
  sunday: string;
}

export interface Service {
  name: string;
  slug: string;
  description?: string;
}

export interface SocialLinks {
  facebook?: string;
  instagram?: string;
  yelp?: string;
  google_business?: string;
}

export interface SchemaData {
  business: {
    name: string;
    legal_name: string;
    tagline: string;
    description: string;
    year_established?: number;
  };
  contact: {
    phone: string;
    phone_raw: string;
    email: string;
    website: string;
  };
  locations: Location[];
  service_areas: {
    primary: { name: string; state: string }[];
    region: string;
    radius?: string;
  };
  services: Service[];
  hours: BusinessHours;
  social: SocialLinks;
  schema: {
    type: string;
    additional_types: string[];
    price_range: string;
  };
}

// Load and parse SCHEMA-DATA.yaml
function loadSchemaData(): SchemaData {
  const yamlPath = path.join(process.cwd(), 'SCHEMA-DATA.yaml');
  const fileContents = fs.readFileSync(yamlPath, 'utf8');
  const rawData = yaml.load(fileContents) as any;
  
  // Transform the locations array from YAML to our typed structure
  const locations: Location[] = [];
  
  if (rawData.locations && Array.isArray(rawData.locations)) {
    for (const loc of rawData.locations) {
      locations.push({
        name: loc.name,
        streetAddress: loc.street,
        city: loc.city,
        state: loc.state,
        postalCode: loc.zip,
        country: loc.country || 'US',
        telephone: loc.phone,
        telephoneRaw: loc.phone_raw,
        latitude: loc.latitude,
        longitude: loc.longitude
      });
    }
  } else {
    // Fallback to single address block if no locations array
    locations.push({
      name: 'Main Office',
      streetAddress: rawData.address.street,
      city: rawData.address.city,
      state: rawData.address.state,
      postalCode: rawData.address.zip,
      country: rawData.address.country || 'US',
      telephone: rawData.contact.phone,
      telephoneRaw: rawData.contact.phone_raw,
      latitude: rawData.address.latitude,
      longitude: rawData.address.longitude
    });
  }

  return {
    business: rawData.business,
    contact: rawData.contact,
    locations: locations,
    service_areas: rawData.service_areas,
    services: rawData.services,
    hours: rawData.hours,
    social: rawData.social,
    schema: rawData.schema
  };
}

// Export the loaded data
export const schemaData = loadSchemaData();

// Helper function to format opening hours for schema.org
export function getOpeningHoursSpecification(hours: BusinessHours) {
  const dayMap: Record<string, string> = {
    monday: 'Monday',
    tuesday: 'Tuesday', 
    wednesday: 'Wednesday',
    thursday: 'Thursday',
    friday: 'Friday',
    saturday: 'Saturday',
    sunday: 'Sunday'
  };

  return Object.entries(hours)
    .filter(([_, value]) => value !== 'Closed')
    .map(([day, value]) => {
      // Parse "7:30AM - 4:30PM" or "8AM - 1PM" format
      const match = value.match(/(\d+(?::\d+)?)\s*(AM|PM)\s*-\s*(\d+(?::\d+)?)\s*(AM|PM)/i);
      if (!match) return null;
      
      const [, openTime, openPeriod, closeTime, closePeriod] = match;
      const opens = formatTime(openTime, openPeriod);
      const closes = formatTime(closeTime, closePeriod);
      
      return {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: dayMap[day],
        opens: opens,
        closes: closes
      };
    })
    .filter(Boolean);
}

function formatTime(time: string, period: string): string {
  const [hourStr, minStr] = time.split(':');
  let h = parseInt(hourStr);
  const m = minStr ? parseInt(minStr) : 0;
  
  if (period.toUpperCase() === 'PM' && h !== 12) h += 12;
  if (period.toUpperCase() === 'AM' && h === 12) h = 0;
  
  return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`;
}

// Helper to get social media links as sameAs array
export function getSameAsLinks(social: SocialLinks): string[] {
  return Object.values(social).filter((url): url is string => Boolean(url));
}
