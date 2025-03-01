document.addEventListener("DOMContentLoaded", function () {
    const smsForm = document.getElementById("sms-subscribe-form");
    const verifyForm = document.getElementById("sms-verify-form");
    const phoneInput = document.getElementById("phone");
    const codeInput = document.getElementById("verification-code");
    const verificationSection = document.getElementById("verification-section");
    let currentPhone = "";

    smsForm.addEventListener("submit", function (event) {
        event.preventDefault();
        currentPhone = phoneInput.value;
        
        fetch("https://textbelt.com/text", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                phone: currentPhone,
                message: "Your verification code is 123456",
                key: "textbelt"
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                verificationSection.style.display = "block";
                alert("A verification code has been sent to your phone.");
            } else {
                alert("Error sending SMS. Please try again later.");
            }
        })
        .catch(error => console.error("SMS Error:", error));
    });

    verifyForm.addEventListener("submit", function (event) {
        event.preventDefault();
        
        if (codeInput.value === "123456") { 
            alert("Phone number verified and subscribed!");
        } else {
            alert("Incorrect verification code. Please try again.");
        }
    });
});
