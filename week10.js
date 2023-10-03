let id=1;
// Create event listener to push the form data to the table when the submit button is clicked
document.getElementById('report').addEventListener('click', () => {
    let table = document.getElementById('records');
    let row = table.insertRow();
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = id
    row.insertCell(1).innerHTML = document.getElementById('new-location').value
    row.insertCell(2).innerHTML = `$ ${document.getElementById('new-price').value}`
    row.insertCell(3).innerHTML = document.getElementById('new-datetime').value
    
// Clear the form after submission
    document.getElementById('new-location').value = '';
    document.getElementById('new-price').value = '';
    document.getElementById('new-datetime').value = '';
    id++;
});
