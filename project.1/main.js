//login page

const validCredentials = [
    { email: "user1@gmail.com", password: "1234" },
    { email: "user2@gmail.com", password: "0000" },
];

function validateLogin() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");

    emailError.textContent = "";
    passwordError.textContent = "";

    // email format vallidating
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailPattern)) {
        emailError.textContent = "Invalid email format";
        return;
    }

    const validUser = validCredentials.find((user) => user.email === email && user.password === password);

    if (validUser) {
        window.location.href = "home.html";
    } else {
        alert("Invalid credentials. Please try again.");
    }
}

//login page end here





//home page

let currentID = 1; 

        function addRow() {
            const nameInput = document.getElementById("newName");
            const name = nameInput.value;
            const ageInput = document.getElementById("age");
            const age = ageInput.value;
            const placeInput = document.getElementById("place");
            const place = placeInput.value;
            const emailInput = document.getElementById("email");
            const email = emailInput.value;
            const yearInput = document.getElementById("year");
            const year = yearInput.value;

            if (name.trim() === "") {
                alert("Please enter");
            }

            if (age.trim() === "") {
                alert("Please enter");
            }

            if (place.trim() === "") {
                alert("Please enter");
            }

            if (email.trim() === "") {
                alert("Please enter");
            }
            
            if (year.trim() === "") {
                alert("Please enter");
                return;
            }

            const table = document.getElementById("dataTable").getElementsByTagName('tbody')[0];
            const newRow = table.insertRow(table.rows.length);

            const idCell = newRow.insertCell(0);
            const nameCell = newRow.insertCell(1);
            const ageCell = newRow.insertCell(2);
            const placeCell = newRow.insertCell(3);
            const emailCell = newRow.insertCell(4);
            const yearCell = newRow.insertCell(5);
            const actionCell = newRow.insertCell(6);

            idCell.innerHTML = currentID++;
            nameCell.innerHTML = name;
            ageCell.innerHTML = age;
            placeCell.innerHTML = place;
            emailCell.innerHTML = email;
            yearCell.innerHTML = year;
            actionCell.innerHTML = '<button onclick="editRow(this)" class="editbtn">Edit</button>' +
                '<button onclick="deleteRow(this)" class="deletebtn">Delete</button>';

            nameInput.value = "";
            ageInput.value = "";
            placeInput.value = "";
            emailInput.value = "";
            yearInput.value = "";
        }

        function editRow(button) {
            let row = button.parentNode.parentNode;
            let cells = row.cells;
        
            for (let i = 1; i < cells.length - 1; i++) {
                cells[i].innerHTML = '<input type="text" value="' + cells[i].textContent + '">';
            }
        
            var editButton = row.querySelector('button:nth-child(1)');
            editButton.textContent = 'Save';
            editButton.setAttribute('onclick', 'saveRow(this)');
        }
        
        function saveRow(button) {
            var row = button.parentNode.parentNode;
            var cells = row.cells;
        
            for (var i = 1; i < cells.length - 1; i++) {
                cells[i].textContent = cells[i].querySelector('input').value;
            }
        
            var editButton = row.querySelector('button:nth-child(1)');
            editButton.textContent = 'Edit';
            editButton.setAttribute('onclick', 'editRow(this)');
        }
        
        function deleteRow(button) {
            var row = button.parentNode.parentNode;
            row.parentNode.removeChild(row);
        }


        // home page end here