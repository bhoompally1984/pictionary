$(function () {
    $(".new-game").click(function(){
        $(".main-menu-screen").removeClass("show");
        $(".teams-screen").addClass("show");
    });

    $("#teams-coninue").click(function(){
        $(".teams-screen").removeClass("show");
        $(".draw-card-screen").addClass("show");
    });

    $("#draw-card-coninue").click(function(){
        $(".draw-card-screen").removeClass("show");
        $(".card-screen").addClass("show");
    });

    $("#card-coninue").click(function(){
        $(".card-screen").removeClass("show");
        $(".timer-screen").addClass("show");
    });

    $("#card-skip").click(function(){
        $(".card-screen").removeClass("show");
        $(".card-screen").addClass("show");
    });

    $(".game-settings").click(function(){
        $(".main-menu-screen").removeClass("show");
        $(".settings-screen").addClass("show");
    });

    $("#settings-accept").click(function(){
        $(".settings-screen").removeClass("show");
        $(".main-menu-screen").addClass("show");
    });

    $("#settings-accept").click(function(){
        $(".settings-screen").removeClass("show");
        $(".main-menu-screen").addClass("show");
    });
                
});