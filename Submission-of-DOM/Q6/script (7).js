// Q6: Filter student rows while the user types.
const searchInput = document.getElementById("searchInput");
const studentRows = document.querySelectorAll("#studentRows tr");
const noResults = document.getElementById("noResults");

searchInput.addEventListener("input", function () {
    const searchText = searchInput.value.toLowerCase().trim();
    let visibleRows = 0;

    studentRows.forEach((row) => {
        const rowText = row.textContent.toLowerCase();
        const matches = rowText.includes(searchText);

        row.style.display = matches ? "" : "none";
        if (matches) visibleRows++;
    });

    noResults.hidden = visibleRows !== 0;
});
