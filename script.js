
// let speech = new SpeechSynthesisUtterance();
// let textArea = document.querySelector('#textarea');
// let btn = document.querySelector('#btn');

// btn.addEventListener('click', () => {
//     console.log('hello');

//     speech.text = textArea.value;
//     window.speechSynthesis.speak(speech);
// })

// let voices = [];
// let voiceSelect = document.querySelector('#select');

let speech = new SpeechSynthesisUtterance();
let textArea = document.querySelector('#textarea');
let btn = document.querySelector('#btn');
let voiceSelect = document.querySelector('#select');

// Populate the voices dropdown
function populateVoices() {
    let voices = speechSynthesis.getVoices();
    
    if (voices.length > 0) {
        voices.forEach((voice, index) => {
            let option = document.createElement('option');
            option.value = index;
            option.innerHTML = `${voice.name} (${voice.lang})`;
            voiceSelect.appendChild(option);
        });
    }
}

// Check if voices are available and populate the dropdown
window.speechSynthesis.onvoiceschanged = () => {
    populateVoices();
};

btn.addEventListener('click', () => {
    // Get the selected voice
    let selectedVoice = speechSynthesis.getVoices()[voiceSelect.value];
    if (selectedVoice) {
        speech.voice = selectedVoice;
    }
    
    speech.text = textArea.value;
    window.speechSynthesis.speak(speech);
});

