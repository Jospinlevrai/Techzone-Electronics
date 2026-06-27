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

//Contaact form validation


function ContactValidation(contactForm) {

    document.getElementById(contactForm).addEventListener("submit", function(event){

        event.preventDefault();

        // Clear previous error messages
        document.getElementById("nameError").textContent = "";
        document.getElementById("emailError").textContent = "";
        document.getElementById("phoneError").textContent = "";
        document.getElementById("messageError").textContent = "";

        // Form validity
        let isValid = true;

        // ==========================
        // Validate Name
        // ==========================

        const name = document.getElementById("name").value.trim();

        if (name === "") {

            document.getElementById("nameError").textContent =
            "Name is required";

            isValid = false;

        } else if (name.length < 3) {

            document.getElementById("nameError").textContent =
            "Name must be at least 3 characters long";

            isValid = false;

        } else if (!/^[a-zA-Z\s']+$/.test(name)) {

            document.getElementById("nameError").textContent =
            "Name can only contain letters and spaces";

            isValid = false;
        }


        // ==========================
        // Validate Email
        // ==========================

        const email = document.getElementById("email").value.trim();

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email === "") {

            document.getElementById("emailError").textContent =
            "Email is required";

            isValid = false;

        } else if (!emailPattern.test(email)) {

            document.getElementById("emailError").textContent =
            "Invalid email format";

            isValid = false;
        }


        // ==========================
        // Validate Phone Number
        // ==========================

        const phone = document.getElementById("phone").value.trim();

        const phonePattern = /^\+?\d{10,13}$/;

        if (phone === "") {

            document.getElementById("phoneError").textContent =
            "Phone Number is required";

            isValid = false;

        } else if (!phonePattern.test(phone)) {

            document.getElementById("phoneError").textContent =
            "Enter a valid phone number";

            isValid = false;
        }


        // ==========================
        // Validate Message
        // ==========================

        const message = document.getElementById("message").value.trim();

        if (message === "") {

            document.getElementById("messageError").textContent =
            "Message is required";

            isValid = false;

        } else if (message.length < 10) {

            document.getElementById("messageError").textContent =
            "Message must contain at least 10 characters";

            isValid = false;
        }


        // ==========================
        // Submit Form
        // ==========================

        if (isValid) {

            alert("Your message has been sent successfully!");

            this.reset();

        }

    });

}

ContactValidation("contactForm");


const images = document.querySelectorAll(".card img");

images.forEach(function(image){

    image.addEventListener("mouseover", function(){

        image.style.transform = "scale(1.05)";

        image.style.transition = "0.3s";

    });

    image.addEventListener("mouseout", function(){

        image.style.transform = "scale(1)";

    });

});

