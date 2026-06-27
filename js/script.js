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
let cartCount = 0;

const cartCounter = document.getElementById("cartCount");

const addButtons = document.querySelectorAll(".add-cart");

addButtons.forEach(function(button){

    button.addEventListener("click", function(){

        cartCount++;

        if(cartCounter){

            cartCounter.innerHTML = cartCount;

        }

        alert("Product added to cart!");

    });

});


//improvement Coming soon 



//clear cart   

const clearCart = document.getElementById("clearCart");

if (clearCart) {
    clearCart.addEventListener("click", function () {
        let answer = confirm("Are you sure you want to clear the cart?");
        if (answer) {
            document.getElementById("cartTable").innerHTML ="";
            document.getElementById("cartTotal").innerHTML = "Ksh 0.00";

            if (cartCount) {
                cartCount.innerHTML = "0";
            }
            alert("Cart cleared!");
        }
    });
}