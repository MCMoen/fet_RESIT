//Arrays that contain the information used in the "addBtn"
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
    //Disables the button that has been clicked
    buttonElement.disabled = true;

    //Adds new table and populates the rows
    var table = document.getElementsByClassName("table")[0];
    var newRow = document.createElement("tr");

    // Create the cells for the row
    var idCell = document.createElement("td");
    var projCell = document.createElement("td");
    var descCell = document.createElement("td");
    var imgCell = document.createElement("td");

    if (index >= 0 && index < 5) {
        idCell.textContent = id[index];
        projCell.textContent = proj[index];
        descCell.textContent = desc[index];
        var imgElement = document.createElement("img");
        imgElement.src = img[index];
        imgElement.width = 100;
        imgElement.height = 100;
        imgCell.appendChild(imgElement);
    } else {
        console.error("Invalid index: " + index);
        return;
    }

    newRow.appendChild(idCell);
    newRow.appendChild(projCell);
    newRow.appendChild(descCell);
    newRow.appendChild(imgCell);

    table.appendChild(newRow);

    //Makes the image open in new tab when clicked
    $(imgCell).on('click', function () {
        window.open($(this).find('img').attr('src'));
    });

    //Highlights the font in pink when hovered over
    function highlight() {
        $(this).css('color', 'pink');
    }

    $(".table tr:odd").hover(highlight, function () {
        $(this).css('color', '');
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
