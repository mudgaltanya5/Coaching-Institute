document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('contactForm').addEventListener('submit', function (e) {
        e.preventDefault();

        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let message = document.getElementById('message').value;

        let phone = "918955173579";

        let text = `Hello, my name is ${name}
        Email: ${email}
        Message: ${message}`;

        let url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

        window.location.href = url;
    });
});