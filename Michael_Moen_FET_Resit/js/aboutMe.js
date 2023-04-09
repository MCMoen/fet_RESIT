//about me

let aboutMe = [
    "ABOUT ME",
    "I DELIVER PROJECTS HALF DONE!",
    "More about me"
]

let aboutComp = [
    "I have a reputation for mediocracy",
    "Guided by my need for money",
    "I have freinds!",
    "I work alone!"
]


let myValues = [
    "MY VALUES",
    "I might have values..."
]

let valueSlide = [
    "I use ancient artifacts",
    "We don't like you!",
    "The Berlin wall had more integrity than us"
]


$(document).ready(function append() {
    $("#about-us .into-title").text(aboutMe[0]);
    $("#about-us .into-sub-title").text(aboutMe[1]);
    $("#about-us p").text(aboutMe[2]);
    $(".service-box-title").each(function (i) {
        $(this).text(aboutComp[i]);
    })
    $(".card-body").each(function (i) {
        $(this).text(valueSlide[i]);
    })
})

$(function () {
    $("#ts-features").click(function () {
        $(this).css({
            "color": "white",
            "background": "powderblue"
        });
        $("#ts-features h3").css({
            "color": "white",
        })
        $("#about-us .into-title").css({
            "color": "white",
        })
    });
});
