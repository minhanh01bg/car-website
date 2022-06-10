$(".content-vehicle-infos-title").click(() => {
    if ($(".content-vehicle-infos-selection-top").hasClass("animating") == false) {
        $(".content-vehicle-infos-selection-top").toggleClass("animating");
    }
    else {
        $(".content-vehicle-infos-selection-top").removeClass("animating");
    }
})

$(".sidebar-header-icon").click(function () {
    // $(".sidebar").hasClass("display_none")
    if ($(".sidebar a").css("display") == "none") {
        // $(".sidebar").removeClass("display_none");
        $(".sidebar").css({ "width": "250px" });

        $(".sidebar a").css({ "display": "block" });
        $(".sidebar-header-logo").css({ "display": "block" });
        $(".container-build").css({ "margin-left": "250px" });

    } else {
        $(".sidebar").css({ "width": "50px" });
        // $(".sidebar").toggleClass("display_none");
        $(".sidebar a").css({ "display": "none" });
        $(".sidebar-header-logo").css({ "display": "none" });
        $(".container-build").css({ "margin-left": "50px" });

    }
})
$(".click-log-in").click(function () {
    location.href = "login.html";
})
$(".logo").click(() => {
    location.href = "index.html";
})
$(".fa-cart-shopping").click(() => {
    location.href = "cart.html";
});
$(".click-continue-shop").click(function () {
    location.href = "buyonline.html";
})
function register() {
    location.href = "register.html";
}
$(".content-title h6").click(function () {
    if ($(".product-add").css("display") == "none") {
        $(".product-add").css({ "display": "block" });
    } else {
        $(".product-add").css({ "display": "none" });
    }
})
$(".product-add-title span").click(function () {
    if ($(".product-add").css("display") == "none") {
        $(".product-add").css({ "display": "block" });
    } else {
        $(".product-add").css({ "display": "none" });
    }
})
$("tr").click(function () {
    if ($(".product-add").css("display") == "none") {
        $(".product-add").css({ "display": "block" });
    } else {
        $(".product-add").css({ "display": "none" });
    }
})
$(".hamburger").click(function () {
    if ($(".content-nav").css("visibility") == "hidden") {
        $(".content-nav").css({ "visibility": "visible" });
        if ($(".content-nav").hasClass("hover-content-nav") == false) {
            $(".content-nav").toggleClass("hover-content-nav");
        } else {
            $(".content-nav").removeClass("hover-content-nav");
        }
        $(".hamburger").html(`<i class="fa-solid fa-xmark"></i>`);
    }
    else {
        $(".content-nav").css({ "visibility": "hidden" });
        if ($(".content-nav").hasClass("hover-content-nav") == false) {
            $(".content-nav").toggleClass("hover-content-nav");
        } else {
            $(".content-nav").removeClass("hover-content-nav");
        }
        $(".hamburger").html(`<i class="fa-solid fa-bars"></i>`);
    }
})
// $(".container-vechile-item-infos-button-add").click((e)=>{
//     console.log(e.target.parentElement.lastElementChild);
//     let ev = e.target.parentElement.lastElementChild;
//     console.log(ev.classList);

//     if($(".container-vechile-item-infos-button-add-option").hasClass("add")==false){
//         $(".container-vechile-item-infos-button-add-option").toggleClass("add");

//     }else{
//         $(".container-vechile-item-infos-button-add-option").removeClass("add");

//     }
// })