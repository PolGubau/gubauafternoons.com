$(document).ready(function() {
    //  ! CLASIFICADOR

    // AGREGANDO CLASE ACTIVE AL PRIMER ENLACE ====================
    $('.category_item[category="all"]').addClass('ct_item-active');

    // FILTRANDO PRODUCTOS  ============================================

    $('.category_item').click(function() {
        var catProduct = $(this).attr('category');

        // AGREGANDO CLASE ACTIVE AL ENLACE SELECCIONADO
        $('.category_item').removeClass('ct_item-active');
        $(this).addClass('ct_item-active');

        // OCULTANDO PRODUCTOS =========================
        $('.project-block').css('transform', 'scale(0)');

        function hideProduct() {
            $('.project-block').hide();
        }
        setTimeout(hideProduct, 0);

        // MOSTRANDO PRODUCTOS =========================
        function showProduct() {
            $('.project-block[category="' + catProduct + '"]').show();
            $('.project-block[category="' + catProduct + '"]').css('transform', 'scale(1)');
        }
        setTimeout(showProduct, 0);

        function cambiarplace() {
            document.getElementsByName('provisional_placeholder')[0].placeholder = catProduct;
        }
        setTimeout(cambiarplace, 0);

    });

    // MOSTRANDO TODOS LOS PRODUCTOS =======================

    $('.category_item[category="all"]').click(function() {
        function showAll() {
            $('.project-block').show();
            $('.project-block').css('transform', 'scale(1)');
        }
        setTimeout(showAll, 0);
    });

});
// $(window).resize(function() {
//     if (window.innerWidth < 600) {
//         alert("This website is still on process, mobile view it's not available. Sorry :(");


//     };
// });
// $(document).ready(function() {
//     if (window.innerWidth < 600) {
//         alert("This website is still on process, mobile view it's not available. Sorry :(");


//     };
// });


jQuery(document).on('scroll', function() {



    // TITLE_SCROLL-------------------
    jQuery(".firsth1").css("top", Math.max(0 + 0.3 * window.scrollY) + "px");
    jQuery(".firsth2").css("top", Math.max(-57.6 + 0.5 * window.scrollY) + "px");
    jQuery(".firsth3").css("top", Math.max(-108 + 0.7 * window.scrollY) + "px");
    $(".title").css("opacity", Math.max(1 - 0.003 * window.scrollY, 0));
    // NAV_SCROLL-------------------
    jQuery(".navflex").css("margin-top", Math.max(20 + 0.12 * window.scrollY) + "vh");
    $(".mas").css("opacity", Math.max(1 - 0.004 * window.scrollY));
    $(".buttonNav").css("opacity", Math.max(1 - 0.004 * window.scrollY));

    $(".navflex").css("width", Math.max(28 + 0.06 * window.scrollY) + "vw");
    $(".navflex2").css("width", Math.max(30 + 0.05 * window.scrollY, 0) + "vw");
    $(".navflex2").css("top", Math.max(8 + 0.09 * window.scrollY, 0) + "vh");

    $("#small1").css("top", Math.max(10.1 + 0.1 * window.scrollY) + "vh");
    $("#small2").css("top", Math.max(10.218 + 0.11 * window.scrollY) + "vh");
    $("#small3").css("top", Math.max(10.1 + 0.12 * window.scrollY) + "vh");

    $("#small4").css("top", Math.max(10.15 + 0.13 * window.scrollY) + "vh");
    $("#small5").css("top", Math.max(10 + 0.14 * window.scrollY) + "vh");
    $("#small6").css("top", Math.max(9.9 + 0.15 * window.scrollY) + "vh");


    $(".nocolaborator").css("width", Math.max(0 + 0.01 * window.scrollY) + "vw");

});



$(document).ready(function() {
    $(window).scroll(function() {
        var scrollTop = 1000;
        var scrollnav = 220;

        if ($(window).scrollTop() >= scrollTop) {

            $(".title").css({
                display: 'none',
            });
        }
        if ($(window).scrollTop() < scrollTop) {

            $(".title").css({
                display: 'block',
            });
        }
        if ($(window).scrollTop() >= scrollnav) {
            $(".button-container").css({
                display: 'none',
            });


        }
        if ($(window).scrollTop() >= 1000) {
            $(".button-container02").css({
                display: 'none',
            });
            $("#small1").css({
                display: 'none',
            });
            $("#small2").css({
                display: 'none',
            });
            $("#small3").css({
                display: 'none',
            });
            $("#small4").css({
                display: 'none',
            });
            $("#small5").css({
                display: 'none',
            });
            $("#small6").css({
                display: 'none',
            });
        }
        if ($(window).scrollTop() < 1000) {
            $(".button-container02").css({
                display: 'block',
            });
            $("#small1").css({
                display: 'block',
            });
            $("#small2").css({
                display: 'block',
            });
            $("#small3").css({
                display: 'block',
            });
            $("#small4").css({
                display: 'block',
            });
            $("#small5").css({
                display: 'block',
            });
            $("#small6").css({
                display: 'block',
            });
        }
        if ($(window).scrollTop() < scrollnav) {
            $(".button-container").css({
                display: 'block',
            });
        }
    })
})


