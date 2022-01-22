function postureFunc() {
    chrome.alarms.create('posture', {
        periodInMinutes: 45, //45
    });
}

function waterFunc() {
    chrome.alarms.create('water', {
        periodInMinutes: 30, //30
    });
}

function eyeFunc() {
    chrome.alarms.create('eye', {
        periodInMinutes: 20, //20
    });
}

function moveFunc() {
    chrome.alarms.create('move', {
        periodInMinutes: 60, //60
    });
}

function notification(title, message, iconURL) {
    chrome.notifications.create({
        title: title,
        message: message,
        type: 'basic',
        iconUrl: iconURL,
    });
}

chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name == 'posture') {
        notification(
            'Posture Check',
            'Are you sitting up straight?',
            'assets/128.png'
        );
    }

    if (alarm.name == 'water') {
        notification(
            'Sip Check',
            "Take a sip of water if you haven't in a while",
            'assets/128.png'
        );
    }

    if (alarm.name == 'eye') {
        notification(
            'Short Eye Break',
            'For 20 seconds, look at something far outside or close your eyes',
            'assets/128.png'
        );
    }

    if (alarm.name == 'move') {
        notification(
            'Movement Break',
            'Stand, walk around, stretch a bit for around 5 minutes',
            'assets/128.png'
        );
    }
});

postureFunc();
waterFunc();
eyeFunc();
moveFunc();

chrome.storage.onChanged.addListener((changes, area) => {
    chrome.alarms.clearAll();

    if (changes.posture?.newValue) postureFunc();
    if (changes.water?.newValue) waterFunc();
    if (changes.eye?.newValue) eyeFunc();
    if (changes.move?.newValue) moveFunc();
});
