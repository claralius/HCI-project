$(document).ready(function(){


    $("#prev").click(function(){

        var current = $(".active");
        var prevImg = current.prev();
        if(prevImg.length){
            current.removeClass("active");
            prevImg.addClass("active");
        }
    })

    $("#next").click(function(){

        var current = $(".active");
        var nextImg = current.next();
        if(nextImg.length){
            current.removeClass("active");
            nextImg.addClass("active");
        }
    })


})