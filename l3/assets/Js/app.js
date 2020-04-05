$(function () {

    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();

    checkScroll(scrollOffset);

    $(window).on("scroll", function () {

        scrollOffset = $(this).scrollTop();
        checkScroll(scrollOffset);

    });

    function checkScroll(scrollOffset) {

        if (scrollOffset >= introH) {
            header.addClass("fixed");
        }
        else {
            header.removeClass("fixed");
        }
    }




    // smooth scroll
    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("#nav a").removeClass("active");
        $this.addClass("active");

        $("html,body").animate({

            scrollTop: blockOffset

        }, 750);
    });



    // slider
    $("[data-slider]").slick({

        infinite: true,
        fade: false,
        speed: 800,
        autoplay: true,
        autoplaySpeed: 2000,
        focusOnSelect: true,
        slidesToShow: 1,
        slidesToScroll: 1

    });




    // statistic
    var time = 5, cc = 1;
    $(window).scroll(function () {
        $('#statistics').each(function () {
            var cPos = $(this).offset().top,
                topWindow = $(window).scrollTop();
            if (cPos < topWindow + 400) {

                if (cc < 2) {
                    $('.stat__count').addClass('stat__count__visibility');
                    $("div").each(function () {
                        var i = 1,
                            num = $(this).data('num'),
                            step = 1000 * time / num,
                            that = $(this),
                            int = setInterval(function () {
                                if (i <= num) {
                                    that.html(i);
                                } else {
                                    cc = cc + 2;
                                    clearInterval(int);
                                }
                                i++;
                            }, step);
                    });
                }
            }
        });
    });

});