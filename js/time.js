function currentTime(){
    let date = new Date();
    let hour = plusZero(date.getHours());
    let min = plusZero(date.getMinutes());
    let sec = plusZero(date.getSeconds());
    document.querySelector("#time").innerText = hour +":" + min +":" + sec;
    setTimeout(currentTime, 1000);
    
} 
function plusZero(number){

    if(number < 10){
        return "0" + number;
    }
    else{
        return number;
    }




}
currentTime();