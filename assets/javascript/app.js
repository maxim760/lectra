$(function () {
    let krestik = $("#krestik")
    let lupa = $("#lupa")

    $(".jshide").hide()
    $(".flag_elem").on("click", function () {
        $("#allflags").toggleClass("active")
        $(this.lastElementChild).toggleClass("active")
    })
    /*меняю флаг на обычном меню*/
    $("[data-flag]").on("click", function (event) {
        event.preventDefault()
        let mainLang = $(this).data("flag"),
            mainLang1 = $(this).data("flag1")
        $("#header_flag div").removeClass("active")
        $(mainLang).addClass("active")
        $("#allflags div").removeClass("active")
        $("#allflags div p").removeClass("active")
        $(this).addClass("active")
        /* выдвижное меню*/

        $("#menu_lang div").removeClass("active")
        $(mainLang1).addClass("active")
        $("#menu_inner").removeClass("active")

    })

    $("#menu_lang").on("click", function(){

        $("#menu_inner").addClass("active")
    })

    $("#menu_back").on("click",function(){
        $("#menu_inner").removeClass("active")
    })
    /*меняю флаг на выдвижном меню*/

    $("[data-flag_menu]").on("click", function(){
        let flagIdLang = $(this).data("flag_menu"),
            flagIdLang1 = $(this).data("flag_menu1"),
            flag_this = $(this).data("this_menu")
        $("#menu_lang div").removeClass("active")
        $(flagIdLang).addClass("active")
        $("#menu_inner").removeClass("active")

        /* добавление к обычному*/

        $("#header_flag div").removeClass("active")
        $(flagIdLang1).addClass("active")
        $("#allflags div").removeClass("active")
        $("#allflags div p").removeClass("active")
        $(flag_this).addClass("active")
    })






    $("[data-accordion]").on("click", function (event) {
        let accordId = $(this).data("accordion"),
            textId = $(this).data("text")
        $(textId).slideToggle(400)
        $(accordId).toggleClass("active")

    })


    $('.sliderjs').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        speed:0,
        responsive: [
    {
      breakpoint: 900,
      settings: {

        slidesToShow: 1,
        slidesToScroll:1,
      }
    },

  ]

    });


    $(".slick-arrow").on("click", function () {
        $(".jshide").hide()
        $(".jsOpenClose").removeClass("active")

    })

    $("#header_logo").on("click", function () {
            $("html, body").animate({
                scrollTop: 0,
            }, 300)
    })

    $(lupa).on("click", function(event){
        event.preventDefault()
        $("#header_inner").addClass("active")
    })

    $(krestik).on("click", function(event){
        event.preventDefault()
        $("#header_inner").removeClass("active")
    })

    $("#burgermenu").on("click", function(){
        let pageId = $(this).data("page")
        $("#header_menu").addClass("menu")
        $("#temn").addClass("menu")
    })

    $(document).mouseup(function (e){ // событие клика по веб-документу
        let div = $("#header_menu"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
            $("#header_menu").removeClass("menu")
            $("#temn").removeClass("menu")
        }
    });


})
