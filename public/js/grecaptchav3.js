document.addEventListener('DOMContentLoaded', function() {
    const SITE_KEY = '6LeBhlArAAAAAK4QNqNpQmU3g0YBnviLRoFk6kqw';
    
    // Check if we're on localhost and warn about reCAPTCHA limitations
    if (window.location.hostname === '127.0.0.1' || window.location.hostname === 'localhost') {
        console.warn('reCAPTCHA may not work properly on localhost. Consider testing on the actual domain.');
    }

    // Wait for reCAPTCHA to be available
    function waitForRecaptcha(callback, maxAttempts = 50) {
        let attempts = 0;
        const checkRecaptcha = () => {
            attempts++;
            if (typeof grecaptcha !== 'undefined' && grecaptcha.ready) {
                callback();
            } else if (attempts < maxAttempts) {
                setTimeout(checkRecaptcha, 100);
            } else {
                console.warn('reCAPTCHA failed to load after maximum attempts');
                // Continue without reCAPTCHA
                initializeForms(false);
            }
        };
        checkRecaptcha();
    }
 
    // Function to execute reCAPTCHA and submit form
    function executeRecaptchaAndSubmit(form) {
        if (typeof grecaptcha === 'undefined') {
            submitFormDirectly(form);
            return;
        }

        grecaptcha.ready(function() {
            // Use a more specific action name
            const action = 'contact_form_submit';
            
            grecaptcha.execute(SITE_KEY, {action: action})
                .then(function(token) {
                    // Set the token in the hidden field
                    let recaptchaField = form.querySelector('input[name="g-recaptcha-response"]');
                    if (!recaptchaField) {
                        // Create hidden field if it doesn't exist
                        recaptchaField = document.createElement('input');
                        recaptchaField.type = 'hidden';
                        recaptchaField.name = 'g-recaptcha-response';
                        form.appendChild(recaptchaField);
                    }
                    recaptchaField.value = token;
                    
                    // Add action field for server-side validation
                    let actionField = form.querySelector('input[name="recaptcha-action"]');
                    if (!actionField) {
                        actionField = document.createElement('input');
                        actionField.type = 'hidden';
                        actionField.name = 'recaptcha-action';
                        form.appendChild(actionField);
                    }
                    actionField.value = action;
                    
                    // Submit the form
                    submitFormDirectly(form);
                })
                .catch(function(error) {
                    console.error('reCAPTCHA execution error:', error);
                    // Submit form without token if reCAPTCHA fails
                    submitFormDirectly(form);
                });
        });
    }

    // Function to submit form directly
    function submitFormDirectly(form) {
        // Instead of cloning, create a FormData object to preserve all values
        const formData = new FormData(form);
        
        // Create a new form element with the same action and method
        const newForm = document.createElement('form');
        newForm.action = form.action;
        newForm.method = form.method;
        newForm.style.display = 'none';
        
        // Add all form data as hidden inputs to preserve values
        for (let [key, value] of formData.entries()) {
            const input = document.createElement('input');
            input.type = 'hidden';
            input.name = key;
            input.value = value;
            newForm.appendChild(input);
        }
        
        // Add the new form to the page and submit it
        document.body.appendChild(newForm);
        newForm.submit();
        
        // Clean up
        document.body.removeChild(newForm);
    }

    // Function to validate form
    function validateForm(form) {
        const requiredFields = form.querySelectorAll('[required]');
        let isValid = true;
        
        for (let field of requiredFields) {
            // Handle different input types
            let value = '';
            if (field.type === 'select-one') {
                value = field.value;
            } else {
                value = field.value.trim();
            }
            
            if (!value) {
                field.focus();
                field.style.borderColor = '#ff0000';
                isValid = false;
                
                // Log which field is empty for debugging
                console.log('Empty required field:', field.name, field.type);
                break;
            } else {
                field.style.borderColor = '';
            }
        }
        
        return isValid;
    }

    // Function to show loading state
    function setFormLoading(form, loading) {
        const submitBtn = form.querySelector('button[type="submit"], input[type="submit"]');
        if (submitBtn) {
            if (loading) {
                submitBtn.disabled = true;
                submitBtn.originalText = submitBtn.textContent;
                submitBtn.textContent = 'Submitting...';
            } else {
                submitBtn.disabled = false;
                submitBtn.textContent = submitBtn.originalText || 'Submit';
            }
        }
    }

    // Function to log form data for debugging
    function logFormData(form) {
        const formData = new FormData(form);
        console.log('Form data being submitted:');
        for (let [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }
    }

    // Function to initialize forms
    function initializeForms(useRecaptcha = true) {
        const forms = document.querySelectorAll('form[action*="voxemarketing.com"]');
        
        forms.forEach(function(form, index) {
            // Only modify IDs if they don't already have unique suffixes
            const inputs = form.querySelectorAll('input[id], select[id], textarea[id]');
            inputs.forEach(function(input) {
                if (input.id && !input.id.includes('-home') && !input.id.includes('-footer') && !input.id.includes('-modal') && !input.id.includes('-contact') && !input.id.includes('-form-')) {
                    // Add form-specific suffix only if no specific suffix exists
                    input.id = input.id + '-form-' + index;
                    
                    // Update corresponding label if it exists
                    const label = form.querySelector(`label[for="${input.id.replace('-form-' + index, '')}"]`);
                    if (label) {
                        label.setAttribute('for', input.id);
                    }
                }
            });

            // Add submit event listener
            form.addEventListener('submit', function(e) {
                e.preventDefault(); // Prevent default submission
                
                // Set loading state
                setFormLoading(form, true);
                
                // Log form data for debugging
                logFormData(form);
                
                // Validate form first
                if (!validateForm(form)) {
                    setFormLoading(form, false);
                    return;
                }
                
                if (useRecaptcha && window.location.hostname !== '127.0.0.1' && window.location.hostname !== 'localhost') {
                    executeRecaptchaAndSubmit(form);
                } else {
                    // Submit without reCAPTCHA if not available or on localhost
                    submitFormDirectly(form);
                }
            });
        });
    }

    // Initialize when reCAPTCHA is ready
    waitForRecaptcha(() => {
        initializeForms(true);
    });
});