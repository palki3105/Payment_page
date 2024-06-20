// script.js
$(document).ready(function() {
    $("#method").on("change", function() {
        var selectedMethod = $(this).val();

        // Hide all payment details divs first
        $("#cardDetails, #upiDetails").addClass("d-none");

        if (selectedMethod === "creditCard" || selectedMethod === "debitCard") {
            $("#cardDetails").removeClass("d-none");
            $("#upiQRCode").empty(); // Clear any existing QR code
        } else if (selectedMethod === "upi") {
            $("#upiDetails").removeClass("d-none");
            // Call a function to generate and display the UPI QR code
            displayUpiQRCode();
        }
    });

    $("#paymentForm").on("submit", function(event) {
        event.preventDefault();
        // Call a function to handle the payment submission
        handlePayment();
    });
});

function displayUpiQRCode() {
    // Code to generate and display the UPI QR code goes here
    // Use a third-party library or service for generating QR codes
    // For example, you can use a library like 'qrcode.js'
    // to generate the QR code and then display it in the '#upiQRCode' div

    // For demonstration purposes, let's just display a placeholder image
    var qrCodeImageSrc = "./images/qr-code.png" ;
    $("#upiQRCode").html(`<img src="${qrCodeImageSrc}" alt="UPI QR Code">`);
}

function handlePayment() {
    // Code to handle the payment submission goes here
    // You can use JavaScript to process the payment details and send them to the server
    // for further processing. This may involve making API calls to a payment gateway.

    // For demonstration purposes, you can simply display an alert message
    alert("Payment successful!");
}
