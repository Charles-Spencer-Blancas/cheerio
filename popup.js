function saveToggles() {
    let posture = document.getElementById('posture').checked;
    let water = document.getElementById('water').checked;
    let eye = document.getElementById('eye').checked;
    let move = document.getElementById('move').checked;

    chrome.storage.sync.set({
        posture: posture,
        water: water,
        eye: eye,
        move: move,
    });
}

function restoreToggles() {
    chrome.storage.sync.get(
        {
            posture: true,
            water: true,
            eye: true,
            move: true,
        },
        (items) => {
            document.getElementById('posture').checked = items.posture;
            document.getElementById('water').checked = items.water;
            document.getElementById('eye').checked = items.eye;
            document.getElementById('move').checked = items.move;
        }
    );
}

document.addEventListener('DOMContentLoaded', restoreToggles);
document.getElementById('save').addEventListener('click', saveToggles);
