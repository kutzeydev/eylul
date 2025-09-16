const playBtn = document.getElementById("playBtn");
const playBtn2 = document.getElementById("playBtn2");
const pauseBtn = document.getElementById("gunsBtn");
const pauseBtnUp = document.getElementById("upperPause");
var playStat = 0;
var playStat2 = 0;

playBtn.onclick = function(){
    if (playStat == 0) {
    document.getElementById("music").play();
    playBtn.className ="fa-solid fa-pause";
    document.getElementById("musicPlay").style.display = "block";
    document.getElementById("musicPlay").classList = "musicDown";
    playStat = 1;

    }
    else if(playStat == 1){
    document.getElementById("music").pause();
    playStat = 0;
    playBtn.className ="fa-solid fa-play";

    }
    return playStat
} 
playBtn2.onclick = function(){
    if (playStat2 == 0) {
    document.getElementById("music2").play();
    document.getElementById("musicName").textContent = "Endamın Yeter";
    document.getElementById("artistName").textContent = "Kuzaç";
    pauseBtnUp.className ="fa-solid fa-pause";
    document.getElementById("image").classList = "musicImg";

    playBtn2.className ="fa-solid fa-pause";
    playStat2 = 1;

    }
    else if(playStat2 == 1){
    document.getElementById("music2").pause();
    playStat2 = 0;
    playBtn2.className ="fa-solid fa-play";
    pauseBtnUp.className ="fa-solid fa-play";
    document.getElementById("image").classList = "";

    }
    return playStat2
} 
pauseBtnUp.onclick = function(){
    if (playStat == 0) {
    document.getElementById("music").play();
    playBtn.className ="fa-solid fa-pause";
    pauseBtnUp.className ="fa-solid fa-pause";

    playStat = 1;
    document.getElementById("image").classList = "musicImg";

    }
    else if(playStat == 1){
    document.getElementById("music").pause();
    playStat = 0;
    playBtn.className ="fa-solid fa-play";
    pauseBtnUp.className ="fa-solid fa-play";
    document.getElementById("image").classList = "";


    }
    return playStat
}
pauseBtn.onclick = function(){
    document.getElementById("music").pause();
    playBtn.className ="fa-solid fa-play";
    pauseBtnUp.className ="fa-solid fa-play";
    document.getElementById("image").classList = "";

}
document.getElementById("name").addEventListener("input", function(){
    if(this.value == "eylül" || this.value == "Eylül"){
        document.getElementById("quest1").style.display = "none";
        document.getElementById("quest2").style.display = "block";
        document.getElementById("quest2").className = "questCome quests";

    }
});
document.getElementById("btn2").onclick = function(){
    document.getElementById("quest2").style.display = "none";
        document.getElementById("quest3").style.display = "block";
        document.getElementById("quest3").className = "questCome quests";
}
document.getElementById("btn3").onclick = function(){
    document.getElementById("quest3").style.display = "none";
        document.getElementById("quest4").style.display = "block";
        document.getElementById("quest4").className = "questCome quests";
}
document.getElementById("btn4").onclick = function(){
    document.getElementById("quest4").style.display = "none";
        document.getElementById("quest5").style.display = "block";
        document.getElementById("quest5").className = "questCome quests";

}
document.getElementById("btn5").onclick = function(){
    document.getElementById("quest5").style.display = "none";
        document.getElementById("quest6").style.display = "block";
        document.getElementById("quest6").className = "questCome quests";

}
document.getElementById("btn6").onclick = function(){
    document.getElementById("quest6").style.display = "none";
        document.getElementById("quest7").style.display = "block";
        document.getElementById("quest7").className = "questCome quests";

}
document.getElementById("btn7").onclick = function(){
    document.getElementById("quest7").style.display = "none";
        document.getElementById("quest8").style.display = "block";
        document.getElementById("quest8").className = "questCome quests";

}
document.getElementById("btn8").onclick = function(){
    document.getElementById("quest8").style.display = "none";
        document.getElementById("quest9").style.display = "block";
        document.getElementById("quest9").className = "questCome quests";

}
document.getElementById("btn9").onclick = function(){
    document.getElementById("quest9").style.display = "none";
        document.getElementById("quest10").style.display = "block";
        document.getElementById("quest10").className = "questCome quests";

}
document.getElementById("btn10").onclick = function(){
    document.getElementById("quest10").style.display = "none";
        document.getElementById("quest11").style.display = "block";
        document.getElementById("quest11").className = "questCome quests";

}
document.getElementById("btn11").onclick = function(){
    document.getElementById("quest11").style.display = "none";
        document.getElementById("quest12").style.display = "block";
        document.getElementById("quest12").className = "questCome quests";

}
document.getElementById("btn12").onclick = function(){
    document.getElementById("quest12").style.display = "none";
        document.getElementById("quest13").style.display = "block";
        document.getElementById("quest13").className = "questCome quests";

}
document.getElementById("btn13").onclick = function(){
    document.getElementById("quest13").style.display = "none";
        document.getElementById("quest14").style.display = "block";
        document.getElementById("quest14").className = "questCome quests";

}
document.getElementById("btn14").onclick = function(){
    document.getElementById("quest14").style.display = "none";
        document.getElementById("quest15").style.display = "block";
        document.getElementById("quest15").className = "questCome quests";

}
document.getElementById("btn15").onclick = function(){
    document.getElementById("quest15").style.display = "none";
        document.getElementById("quest16").style.display = "block";
        document.getElementById("quest16").className = "questCome quests";

}
document.getElementById("btn16").onclick = function(){
    document.getElementById("quest16").style.display = "none";
        document.getElementById("quest17").style.display = "block";
        document.getElementById("quest17").className = "questCome quests";

}
document.getElementById("btn17").onclick = function(){
    document.getElementById("quest17").style.display = "none";
        document.getElementById("quest18").style.display = "block";
        document.getElementById("quest18").className = "questCome quests";

}
document.getElementById("btn18").onclick = function(){
    document.getElementById("quest18").style.display = "none";
        document.getElementById("quest19").style.display = "block";
        document.getElementById("quest19").className = "questCome quests";

}
document.getElementById("btn19").onclick = function(){
    document.getElementById("quest19").style.display = "none";
        document.getElementById("quest20").style.display = "block";
        document.getElementById("quest20").className = "questCome quests";

}
document.getElementById("btn20").onclick = function(){
    document.getElementById("quest20").style.display = "none";
        document.getElementById("quest21").style.display = "block";
        document.getElementById("quest21").className = "questCome quests";

}
document.getElementById("btn21").onclick = function(){
    document.getElementById("quest21").style.display = "none";
        document.getElementById("quest22").style.display = "block";
        document.getElementById("quest22").className = "questCome quests";

}
document.getElementById("btn22").onclick = function(){
    document.getElementById("quest22").style.display = "none";
        document.getElementById("quest23").style.display = "block";
        document.getElementById("quest23").className = "questCome quests lastQuest";

}
document.getElementById("btn23").onclick = function(){
    document.getElementById("quest23").style.display = "none";
        document.getElementById("quest24").style.display = "block";
        document.getElementById("quest24").className = "questCome quests";

}
