document.addEventListener("DOMContentLoaded", init);

function init() {
    getViewportData();

    var HomeButton = document.getElementById("HomeButton");
    HomeButton.addEventListener("click", goToSection1);

    var Button1300 = document.getElementById("Button1");
    Button1300.addEventListener("click", goToSection2);

    var Button1400 = document.getElementById("Button2");
    Button1400.addEventListener("click", goToSection3);
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
}

function goToSection1() {
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

function goToSection3() {
    $('html, body').animate({
        scrollTop: $("#Section3").offset().top
    }, 500);

    var x = document.getElementsByClassName("button")
    for (var i = 0; i < x.length; i++) {
        $(x[i]).delay(200).queue(function (next) {
            $(this).css({ 'background-color': 'yellow' });
            next();
        });
    }
}