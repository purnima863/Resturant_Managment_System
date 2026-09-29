// CART 
let cartCount = 0;

const cartButton = document.querySelector(".cart-btn");
const cartNumber = document.querySelector(".cart-btn span");

document.querySelectorAll(".primary-btn").forEach(button => {
    button.addEventListener("click", function () {
        if (this.textContent.includes("Order")) {
            cartCount++;
            cartNumber.textContent = cartCount;
        }

    });

});


//  ACTIVE NAVBAR 

const navLinks = document.querySelectorAll(".navbar nav a");

navLinks.forEach(link => {

    link.addEventListener("click", function () {

        navLinks.forEach(item => {
            item.classList.remove("active");
        });

        this.classList.add("active");

    });

});


// SEARCH 

document.querySelector(".search-btn").addEventListener("click", function () {

    alert("Search feature will be available in the next module.");

});