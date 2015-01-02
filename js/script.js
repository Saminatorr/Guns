document.addEventListener("DOMContentLoaded", init);

function init() {
    getViewportData();

    goToSection1();

    $(".ExplosionImg").animate({ "opacity": "0" }, 50);

    listenToClicks();
}

//variabelen

var pageCounter = 0;

function listenToClicks() {
    var HomeButton = document.getElementById("HomeButton");
    HomeButton.addEventListener("click", goToSection1);

    var Button1300 = document.getElementById("Button1");
    Button1300.addEventListener("click", goToSection2);

    var Button1400 = document.getElementById("Button2");
    Button1400.addEventListener("click", goToSection3);

    var Button1500 = document.getElementById("Button3");
    Button1500.addEventListener("click", goToSection4);

    var Button1600 = document.getElementById("Button4");
    Button1600.addEventListener("click", goToSection5);

    var Button1700 = document.getElementById("Button5");
    Button1700.addEventListener("click", goToSection6);

    var Button1800 = document.getElementById("Button6");
    Button1800.addEventListener("click", goToSection7);

    var Button1900 = document.getElementById("Button7");
    Button1900.addEventListener("click", goToSection8);

    var Button2000 = document.getElementById("Button8");
    Button2000.addEventListener("click", goToSection9);

    var LaunchButton = document.getElementById("LaunchButton");
    LaunchButton.addEventListener("click", FireWorkLaunch);

    var DefuseButton = document.getElementById("DefuseButton");
    DefuseButton.addEventListener("click", DefuseBomb);

    var NextButton = document.getElementsByClassName("NextButton");
    for (var i = 0; i < NextButton.length; i++) {
        NextButton[i].addEventListener("click", goToNextSection);
    }

    var PreviousButton = document.getElementsByClassName("PreviousButton");
    for (var i = 0; i < PreviousButton.length; i++) {
        PreviousButton[i].addEventListener("click", goToPreviousSection);
    }
}

function goToNextSection() {
    switch (pageCounter) {
        case 0: goToSection2();
            break;
        case 1: goToSection3();
            break;
        case 2: goToSection4();
            break;
        case 3: goToSection5();
            break;
        case 4: goToSection6();
            break;
        case 5: goToSection7();
            break;
        case 6: goToSection8();
            break;
        case 7: goToSection9();
            break;
        default: goToSection1();
    }
}

function goToPreviousSection() {
    switch (pageCounter) {
        case 1: goToSection1();
            break;
        case 2: goToSection2();
            break;
        case 3: goToSection3();
            break;
        case 4: goToSection4();
            break;
        case 5: goToSection5();
            break;
        case 6: goToSection6();
            break;
        case 7: goToSection7();
            break;
        case 8: goToSection8();
            break;
        case 9: goToSection9();
            break;
        default: goToSection1();
    }
}

function getViewportData() {
    var heightScreen, widthScreen;
    heightScreen = $(window).height();
    widthScreen = $(window).width();
    $("#Section1").css({ 'height': heightScreen });
    $("#Section1").css({ 'width': widthScreen });
    $("#Section2").css({ 'height': heightScreen });
    $("#Section2").css({ 'width': widthScreen });
    $("#Section3").css({ 'height': heightScreen });
    $("#Section3").css({ 'width': widthScreen });
    $("#Section4").css({ 'height': heightScreen });
    $("#Section4").css({ 'width': widthScreen });
    $("#Section5").css({ 'height': heightScreen });
    $("#Section5").css({ 'width': widthScreen });
    $("#Section6").css({ 'height': heightScreen });
    $("#Section6").css({ 'width': widthScreen });
    $("#Section7").css({ 'height': heightScreen });
    $("#Section7").css({ 'width': widthScreen });
    $("#Section8").css({ 'height': heightScreen });
    $("#Section8").css({ 'width': widthScreen });
    $("#Section9").css({ 'height': heightScreen });
    $("#Section9").css({ 'width': widthScreen });
    console.log(heightScreen);
    console.log(widthScreen);
}

function goToSection1() {
    console.log("zit in de click 1");
    $('html, body').animate({
        scrollTop: $("#Section1").offset().top
    }, 500);
    var x = document.getElementsByClassName("button")
    for (var i = 0; i < x.length; i++) {
        $(x[i]).delay(200).queue(function (next) {
            $(this).css({ 'background-color': '#2980b9' });
            next();
        });
    }
    document.getElementById("ButtonHiglight1").innerHTML = "home";
    $(".PreviousButton").css({ 'visibility': 'hidden' });
    $(".NextButton").css({ 'visibility': 'visible' });
    pageCounter = 0;
}

function goToSection2() {
    console.log("zit in de click 2");
    $('html, body').animate({
        scrollTop: $("#Section2").offset().top
    }, 500);
    var x = document.getElementsByClassName("button")
    for (var i = 0; i < x.length; i++) {
        $(x[i]).delay(200).queue(function (next) {
            $(this).css({ 'background-color': '#e74c3c' });
            next();
        });
    }
    document.getElementById("ButtonHiglight2").innerHTML = "1300";
    $(".PreviousButton").css({ 'visibility': 'visible' });
    $(".NextButton").css({ 'visibility': 'visible' });
    pageCounter = 1;
}

