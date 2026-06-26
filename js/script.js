const searchInput = document.getElementById('searchInput');

if (searchInput) {
    searchInput.addEventListener('keyup ', function () {
        let filter = searchInput.value.toLowerCase();
        let products = document.querySelectorAll('.product-card');


        products.forEach(function (product) {
            let text= product.innerText.toLowerCase();
            if (text.includes(filter)) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }

        });
    });
}