function toggler() {
    var x = document.getElementById("Links_Nav_movile");
    if (x.style.display === "flex") {
        x.style.display = "none";
    } else {
        x.style.display = "flex";
    }
}

// ! CARROUSEL HDMI

var slideIndexHDMI = 1;
showSlidesHDMI(slideIndexHDMI);

// Next/previous controls
function plusSlidesHDMI(n) {
    showSlidesHDMI(slideIndexHDMI += n);
}

// Thumbnail image controls
function currentSlideHDMI(n) {
    showSlidesHDMI(slideIndexHDMI = n);
}

function deletephotoHDMI() {
    slideIndexHDMI = 0;
    showSlidesHDMI();

}

var slideIndexHDMI = 0;
showSlidesHDMI(n);

function showSlidesHDMI(n) {
    var i;
    var slides = document.getElementsByClassName("carrouselHDMI");
    var dotsHDMI = document.getElementsByClassName("dotHDMI");
    if (n > slides.length) { slideIndexHDMI = 1 }
    if (n < 1) { slideIndexHDMI = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dotsHDMI.length; i++) {
        dotsHDMI[i].className = dotsHDMI[i].className.replace(" active", "");
    }
    slides[slideIndexHDMI - 1].style.display = "block";
    dotsHDMI[slideIndexHDMI - 1].className += " active";
}

// ! CARROUSEL SPADES

var slideIndexSPADES = 1;
showSlidesSPADES(slideIndexSPADES);

// Next/previous controls
function plusSlidesSPADES(n) {
    showSlidesSPADES(slideIndexSPADES += n);
}

// Thumbnail image controls
function currentSlideSPADES(n) {
    showSlidesSPADES(slideIndexSPADES = n);
}

function deletephotoSPADES() {
    slideIndexSPADES = 0;
    showSlidesSPADES();

}

var slideIndexSPADES = 0;
showSlidesSPADES(n);

function showSlidesSPADES(n) {
    var i;
    var slides = document.getElementsByClassName("carrouselSPADES");
    var dotsSPADES = document.getElementsByClassName("dotSPADES");
    if (n > slides.length) { slideIndexSPADES = 1 }
    if (n < 1) { slideIndexSPADES = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dotsSPADES.length; i++) {
        dotsSPADES[i].className = dotsSPADES[i].className.replace(" active", "");
    }
    slides[slideIndexSPADES - 1].style.display = "block";
    dotsSPADES[slideIndexSPADES - 1].className += " active";
}


// ! CARROUSEL POSTERS

var slideIndexPOSTERS = 1;
showSlidesPOSTERS(slideIndexPOSTERS);

// Next/previous controls
function plusSlidesPOSTERS(n) {
    showSlidesPOSTERS(slideIndexPOSTERS += n);
}

// Thumbnail image controls
function currentSlidePOSTERS(n) {
    showSlidesPOSTERS(slideIndexPOSTERS = n);
}

function deletephotoPOSTERS() {
    slideIndexPOSTERS = 0;
    showSlidesPOSTERS();

}

var slideIndexPOSTERS = 0;
showSlidesPOSTERS(n);

function showSlidesPOSTERS(n) {
    var i;
    var slides = document.getElementsByClassName("carrouselPOSTERS");
    var dotsPOSTERS = document.getElementsByClassName("dotPOSTERS");
    if (n > slides.length) { slideIndexPOSTERS = 1 }
    if (n < 1) { slideIndexPOSTERS = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dotsPOSTERS.length; i++) {
        dotsPOSTERS[i].className = dotsPOSTERS[i].className.replace(" active", "");
    }
    slides[slideIndexPOSTERS - 1].style.display = "block";
    dotsPOSTERS[slideIndexPOSTERS - 1].className += " active";
}

// ! CARROUSEL SYSTEM

var slideIndexSYSTEM = 1;
showSlidesSYSTEM(slideIndexSYSTEM);

// Next/previous controls
function plusSlidesSYSTEM(n) {
    showSlidesSYSTEM(slideIndexSYSTEM += n);
}

// Thumbnail image controls
function currentSlideSYSTEM(n) {
    showSlidesSYSTEM(slideIndexSYSTEM = n);
}

function deletephotoSYSTEM() {
    slideIndexSYSTEM = 0;
    showSlidesSYSTEM();

}

var slideIndexSYSTEM = 0;
showSlidesSYSTEM(n);

function showSlidesSYSTEM(n) {
    var i;
    var slides = document.getElementsByClassName("carrouselSYSTEM");
    var dotsSYSTEM = document.getElementsByClassName("dotSYSTEM");
    if (n > slides.length) { slideIndexSYSTEM = 1 }
    if (n < 1) { slideIndexSYSTEM = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dotsSYSTEM.length; i++) {
        dotsSYSTEM[i].className = dotsSYSTEM[i].className.replace(" active", "");
    }
    slides[slideIndexSYSTEM - 1].style.display = "block";
    dotsSYSTEM[slideIndexSYSTEM - 1].className += " active";
}
// ! CARROUSEL URBAN