var musicOn;
function FireWorkLaunch() {
    $(".ExplosionImg").animate({ "opacity": "1" }, 200);

    myAudio = new Audio('sound/firework.wav');
    if (musicOn == true) {
        console.log("hij speelt al");
        return null;
    }
    else {
        console.log("hij speelt nog niet");
        myAudio.play();
        musicOn = true;
        myAudio.addEventListener('ended', function () {
            this.currentTime = 0;
            musicOn = false;
            $(".ExplosionImg").animate({ "opacity": "0" }, 300);
        }, false);
    }
}

function goToSection3() {
    console.log("zit in de click 3");
    $('html, body').animate({
        scrollTop: $("#Section3").offset().top
    }, 500);

    var x = document.getElementsByClassName("button")
    for (var i = 0; i < x.length; i++) {
        $(x[i]).delay(200).queue(function (next) {
            $(this).css({ 'background-color': '#e56600' });
            next();
        });
    }
    document.getElementById("ButtonHiglight3").innerHTML = "1400";
    $(".PreviousButton").css({ 'visibility': 'visible' });
    $(".NextButton").css({ 'visibility': 'visible' });
    pageCounter = 2;

    startTimer();
}

var DefuseTimer
function startTimer() {
    var DefuseTime = 21;
    DefuseTimer = setInterval(function () { myTimer() }, 1000);

    function myTimer() {
        DefuseTime -= 1;
        document.getElementById("TimerDiv").innerHTML = DefuseTime;
        if (DefuseTime == 0) {
            //boom
            clearInterval(DefuseTimer);
        }
    }
}

function DefuseBomb() {
    clearInterval(DefuseTimer);
}


function goToSection4() {
    console.log("zit in de click 4");
    $('html, body').animate({
        scrollTop: $("#Section4").offset().top
    }, 500);
    var x = document.getElementsByClassName("button")
    for (var i = 0; i < x.length; i++) {
        $(x[i]).delay(200).queue(function (next) {
            $(this).css({ 'background-color': '#674172' });
            next();
        });
    }
    document.getElementById("ButtonHiglight4").innerHTML = "1500";
    $(".PreviousButton").css({ 'visibility': 'visible' });
    $(".NextButton").css({ 'visibility': 'visible' });
    pageCounter = 3;
}

function goToSection5() {
    console.log("zit in de click 5");
    $('html, body').animate({
        scrollTop: $("#Section5").offset().top
    }, 500);
    var x = document.getElementsByClassName("button")
    for (var i = 0; i < x.length; i++) {
        $(x[i]).delay(200).queue(function (next) {
            $(this).css({ 'background-color': '#2c3e50' });
            //34495E
            next();
        });
    }
    document.getElementById("ButtonHiglight5").innerHTML = "1600";
    $(".PreviousButton").css({ 'visibility': 'visible' });
    $(".NextButton").css({ 'visibility': 'visible' });
    pageCounter = 4;
}

function goToSection6() {
    console.log("zit in de click 6");
    $('html, body').animate({
        scrollTop: $("#Section6").offset().top
    }, 500);

    var x = document.getElementsByClassName("button")
    for (var i = 0; i < x.length; i++) {
        $(x[i]).delay(200).queue(function (next) {
            $(this).css({ 'background-color': '#9e782a' });
            //af842d
            //c4932e origineel
            next();
        });
    }
    document.getElementById("ButtonHiglight6").innerHTML = "1700";
    $(".PreviousButton").css({ 'visibility': 'visible' });
    $(".NextButton").css({ 'visibility': 'visible' });
    pageCounter = 5;
}

function goToSection7() {
    console.log("zit in de click 7");
    $('html, body').animate({
        scrollTop: $("#Section7").offset().top
    }, 500);
    var x = document.getElementsByClassName("button")
    for (var i = 0; i < x.length; i++) {
        $(x[i]).delay(200).queue(function (next) {
            $(this).css({ 'background-color': '#22313F' });

            //16b7b7
            next();
        });
    }
    document.getElementById("ButtonHiglight7").innerHTML = "1800";
    $(".PreviousButton").css({ 'visibility': 'visible' });
    $(".NextButton").css({ 'visibility': 'visible' });
    pageCounter = 6;
}

function goToSection8() {
    console.log("zit in de click 8");
    $('html, body').animate({
        scrollTop: $("#Section8").offset().top
    }, 500);
    var x = document.getElementsByClassName("button")
    for (var i = 0; i < x.length; i++) {
        $(x[i]).delay(200).queue(function (next) {
            $(this).css({ 'background-color': '#542733' });
            next();
        });
    }
    document.getElementById("ButtonHiglight8").innerHTML = "1900";
    $(".PreviousButton").css({ 'visibility': 'visible' });
    $(".NextButton").css({ 'visibility': 'visible' });
    pageCounter = 7;
}

function goToSection9() {
    console.log("zit in de click 9");
    $('html, body').animate({
        scrollTop: $("#Section9").offset().top
    }, 500);
    var x = document.getElementsByClassName("button")
    for (var i = 0; i < x.length; i++) {
        $(x[i]).delay(200).queue(function (next) {
            $(this).css({ 'background-color': '#4A3833' });
            next();
        });
    }
    document.getElementById("ButtonHiglight9").innerHTML = "2000";
    $(".PreviousButton").css({ 'visibility': 'visible' });
    $(".NextButton").css({ 'visibility': 'hidden' });
    pageCounter = 8;

}