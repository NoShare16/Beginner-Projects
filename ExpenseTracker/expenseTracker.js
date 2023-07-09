const textInput = document.querySelector("#textInput");
const dateInput = document. querySelector("#dateInput");
const numberInput = document.querySelector("#numberInput");
const table = document.querySelector("#table");

const button = document.querySelector("#button");
console.log(button);
button.addEventListener("click", () => {
    const newRow = document.createElement("tr");
    table.appendChild(newRow);

  const nameCell = document.createElement('td');
  nameCell.textContent = textInput.value;
  newRow.appendChild(nameCell);

  const dateCell = document.createElement('td');
  dateCell.textContent = dateInput.value;
  newRow.appendChild(dateCell);

  const amountCell = document.createElement('td');
  amountCell.textContent = numberInput.value;
  newRow.appendChild(amountCell);

  textInput.value = '';
  dateInput.value = '';
  numberInput.value = '';
});

