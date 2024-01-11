function sendEmail(){
    Email.send({
        
        Host : "smtp.elasticemail.com",
        Username : "khaisekhanwayanad@gmail.com",
        Password : "D7C7B008EDE9447BD224B8F96ECA5DA4294E",
        To : 'khzkhanzz@gmail.com',
        From : "khaisekhanwayanad@gmail.com",
        Subject : "New Contact Form Enquiry",
        Body : "Name: " + document.getElementById("Name").value
            + "<br> Email: " + document.getElementById("email").value
            + "<br> Phone No: " +document.getElementById("Phone").value
            + "<br> Message: " + document.getElementById("Message").value
    }).then(
message => alert(message)
)

}