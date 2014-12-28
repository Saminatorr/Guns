document.addEventListener("DOMContentLoaded", init);

function init() {
    getViewportData();

    $("#CanonDiv").hide();

    $("#ExplosionImg").css({ "visibility" : "hidden" });

    listenToClicks();
}

function listenToClicks()
{
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

    var FireworkButton = document.getElementById("FireworkButton");
    FireworkButton.addEventListener("click", goToFireworkTab);

    var CanonButton = document.getElementById("CanonButton");
    CanonButton.addEventListener("click", goToCanonTab);

    var LaunchButton = document.getElementById("LaunchButton");
    LaunchButton.addEventListener("click", FireWorkLaunch);
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

    console.log(heightScreen);
    console.log(widthScreen);
    console.log("test");
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
}

function goToFireworkTab()
{
    $("#CanonDiv").hide();
    $("#FireworkDiv").show();
}

function FireWorkLaunch()
{
    $("#ExplosionImg").css({ "visibility": "visible" });

    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', '../sound/firework.wav');
    audioElement.setAttribute('autoplay', 'autoplay');

    audioElement.play();
}

function goToCanonTab()
{
    $("#FireworkDiv").hide();
    $("#CanonDiv").show();
}

function goToSection3() {

    console.log("zit in de click 3");

    $('html, body').animate({
        scrollTop: $("#Section3").offset().top
    }, 500);

    var x = document.getElementsByClassName("button")
    for (var i = 0; i < x.length; i++) {
        $(x[i]).delay(200).queue(function (next) {
            $(this).css({ 'background-color': '#ff7200' });
            next();
        });
    }
}

function goToSection4() {

    console.log("zit in de click 4");

    $('html, body').animate({
        scrollTop: $("#Section4").offset().top
    }, 500);

    var x = document.getElementsByClassName("button")
    for (var i = 0; i < x.length; i++) {
        $(x[i]).delay(200).queue(function (next) {
            $(this).css({ 'background-color': '#27ae60' });
            next();
        });
    }
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
            next();
        });
    }
}