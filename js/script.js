const searchInput = document.getElementById("searchInput");

if (searchInput) {
    searchInput.addEventListener("keyup", function () {

        const filter = searchInput.value.toLowerCase();

        const products = document.querySelectorAll(".col-md-3.product");

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