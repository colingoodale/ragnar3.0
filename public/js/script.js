$(document).ready(function () {
    function emailRequest() {
        event.preventDefault();
        var emailInfo = {
            first_name: $('#first-name').val().trim(),
            last_name: $('#last-name').val().trim(),
            email: $('#email').val().trim(),
            message: $('#message').val().trim()
        }
        alert("Ragnar will get back to you shortly.")
    }
    $(document).on("click", "#submit", console.log("hi"));
})