var audio = new Audio();
const musicArr = [ "./11Rain.mp3", "./12Lightning.mp3", "./13wind.mp3", "./14Ocean.mp3", "./15SeaSide.mp3", "./21FirePlace.mp3", "./22AcousticGuitar.mp3", "./23Leaf.mp3", "./24Forest.mp3", "./25Train.mp3" ]; 
var current = -1; 
const play = async (n) =>{
    if(current == -1){
        audio.src = musicArr[n];
        await audio.play(); 
        current = n;
        console.log("Playing ",current);
    }else if(current == n){
        await audio.pause();
        console.log("Paused ",current);
        current = -1;
    }else{
        audio.src = musicArr[n];
        await audio.play(); 
        current = n;
        console.log("Playing ",current);
    }
    console.log("Current : ",current);
}