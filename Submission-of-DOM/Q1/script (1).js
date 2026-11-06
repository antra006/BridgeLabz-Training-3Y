// Q1: Product List Manager using event delegation.
const productForm = document.getElementById("productForm");
const productInput = document.getElementById("productInput");
const productList = document.getElementById("productList");

productForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = productInput.value.trim();
    if (!name) return;

    const item = document.createElement("li");
    item.innerHTML = `
        <span class="product-name"></span>
        <button class="edit-btn">Edit</button>
        <button class="delete-btn">Delete</button>
    `;
    item.querySelector(".product-name").textContent = name;
    productList.appendChild(item);
    productInput.value = "";
});

// One parent listener handles Edit and Delete for every list item.
productList.addEventListener("click", function (event) {
    const item = event.target.closest("li");
    if (!item) return;

    if (event.target.classList.contains("delete-btn")) {
        item.remove();
    } else if (event.target.classList.contains("edit-btn")) {
        startEditing(item);
    }
});

function startEditing(item) {
    if (item.querySelector(".edit-input")) return;

    const nameSpan = item.querySelector(".product-name");
    const oldName = nameSpan.textContent;
    const editInput = document.createElement("input");
    editInput.className = "edit-input";
    editInput.value = oldName;
    nameSpan.replaceWith(editInput);
    editInput.focus();

    function saveEdit() {
        if (!editInput.isConnected) return;
        const newName = document.createElement("span");
        newName.className = "product-name";
        newName.textContent = editInput.value.trim() || oldName;
        editInput.replaceWith(newName);
    }

    editInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") saveEdit();
        if (event.key === "Escape") {
            editInput.value = oldName;
            saveEdit();
        }
    });
    // Clicking anywhere outside the edited item automatically saves it.
    setTimeout(() => {
        document.addEventListener("click", function outsideClick(event) {
            if (!item.contains(event.target)) {
                saveEdit();
                document.removeEventListener("click", outsideClick);
            }
        });
    }, 0);
}
