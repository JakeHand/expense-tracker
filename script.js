let addExpense = document.getElementById('add-expense');

addExpense.onclick = function() {
    let newRow = document.createElement('tr');
    newRow.classList.add('newRow');

    let newItem = document.createElement('td');
    let newDate = document.createElement('td');
    let newAmount = document.createElement('td');
    let removeButton = document.createElement('button');

    let itemInput = document.getElementById('item-input').value;
    let dateInput = document.getElementById('date-input').value;
    let amountInput = document.getElementById('amount-input').value;
    
    newItem.innerHTML = itemInput;
    newDate.innerHTML = dateInput;
    newAmount.innerHTML = amountInput;
    removeButton.innerHTML = 'x';

    document.getElementById('tbody').appendChild(newRow);
    newRow.append(newItem, newDate, newAmount, removeButton);

    document.getElementById('item-input').value = '';
    document.getElementById('date-input').value = '';
    document.getElementById('amount-input').value = '';

    removeButton.onclick = function() {
        removeButton.parentElement.remove();
    }
};