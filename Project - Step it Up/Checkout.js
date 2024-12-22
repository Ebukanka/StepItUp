    document.addEventListener('DOMContentLoaded', () => {
        // Handle Billing Address Toggle
        const sameAsShippingCheckbox = document.getElementById('sameAsShipping');
        const billingAddressFields = document.getElementById('billingAddressFields');
    
        sameAsShippingCheckbox.addEventListener('change', () => {
            billingAddressFields.classList.toggle('d-none', sameAsShippingCheckbox.checked);
        });
    
        // Handle Form Submission
        const form = document.getElementById('checkout-form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
    
            // Retrieve Selected Shipping Method
            const selectedShipping = document.querySelector('input[name="shippingMethod"]:checked').value;
    
            // Retrieve Selected Payment Method
            const selectedPayment = document.querySelector('input[name="paymentMethod"]:checked').value;
    
            // Display Confirmation Message
            alert(`Order placed successfully!\n\nShipping Method: ${selectedShipping}\nPayment Method: ${selectedPayment}`);
        });
    
        // Optional: Handle Additional Payment Method Logic
        const paymentMethods = document.querySelectorAll('input[name="paymentMethod"]');
        paymentMethods.forEach((method) => {
            method.addEventListener('change', () => {
                console.log(`Selected Payment Method: ${method.value}`);
                // Add any specific logic for a selected payment method here
            });
        });
    });
    