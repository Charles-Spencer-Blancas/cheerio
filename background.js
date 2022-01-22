setInterval(() => {
    notification();
}, 30000);

function notification() {
    chrome.notifications.create({
        title: 'test',
        message: 'this is a test message',
        type: 'basic',
        iconUrl: 'assets/128.png',
    });
}
