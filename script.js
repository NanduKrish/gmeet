const muteAudioButton = document.getElementById('mute-audio');
const muteVideoButton = document.getElementById('mute-video');
const joinNowButton = document.getElementById('join-now');

let audioMuted = true;
let videoMuted = true;

muteAudioButton.addEventListener('click', () => {
    audioMuted = !audioMuted;
    if (audioMuted) {
        muteAudioButton.style.backgroundColor = '#e53935';
        muteAudioButton.style.border = 'none';
        muteAudioButton.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M11 5c0-.55.45-1 1-1s1 .45 1 1v5.17l1.82 1.82c.11-.31.18-.64.18-.99V5c0-1.66-1.34-3-3-3S9 3.34 9 5v1.17l2 2V5zM2.81 2.81L1.39 4.22l11.65 11.65c-.33.08-.68.13-1.04.13-2.76 0-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c.57-.08 1.12-.24 1.64-.46l5.14 5.14 1.41-1.41L2.81 2.81zM19 11h-2c0 .91-.26 1.75-.69 2.48l1.46 1.46A6.921 6.921 0 0 0 19 11z"></path></svg>';
        // Code to mute the microphone
    } else {
        muteAudioButton.style.backgroundColor = 'transparent';
        muteAudioButton.style.border = '1px solid white';
        muteAudioButton.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm-1-9c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1s-1-.45-1-1V5z"></path><path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"></path></svg>';
        // Code to unmute the microphone
    }
});

muteVideoButton.addEventListener('click', () => {
    videoMuted = !videoMuted;
    if (videoMuted) {
        muteVideoButton.style.backgroundColor = '#e53935';
        muteVideoButton.style.border = 'none';
        muteVideoButton.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M18 10.48V6c0-1.1-.9-2-2-2H6.83l2 2H16v7.17l2 2v-1.65l4 3.98v-11l-4 3.98zM16 16L6 6 4 4 2.81 2.81 1.39 4.22l.85.85C2.09 5.35 2 5.66 2 6v12c0 1.1.9 2 2 2h12c.34 0 .65-.09.93-.24l2.85 2.85 1.41-1.41L18 18l-2-2zM4 18V6.83L15.17 18H4z"></path></svg>';
        // Code to turn off the camera
    } else {
        muteVideoButton.style.backgroundColor = 'transparent';
        muteVideoButton.style.border = '1px solid white';
        muteVideoButton.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M18 10.48V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-4.48l4 3.98v-11l-4 3.98zm-2-.79V18H4V6h12v3.69z"></path></svg>';
        // Code to turn on the camera
    }
});

joinNowButton.addEventListener('click', () => {
    document.getElementById('video-container').style.display = 'block';
    document.getElementById('video-player').play();
});