document.addEventListener("DOMContentLoaded", function () {
    OneSignal.push(function () {
        OneSignal.init({
            appId: "e7924c93-7f3c-4071-9d74-501269d4c4a6",
            notifyButton: {
                enable: true,
            },
        });
    });

    // Email Subscription Handling
document.getElementById("email-subscribe-form").addEventListener("submit", async function (event) {
    event.preventDefault();

    let emailInput = document.getElementById("email").value;
    let statusMessage = document.getElementById("email-status");

    let response = await fetch("https://delicate-wildflower-7ad1.rockygames916.workers.dev/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email: emailInput })
    });

    if (response.ok) {
        statusMessage.textContent = "✅ Subscribed successfully!";
    } else {
        statusMessage.textContent = "❌ Subscription failed. Try again.";
    }
});
