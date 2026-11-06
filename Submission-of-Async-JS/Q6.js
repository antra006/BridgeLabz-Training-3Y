// Q6 - E-Commerce Dashboard: Product Card Fetcher
// Run with Node.js 18+ or in a browser console.

const apiUrl = "https://fakestoreapi.com/products";

async function fetchProducts() {
    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error("HTTP error: " + response.status);
        }

        const products = await response.json();

        products.forEach((product) => {
            console.log("Product:", product.title);
            console.log("Price: $" + product.price);
            console.log("Image:", product.image);
            console.log("------------------------------");
        });

        // Optional browser bonus: create product cards dynamically.
        // This section runs only when the code is executed in a browser
        // on a page containing an element with id="products".
        if (typeof document !== "undefined") {
            const productContainer = document.getElementById("products");

            if (productContainer) {
                products.forEach((product) => {
                    const card = document.createElement("div");
                    const title = document.createElement("h3");
                    const price = document.createElement("p");
                    const image = document.createElement("img");

                    title.textContent = product.title;
                    price.textContent = "$" + product.price;
                    image.src = product.image;
                    image.alt = product.title;
                    image.width = 120;

                    card.append(title, price, image);
                    productContainer.appendChild(card);
                });
            }
        }
    } catch (error) {
        console.error("Failed to load products. Please try again.", error);
    }
}

fetchProducts();
