// OneSignal Initialization
OneSignal.push(function() {
    OneSignal.init({
        appId: "YOUR_ONESIGNAL_APP_ID",
        notifyButton: {
            enable: true,
        },
    });
});

// Example Announcements
const announcements = [
    {
        profilePic: "pfp1.jpg", // URL to profile pic
        username: "Council",
        title: "🚀 Big News Coming Soon!",
        lines: [
            "Stay tuned. More details will be revealed this week!",
            "Don’t miss out on the big reveal! Keep checking our site."
        ],
        timestamp: "Feb 25, 2025 - 3:45 PM"
    },
    {
        profilePic: "pfp2.jpg",
        username: "Council",
        title: "🎉 New Week, New Giveaway!",
        lines: [
            "This week’s giveaway is a $25 Amazon gift card.",
            "Stay active and recruit to win the prize!"
        ],
        timestamp: "Feb 20, 2025 - 1:00 PM"
    },
    // Add more announcements as needed
];

// Function to display the announcements
const displayAnnouncements = () => {
    const container = document.getElementById('announcements');
    announcements.forEach(a => {
        container.innerHTML += `
            <div class="announcement">
                <img src="${a.profilePic}" alt="Profile Picture">
                <div class="announcement-content">
                    <strong>${a.username}</strong> <br>
                    <h2>${a.title}</h2> <br>
                    ${a.lines.map(line => `<p>${line}</p>`).join("")} 
                    <span class="timestamp">${a.timestamp}</span>
                </div>
            </div>
        `;
    });
};

// Call function to display the announcements
displayAnnouncements();

