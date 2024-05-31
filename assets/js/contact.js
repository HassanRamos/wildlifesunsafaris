$(function() {
    $('#contact-form').validator();

    // when the form is submitted
    $('#contact-form').on('submit', function(e) {
        e.preventDefault(); // Prevent the default form submission

        // if the validator does not prevent form submit
        if (!e.isDefaultPrevented()) {
            var url = "contact.php";

            // POST values in the background the script URL
            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function(data) {
                    // Assuming 'data' is a JSON object returned by contact.php
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;

                    // Let's compose Bootstrap alert box HTML
                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissible fade show">  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>' + messageText + '</div>';

                    // If we have messageAlert and messageText
                    if (messageAlert && messageText) {
                        // Inject the alert to .messages div in our form
                        $('#contact-form').find('.messages').html(alertBox);
                        // Empty the form
                        $('#contact-form')[0].reset();
                    }
                },
                error: function(xhr, status, error) {
                    // Handle errors here
                    var messageAlert = 'alert-danger';
                    var messageText = 'There was an error. Please try again later.';

                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissible fade show">  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>' + messageText + '</div>';

                    $('#contact-form').find('.messages').html(alertBox);
                }
            });
        }
    });


});




 