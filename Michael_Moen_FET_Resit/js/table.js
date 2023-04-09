//Commititing ajrfoidnsa rpo setr
/*
function addRow() {
    let table = document.getElementsByClassName('table')
    let newRow = document.createElement('tr')
    let idCell = document.createElement('td')
    idCell.textContent = "Dumbo"
    table.appendChild(newRow)
}
*/
id = ["Michael", "Pedro", "Peter", "Barney", "Ted"]
proj = ["Cookie!", "AlphaOne", "Webslinger", "Playbook", "Anger"]
desc = ["Create a better version of Cookie Clicker!",
    "Hardcoding a better chessbot than AlphaZero's AI",
    "Creating an AI for the webslinger!",
    "Creating an algorithm that personally tailors a playbook for the user",
    "A self-learning personal anger management course."
]
img = ["https://as2.ftcdn.net/v2/jpg/02/29/55/47/1000_F_229554761_qI7vB5bc6Fr0yRwj1b9ZUloqvx7fja6P.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpMNdljPPIo3uEWqANHRRmcAD0VKFl16EeqQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBm7qaj-2uwdSbbFE_njghzoVx1Fa3kNHHsg&usqp=CAU",
    "https://playful-learning.dk/wp-content/uploads/2021/08/Island-1536x1280-1-e1629293958567.jpg",
    "https://cdn.shopify.com/s/files/1/1061/1924/products/Very_Angry_Emoji_7f7bb8df-d9dc-4cda-b79f-5453e764d4ea_large.png?v=1571606036"

]

// Function to add a new row to the table
function addRow(index, buttonElement) {

    buttonElement.disabled = true;
    // Find the table element by its class name
    var table = document.getElementsByClassName("table")[0];

    // Create a new row element
    var newRow = document.createElement("tr");

    // Create the cells for the row
    var idCell = document.createElement("td");
    var projCell = document.createElement("td");
    var descCell = document.createElement("td");
    var imgCell = document.createElement("td");

    // Set the content for the cells (you can customize this based on your requirements)
    if (index >= 0 && index < 5) {
        idCell.textContent = id[index];
        projCell.textContent = proj[index];
        descCell.textContent = desc[index];
        var imgElement = document.createElement("img");
        imgElement.src = img[index];
        imgElement.width = 100; // set desired width
        imgElement.height = 100;
        imgCell.appendChild(imgElement);
    } else {
        // Handle invalid index
        console.error("Invalid index: " + index);
        return;
    }
    // Append the cells to the row
    newRow.appendChild(idCell);
    newRow.appendChild(projCell);
    newRow.appendChild(descCell);
    newRow.appendChild(imgCell);

    // Append the row to the table
    table.appendChild(newRow);

    $(imgCell).on('click', function () {
        window.open($(this).find('img').attr('src'));
    });


    function highlight() {
        $(this).css('color', 'pink');
    }

    // Attach hover event handler to odd rows
    $(".table tr:odd").hover(highlight, function () {
        $(this).css('color', ''); // Reset color on mouseout
    });
}



document.getElementById('btnAdd1').addEventListener('click', function () {
    addRow(0, this);
});
document.getElementById('btnAdd2').addEventListener('click', function () {
    addRow(1, this);
});
document.getElementById('btnAdd3').addEventListener('click', function () {
    addRow(2, this);
});
document.getElementById('btnAdd4').addEventListener('click', function () {
    addRow(3, this);
});
document.getElementById('btnAdd5').addEventListener('click', function () {
    addRow(4, this);
});





/*
function addRow() {
    // Get the table element by ID
    var table = document.getElementById('project-area').querySelector('.table');

    // Create a new row
    var row = document.createElement('tr');
    row.classList.add('table-row');

    // Add cells to the row with unique data
    var idCell = document.createElement('td');
    idCell.textContent = 'ID ' + (table.rows.length + 1);
    row.appendChild(idCell);

    var nameCell = document.createElement('td');
    nameCell.textContent = 'Project Name ' + (table.rows.length + 1);
    row.appendChild(nameCell);

    var descCell = document.createElement('td');
    descCell.textContent = 'Project Description ' + (table.rows.length + 1);
    row.appendChild(descCell);

    var imgCell = document.createElement('td');
    imgCell.innerHTML = '<img src="image_url_' + (table.rows.length + 1) + '" class="table-image">';
    row.appendChild(imgCell);

    // Append the row to the table
    table.appendChild(row);

    // Add click event listener to the image for opening in a new tab
    row.querySelector('.table-image').addEventListener('click', function () {
        window.open(this.src, '_blank');
    });

    // Add hover event listeners for changing font color
    row.addEventListener('mouseover', function () {
        this.style.color = 'pink';
    });
    row.addEventListener('mouseout', function () {
        this.style.color = 'black';
    });

    // Disable the button that was clicked
    this.disabled = true;
}

// Add click event listeners to each button
document.getElementById('btnAdd1').addEventListener('click', addRow);
document.getElementById('btnAdd2').addEventListener('click', addRow);
document.getElementById('btnAdd3').addEventListener('click', addRow);
document.getElementById('btnAdd4').addEventListener('click', addRow);
document.getElementById('btnAdd5').addEventListener('click', addRow);

$(imgCell).on('click', function () {
    window.open($(this).find('img').attr('src'), '_blank');
});

// Add hover event listeners for changing font color
row.addEventListener('mouseover', function () {
    if (this.rowIndex % 2 === 0) {
        this.style.color = 'pink';
    }
});
row.addEventListener('mouseout', function () {
    if (this.rowIndex % 2 === 0) {
        this.style.color = 'black';
    }
});

*/