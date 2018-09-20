//Songs
const strawberryFieldsAudio = document.getElementById('strawberyFields');
const blackBirdAudio = document.getElementById('blackbird');
const hereComesTheSunAudio = document.getElementById('hereComesTheSun');
const withALittleHelpAudio = document.getElementById('withALittleHelp');

//NavButtons to play Music
const nav = document.querySelector('ul');

//music selector
nav.addEventListener('click', playMusic);

function playMusic(event) {
    debugger;
    if (event.target.innerHTML === "John Lennon") {
        strawberryFieldsAudio.volume = 0;
        strawberryFieldsAudio.play();
        //Fade in
        if (strawberryFieldsAudio.duration > 0 && !strawberryFieldsAudio.paused) {
            var fadeIn = setInterval(function() { //1
                if (strawberryFieldsAudio.volume > .16) {
                    clearInterval(fadeIn);
                }
                strawberryFieldsAudio.volume += .01;
                console.log(strawberryFieldsAudio.volume)
            }, 100);
        }
    }
    else if (event.target.innerHTML === "Paul McCartney") {
        blackBirdAudio.volume = 0;
        blackBirdAudio.play();
        //Fade in
        if (blackBirdAudio.duration > 0 && !blackBirdAudio.paused) {
            var fadeIn = setInterval(function() {
                if (blackBirdAudio.volume > .34) {
                    clearInterval(fadeIn);
                }
                blackBirdAudio.volume += .01;
                console.log(blackBirdAudio.volume)
            }, 100);
        }

    }
    else if (event.target.innerHTML === "George Harrison") {
        hereComesTheSunAudio.volume = 0;
        hereComesTheSunAudio.play();
        //Fade in
        if (hereComesTheSunAudio.duration > 0 && !hereComesTheSunAudio.paused) {
            var fadeIn = setInterval(function() {
                if (hereComesTheSunAudio.volume > .34) {
                    clearInterval(fadeIn);
                }
                hereComesTheSunAudio.volume += .01;
                console.log(hereComesTheSunAudio.volume)
            }, 100);
        }
    }
    else if (event.target.innerHTML === "Ringo Starr") {
        withALittleHelpAudio.volume = 0;
        withALittleHelpAudio.play();
        //Fade in
        if (withALittleHelpAudio.duration > 0 && !withALittleHelpAudio.paused) {
            var fadeIn = setInterval(function() {
                if (withALittleHelpAudio.volume > .16) {
                    clearInterval(fadeIn);
                }
                withALittleHelpAudio.volume += .01;
                console.log(withALittleHelpAudio.volume)
            }, 100);
        }
    }
    else {
        return;
    }
}

//stop multiple songs from playing at once
document.addEventListener('play', function(event){
    debugger;
    var allAudios = document.getElementsByTagName('audio');
    for(var i = 0; i<allAudios.length; i++){
        if(allAudios[i] != event.target){
            var songAudio = allAudios[i];
            var fadeOut = setInterval(function() { //2
                allAudios[i].volume -= .1;
                if (songAudio.volume < 0){
                    clearInterval(fadeOut);
                }
            }, 100, i);
        }
    }
}, true);

