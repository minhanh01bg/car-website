var scroll = 0;
window.onscroll = () => {
    var current = document.documentElement.scrollTop;
    console.log(scroll);
    // set background navigation bar
    if (current >= 1560) {
        if($(".content-vehicle-infos").hasClass("top-fixed")==false){
            $(".content-vehicle-infos").toggleClass("top-fixed");
        }
        if($(".container-vehicles-list-title").hasClass("Margin-bottom")==false){
            $(".container-vehicles-list-title").toggleClass("Margin-bottom");
        }
    }
    if (current < 1560) {
        if($(".content-vehicle-infos").hasClass("top-fixed")==true){
            $(".content-vehicle-infos").removeClass("top-fixed");
        }
        if($(".container-vehicles-list-title").hasClass("Margin-bottom")==true){
            $(".container-vehicles-list-title").removeClass("Margin-bottom");
        }
    }

    if (current < scroll) {
        scroll = current;
        $(".content-vehicle-infos-selection-top").removeClass("animating");

    } else if (current > scroll) {
        scroll = current;
        $(".content-vehicle-infos-selection-top").removeClass("animating");
    }
    if (current) {
        // top up scroll
        $(".top-up-icon").css({
            "visibility": "visible",
            "opacity": "1",
            "z-index": "900",
            "transform": "translateY(-10px)"
        })
    } 
    else {
        // top up scroll
        $(".top-up-icon").css({
            "visibility": "hidden",
            "opacity": "0",
            "z-index": "0",
            "transform": "translateY(-50px)"
        })
    }
};
// clicked top up scroll
$(".top-up-icon").click(function () {
    $("html, body").animate({
        scrollTop: 0
    }, 100, () => {
        window.location.hash = 0;
    })
})
// $("#glow").click(function () {
//     $("html, body").animate({
//         scrollTop: 0
//     }, 100, () => {
//         window.location.hash = 0;
//     })
// });
