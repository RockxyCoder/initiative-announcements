document.addEventListener("DOMContentLoaded", function () {
    OneSignal.push(function () {
        OneSignal.init({
            appId: "YOUR-ONESIGNAL-APP-ID",
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