var slideIndexURBAN = 1;
showSlidesURBAN(slideIndexURBAN);

// Next/previous controls
function plusSlidesURBAN(n) {
    showSlidesURBAN(slideIndexURBAN += n);
}

// Thumbnail image controls
function currentSlideURBAN(n) {
    showSlidesURBAN(slideIndexURBAN = n);
}

function deletephotoURBAN() {
    slideIndexURBAN = 0;
    showSlidesURBAN();

}

var slideIndexURBAN = 0;
showSlidesURBAN(n);

function showSlidesURBAN(n) {
    var i;
    var slides = document.getElementsByClassName("carrouselURBAN");
    var dotsURBAN = document.getElementsByClassName("dotURBAN");
    if (n > slides.length) { slideIndexURBAN = 1 }
    if (n < 1) { slideIndexURBAN = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dotsURBAN.length; i++) {
        dotsURBAN[i].className = dotsURBAN[i].className.replace(" active", "");
    }
    slides[slideIndexURBAN - 1].style.display = "block";
    dotsURBAN[slideIndexURBAN - 1].className += " active";
}

// ! CARROUSEL GRUAS

var slideIndexGRUAS = 1;
showSlidesGRUAS(slideIndexGRUAS);

// Next/previous controls
function plusSlidesGRUAS(n) {
    showSlidesGRUAS(slideIndexGRUAS += n);
}

// Thumbnail image controls
function currentSlideGRUAS(n) {
    showSlidesGRUAS(slideIndexGRUAS = n);
}

function deletephotoGRUAS() {
    slideIndexGRUAS = 0;
    showSlidesGRUAS();

}

var slideIndexGRUAS = 0;
showSlidesGRUAS(n);

function showSlidesGRUAS(n) {
    var i;
    var slides = document.getElementsByClassName("carrouselGRUAS");
    var dotsGRUAS = document.getElementsByClassName("dotGRUAS");
    if (n > slides.length) { slideIndexGRUAS = 1 }
    if (n < 1) { slideIndexGRUAS = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dotsGRUAS.length; i++) {
        dotsGRUAS[i].className = dotsGRUAS[i].className.replace(" active", "");
    }
    slides[slideIndexGRUAS - 1].style.display = "block";
    dotsGRUAS[slideIndexGRUAS - 1].className += " active";
}
// ! CARROUSEL Polderless

var slideIndexPolderless = 1;
showSlidesPolderless(slideIndexPolderless);

// Next/previous controls
function plusSlidesPolderless(n) {
    showSlidesPolderless(slideIndexPolderless += n);
}

// Thumbnail image controls
function currentSlidePolderless(n) {
    showSlidesPolderless(slideIndexPolderless = n);
}

function deletephotoPolderless() {
    slideIndexPolderless = 0;
    showSlidesPolderless();

}

var slideIndexPolderless = 0;
showSlidesPolderless(n);

function showSlidesPolderless(n) {
    var i;
    var slides = document.getElementsByClassName("carrouselPolderless");
    var dotsPolderless = document.getElementsByClassName("dotPolderless");
    if (n > slides.length) { slideIndexPolderless = 1 }
    if (n < 1) { slideIndexPolderless = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dotsPolderless.length; i++) {
        dotsPolderless[i].className = dotsPolderless[i].className.replace(" active", "");
    }
    slides[slideIndexPolderless - 1].style.display = "block";
    dotsPolderless[slideIndexPolderless - 1].className += " active";
}

// ! CARROUSEL CandG

var slideIndexCandG = 1;
showSlidesCandG(slideIndexCandG);

// Next/previous controls
function plusSlidesCandG(n) {
    showSlidesCandG(slideIndexCandG += n);
}

// Thumbnail image controls
function currentSlideCandG(n) {
    showSlidesCandG(slideIndexCandG = n);
}

function deletephotoCandG() {
    slideIndexCandG = 0;
    showSlidesCandG();

}

var slideIndexCandG = 0;
showSlidesCandG(n);

function showSlidesCandG(n) {
    var i;
    var slides = document.getElementsByClassName("carrouselCandG");
    var dotsCandG = document.getElementsByClassName("dotCandG");
    if (n > slides.length) { slideIndexCandG = 1 }
    if (n < 1) { slideIndexCandG = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dotsCandG.length; i++) {
        dotsCandG[i].className = dotsCandG[i].className.replace(" active", "");
    }
    slides[slideIndexCandG - 1].style.display = "block";
    dotsCandG[slideIndexCandG - 1].className += " active";
}

// $(document).on('scroll', function() {
//     $('masthead').css("top", Math.max(100 - 0.35 * window.scrollY, 100) + "px");
// })
jQuery(document).on('scroll', function() {
    jQuery('h1').css("left", Math.max(80 - 0.2 * window.scrollY, 1) + "vw");
})

function PopUp() {
    document.getElementById('ac-wrapper').style.display = "none";
}

function Startthank() {
    document.getElementById('thank-wrapper').style.display = "flex";
}

function Popthank() {
    document.getElementById('thank-wrapper').style.display = "none";
}