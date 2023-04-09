//contact tsrd
$(function () {
    $("#update-contact").click(function () {
        let email_address = prompt("Input your email adress:")
        if (email_address.indexOf("@") !== -1 && email_address.indexOf("@") === email_address.lastIndexOf("@") &&
            email_address.indexOf(".") !== -1 && email_address.indexOf(".") === email_address.lastIndexOf(".")) {
            let telephone_number = parseInt(prompt("Input your telepohone number:"))
            if (!isNaN(telephone_number)) {
                let infoPhone = $(".info-box-subtitle:first")
                let infoEmail = $(".info-box-subtitle:last")
                infoPhone.text(telephone_number)
                infoEmail.text(email_address)
                console.log("Contact: " + telephone_number)
                console.log("Adress: " + email_address);
            } else {
                alert("Atempted new telephone number contains unacceptable symbols. Try again using only numbers");
            }
        }
        else {
            alert("Invalid email adress. Needs both '@' and '.'");
        }
    })
})