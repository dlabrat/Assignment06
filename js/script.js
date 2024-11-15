// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let form = document.getElementById('addForm');
let table = document.getElementById('employees');

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let empCount = 0;  // Initialize employee count

// UPDATE THE COUNT DISPLAY
const updateEmployeeCount = () => {
    document.getElementById('empCount').textContent = `(${empCount})`;
};

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();

    // GET THE VALUES FROM THE TEXT BOXES
    let id = document.getElementById('id').value;
    let name = document.getElementById('name').value;
    let extension = document.getElementById('extension').value;
    let email = document.getElementById('email').value;
    let department = document.getElementById('department').value;

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let row = table.insertRow(-1);

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW AND APPEND TEXT NODES
    let cellId = row.insertCell(0);
    cellId.appendChild(document.createTextNode(id));
    let cellName = row.insertCell(1);
    cellName.appendChild(document.createTextNode(name));
    let cellExtension = row.insertCell(2);
    cellExtension.appendChild(document.createTextNode(extension));
    let cellEmail = row.insertCell(3);
    cellEmail.appendChild(document.createTextNode(email));
    let cellDepartment = row.insertCell(4);
    cellDepartment.appendChild(document.createTextNode(department));

    // CREATE THE DELETE BUTTON
    let cellDelete = row.insertCell(5);
    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm';
    deleteBtn.textContent = 'Delete';
    cellDelete.appendChild(deleteBtn);

    // INCREMENT THE NUMBER OF EMPLOYEES IN THE TABLE
    empCount++;
    updateEmployeeCount();

    // RESET THE FORM
    form.reset();

    // SET FOCUS BACK TO THE ID TEXT BOX
    document.getElementById('id').focus();
});

// DELETE EMPLOYEE
table.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-danger')) {
        if (confirm('Are you sure you want to delete this employee?')) {
            // DELETE THE ROW
            let row = e.target.parentElement.parentElement;
            table.deleteRow(row.rowIndex);

            // DECREMENT THE NUMBER OF EMPLOYEES IN THE TABLE
            empCount--;
            updateEmployeeCount();
        }
    }
});
