setInterval(
    () =>
        notification(
            'Posture Check',
            'Are you sitting up straight?',
            'assets/128.png'
        ),
    minToMs(60)
);

setInterval(
    () =>
        notification(
            'Sip Check',
            "Take a sip of water if you haven't in a while",
            'assets/128.png'
        ),
    minToMs(30)
);

function notification(title, message, iconURL) {
    chrome.notifications.create({
        title: title,
        message: message,
        type: 'basic',
        iconUrl: iconURL,
    });
}

function minToMs(minutes) {
    return minutes * 60 * 1000;
}
