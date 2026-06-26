const searchInput = document.getElementById("searchInput");

if (searchInput) {
    searchInput.addEventListener("keyup", function () {

        const filter = searchInput.value.toLowerCase();

        const products = document.querySelectorAll(".product");

        products.forEach(function (product) {

            const text = product.innerText.toLowerCase();

            if (text.includes(filter)) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }

        });

    });
}

// Product filtering 

const filterButtons = document.querySelectorAll(".filter-btn");
filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {

    const category = this.getAttribute("data-category");

    const products = document.querySelectorAll(".product");

    products.forEach(function (product) {

        if (category === "all") {
            product.style.display = "block";
        } else if(product.getAttribute("data-category") === category) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
});
});



//shopping cart functionality

let cartcount = 0;
const cartCount = document.getElementById("cartCount");

const addToCartButtons = document.querySelectorAll(".add-cart");

addToCartButtons.forEach(function (button) { 
    button.addEventListener("click", function () {
        cartcount++;
        if (cartCount) {
            cartCount.innerHTML = cartcount;
        }
        alert("Item added to cart! Total items in cart: " + cartcount);
    });
});