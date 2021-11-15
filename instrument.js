const pads = Array.from(document.querySelectorAll(".pad"));

//LOFI SET//


// audio files -->
let drum1Audio = document.querySelector("#audio1");
let drum2Audio = document.querySelector("#audio2");
let drum3Audio = document.querySelector("#audio3");
let drum4Audio = document.querySelector("#audio4");
//
let snare1Audio = document.querySelector("#audio5");
let snare2Audio = document.querySelector("#audio6");
let clap1Audio = document.querySelector("#audio7");
let clap2Audio = document.querySelector("#audio8");
//
let melody1Audio = document.querySelector("#audio9");
let melody2Audio = document.querySelector("#audio10");
let melody3Audio = document.querySelector("#audio11");
let melody4Audio = document.querySelector("#audio12");
//
let fx1Audio1 = document.querySelector("#audio13");
let fx1Audio2 = document.querySelector("#audio14");
let fx1Audio3 = document.querySelector("#audio15");
let fx1Audio4 = document.querySelector("#audio16");
//
let lofiSounds = [drum1Audio, drum2Audio, drum3Audio, drum4Audio, snare1Audio, snare2Audio, clap1Audio, clap2Audio, melody1Audio, melody2Audio, melody3Audio, melody4Audio, fx1Audio1, fx1Audio2, fx1Audio3, fx1Audio4];
// <--

const possibleCodes = [1, 2, 3, 4, "q", "w" ,"e", "r", "a", "s", "d", "f", "z", "x", "c", "v"];
const selectedKey = window.addEventListener("keydown", (e) => {
    playAudio(e.key);
    highlightKeys(e.key);
})

// function to detect keypress and repsective audio file

function playAudio(selectedKey) {
    for (i = 0; i < pads.length; i++) {
        pads[i] = possibleCodes[i];
        if (selectedKey == pads[i]) {
            lofiSounds[i].play();
        }
    }
}



