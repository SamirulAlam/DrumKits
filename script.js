let beats={
    "65":{
        beat:new Beat("./Drumset Audio Files/boom.wav"),
        button:new Button("#00fffe",65)
    },

    "83":{
        beat:new Beat("./Drumset Audio Files/clap.wav"),
        button:new Button("#00fffe",83)
    },
    "68":{
        beat:new Beat("./Drumset Audio Files/hihat.wav"),
        button:new Button("#00fffe",68)
    },
    "70":{
        beat:new Beat("./Drumset Audio Files/kick.wav"),
        button:new Button("#FF00FF",70)
    },
    "71":{
        beat:new Beat("./Drumset Audio Files/openhat.wav"),
        button:new Button("#FF00FF",71)
    },
    "72":{
        beat:new Beat("./Drumset Audio Files/ride.wav"),
        button:new Button("#FF00FF",72)
    },
    "74":{
        beat:new Beat("./Drumset Audio Files/snare.wav"),
        button:new Button("#FF00FF",74)
    },
    "75":{
        beat:new Beat("./Drumset Audio Files/tink.wav"),
        button:new Button("#FFFFFF",75)
    },
    "76":{
        beat:new Beat("./Drumset Audio Files/tom.wav"),
        button:new Button("#FFFFFF",76)
    },
}

triggerBeat=(e)=>{
    const keyCode=e.keyCode;
    if(keyCode in beats){
        let keyPress=beats[keyCode];
        keyPress.beat.play();
        keyPress.button.select();
    }
}

document.addEventListener("keydown",triggerBeat)