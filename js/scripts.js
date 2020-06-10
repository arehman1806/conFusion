$(document).ready(function () {
    $("#carouselHomePage").carousel( { interval: 2000,
        pause: "false"} );
    $('#carouselHomePage').carousel("cycle");
    $("#carousel-control").click(function () {
        if ($("#carousel-control-icon").hasClass("fa-pause")) {
            $('#carousel-control-icon').toggleClass('fa-pause fa-play');
            $("#carouselHomePage").carousel("pause");
        }
        else {
            $('#carousel-control-icon').toggleClass('fa-play fa-pause');
            $('#carouselHomePage').carousel("cycle");
        }

    });
    $("#loginLink").click(function () {
        $("#loginModal").modal();
    })
    $("#reserveFormButton").click(function () {
        $("#reserveformmodal").modal();
    })

});