let tepukTangan = new Audio('/soundboard/Tepuk Tangan Sound Effect.mp3')
let sadTromp = new Audio('/soundboard/Sad Trombone - Sound Effect (HD).mp3')
const audio = false;

function keren(){
    if(!audio){
        tepukTangan.play()
        audio = true;
    }else{
        tepukTangan.pause()
        audio = false;
    }
}
function kurang(){
    if(!audio){
        sadTromp.play()
        audio = true;
    }else{
        sadTromp.pause()
        audio = false;
    }
}