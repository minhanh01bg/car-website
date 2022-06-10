$(document).ready(() => {
    let navText = [
        "<i class = 'bx bx-chevron-left'></i>",
        "<i class = 'bx bx-chevron-right'></i>",
    ];
    $(".content-slider").owlCarousel({
        items: 1,
        dots: false,
        loop: true,
        // nav: true,
        // navText: navText,
        autoplay: true
        // autoplayHoverPause: true,
    });
    $("#demoCarousel").owlCarousel({
        // center: true,
        // margin:30,
        items: 3,
        dots: true,
        loop: true,
        nav: true,
        navText: navText,
        autoplay: true,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:1
            },
            1024:{
                items:2
            }, 1440:{
                items:3
            }
        }
    });
    $(".container-vechile-item-img").owlCarousel({
        items: 1,
        dots: true,
        loop: true,
    });
    // var button_dot_vehicle = document.querySelectorAll(".container-vechile-item .owl-dot");
    // var x = 0;
    // for(let i = 0; i < button_dot_vehicle.length; i++){
    //     button_dot_vehicle[i].addEventListener("click",function(e){
    //         console.log(e.target);
    //         e.target.style.backgroundColor="black";
    //         x = i;
    //     });
    // }
    // for(let i = 0;i<button_dot_vehicle.length;i++){
    //     console.log(button_dot_vehicle[i]);
    // }
});
