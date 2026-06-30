// script.js

document.getElementById("search").addEventListener("keyup", function () {

    let value = this.value.toLowerCase();

    let rows = document.querySelectorAll("#tableBody tr");

    rows.forEach(row => {
        row.style.display =
            row.innerText.toLowerCase().includes(value)
                ? ""
                : "none";
    });

});

function editRow(button) {

    let row = button.closest("tr");

    let priceCell = row.cells[3];
    let stockCell = row.cells[4];

    let oldPrice = priceCell.innerText;
    let oldStock = stockCell.innerText;

    priceCell.innerHTML =
        `<input type="text" value="${oldPrice.replace('$','')}"
        class="border p-1 rounded w-20">`;

    stockCell.innerHTML =
        `<input type="number" value="${oldStock}"
        class="border p-1 rounded w-20">`;

    button.parentElement.innerHTML = `
        <button onclick="saveRow(this)"
        class="bg-green-600 text-white px-3 py-1 rounded mr-2">
        Save
        </button>

        <button onclick="cancelRow(this,'${oldPrice}','${oldStock}')"
        class="bg-red-600 text-white px-3 py-1 rounded">
        Cancel
        </button>
    `;
}

function saveRow(button) {

    let row = button.closest("tr");

    let price = row.cells[3].querySelector("input").value;
    let stock = row.cells[4].querySelector("input").value;

    row.cells[3].innerHTML = "$" + price;
    row.cells[4].innerHTML = stock;

    row.cells[6].innerHTML = `
        <button onclick="editRow(this)"
        class="bg-blue-600 text-white px-4 py-1 rounded">
        Edit
        </button>
    `;
}

function cancelRow(button, oldPrice, oldStock) {

    let row = button.closest("tr");

    row.cells[3].innerHTML = oldPrice;
    row.cells[4].innerHTML = oldStock;

    row.cells[6].innerHTML = `
        <button onclick="editRow(this)"
        class="bg-blue-600 text-white px-4 py-1 rounded">
        Edit
        </button>
    `;
}

function sortTable(column) {

    let table = document.getElementById("tableBody");

    let rows = Array.from(table.rows);

    rows.sort((a, b) =>
        a.cells[column].innerText.localeCompare(
            b.cells[column].innerText,
            undefined,
            { numeric: true }
        )
    );

    table.innerHTML = "";

    rows.forEach(row => table.appendChild(row));
}
```
