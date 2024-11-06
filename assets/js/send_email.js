// Initialize EmailJS with your user ID
(function() {
    emailjs.init("50GzATLoFrdOZpR_0"); // Replace with your actual public key
})();

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Collect form data
    const formData = {
        first_name: document.getElementById("first-name").value,
        last_name: document.getElementById("last-name").value,
        message: document.getElementById("message").value,
        reply_to: document.getElementById("email").value
    };

    console.log(formData); // Debugging: Check the collected form data in the console

    // Send the email using EmailJS
    emailjs.send("service_x09j4k4", "template_d0zkiwh", formData)
        .then(function(response) {
            alert("Email sent successfully!");
        }, function(error) {
            alert("Failed to send email. Please try again later.");
        });
});
