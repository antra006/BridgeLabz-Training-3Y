let products = [
    {
        id: 1,
        category: "sports shoes",
        productName: "Running shoes",
        review: 120,
        oldprice: 2499,
        newprice: 1999,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
    },
    {
        id: 2,
        category: "watches",
        productName: "Smart watch",
        review: 110,
        oldprice: 5999,
        newprice: 3999,
        image: "https://images.unsplash.com/photo-1620625515032-6ed0c1790c75?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D&quot"
    }
];

let container = document.querySelector(".product-cards");

container.innerHTML = products.map((item) => {
    return `
        <div class="product-card">
            <img src="${item.image}">
            <div class="product-info">
                <h3>${item.productName}</h3>
                <p class="category">${item.category}</p>
                <p class="review">⭐ ${item.review} Reviews</p>
                <p>
                    <del>₹${item.oldprice}</del>
                    <b> ₹${item.newprice}</b>
                </p>
                <button>Add to Cart</button>
            </div>
        </div>
    `;
}).join("");