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

        let response = await fetch("https://onesignal.com/api/v1/players", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Basic YOUR-ONESIGNAL-REST-API-KEY"
            },
            body: JSON.stringify({
                app_id: "YOUR-ONESIGNAL-APP-ID",
                identifier: emailInput,
                device_type: 11 // 11 means email subscription
            })
        });

        if (response.ok) {
            statusMessage.textContent = "✅ Subscribed successfully!";
        } else {
            statusMessage.textContent = "❌ Subscription failed. Try again.";
        }
    });
});
