document.addEventListener("DOMContentLoaded", () => {
    const upperNav = document.querySelector(".upper-nav");
    const lowerNav = document.querySelector(".lower-nav");

    let lastScrollTop = 0; // To track the previous scroll position
    let isScrollingDown = false;
    let hasScrolledPastThreshold = false;

    window.addEventListener("scroll", () => {
        const currentScroll = window.scrollY;

        // Check if user is scrolling down or up
        if (currentScroll > lastScrollTop) {
            isScrollingDown = true;
        } else {
            isScrollingDown = false;
        }

        // Trigger the behavior only after the user has scrolled down a certain threshold
        if (currentScroll > 200) {  // Adjust this threshold as needed
            hasScrolledPastThreshold = true;
        }

        // When scrolling down and past the threshold, hide both nav bars
        if (isScrollingDown && hasScrolledPastThreshold) {
            upperNav.style.transform = `translateY(-${upperNav.offsetHeight}px)`;
            lowerNav.style.transform = `translateY(-${upperNav.offsetHeight + lowerNav.offsetHeight}px)`;

            // Remove background and shadow when upper nav is hidden
            upperNav.style.backgroundColor = "transparent";
            upperNav.style.boxShadow = "none";
        } 
        // When scrolling up, show both nav bars if near the top
        else if (!isScrollingDown && currentScroll <= 100) {  // Show both nav bars when close to the top
            upperNav.style.transform = "translateY(0)";
            lowerNav.style.transform = "translateY(0)";  // Make sure lower nav appears as well

            // Restore background and shadow when upper nav reappears
            upperNav.style.backgroundColor = "rgb(42, 5, 102)";
            upperNav.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
        }
        // When scrolling up but not near the top, hide lower nav
        else if (!isScrollingDown && hasScrolledPastThreshold) {
            upperNav.style.transform = "translateY(0)";
            lowerNav.style.transform = `translateY(-${upperNav.offsetHeight + lowerNav.offsetHeight}px)`;

            // Restore background and shadow when upper nav reappears
            upperNav.style.backgroundColor = "rgb(42, 5, 102)";
            upperNav.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
        }

        lastScrollTop = currentScroll; // Update the last scroll position
    });
});

//This is the end of the nav bar behaviour


// This is for sign up form submission
document.getElementById('signUp-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const fullName = document.getElementById('signUpName').value;
    const [firstName, lastName] = fullName.split(" "); // Assuming the full name is space-separated
    
    // Store first and last name in localStorage
    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName);
    
    // Optionally, store email and password (if needed for authentication later)
    const email = document.getElementById('signUpEmail').value;
    localStorage.setItem('email', email);
    
    // Optionally, store password (if needed for authentication later)
    const password = document.getElementById('signUpPassword').value;
    localStorage.setItem('password', password);
    
    // After saving, you can redirect to the sign-in page if needed
    window.location.href = 'sign-in.html';
});


//products and cart
let cart = JSON.parse(localStorage.getItem("cart")) || []; // Load cart from localStorage

// Function to add product to the cart
// Function to add product to the cart and store it in localStorage
function addToCart(productName, price, image) {
    // Get the current cart from localStorage
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if the product already exists in the cart
    const existingProduct = cart.find((item) => item.name === productName);

    if (existingProduct) {
        // Increment quantity if the product exists
        existingProduct.quantity += 1;
    } else {
        // Add new product to the cart
        cart.push({
            name: productName,
            price: price,
            image: image,
            quantity: 1,
        });
    }

    // Save the updated cart to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${productName} has been added to the cart!`);
}

