//categories dropdown menu
$(document).ready(function() {
    $(".toggler-block ").hover(
        function() { // mouse on toggler
            if ($(".menu-block").css("display") === "none") { // open menu if already not open
                $(".menu-block").stop(true, false).slideToggle({ duration: 300 });
            }
        },
        function() { // mouse leave toggler
            if ($(".menu-block").css("display") !== "none" && !$(".menu-block").is(":hover")) { // close menu if opened and not hovered
                $(".menu-block").stop(true, false).slideToggle({ duration: 300 });
            }
        }
    );

    $(".menu-block").mouseleave(function() { //mouse leave menu
        if (!$(".toggler-block").is(":hover")) { // close menu if toggler not hovered
            $(".menu-block").stop(true, false).slideToggle({ duration: 300 });
        }
    });

    $(".toggler-block").click(function() {
        $(".icon").toggleClass("icons");
        $(".menu-block").stop(true, false).slideToggle({ duration: 300 });
    });

    $("#setting-dropdown").tooltip();
    $("#search-dropdown").tooltip();
    $("#example").tooltip();
    $("#ex").tooltip();
    $("#info").tooltip();
    $("#cart-tooltip").tooltip();
    $("#account-menu").tooltip();
});


//schow cart modal
$(document).ready(function() {
    $(".adds").click(function() {
        $("#myModal").modal("show");
    });
});

$(document).on("click.bs.dropdown.data-api", "#info-menu, #cart-modal, #search, #blogs-dropdown, #m, #account-link", function(o) {
    o.stopPropagation();
});

//buttons in products
$(document).ready(function() {
    $(".minus").click(function() {
            var o = $(this).parent().find(".quant"),
                n = parseInt(o.val()) - 1;
            return (n = n < 1 ? 1 : n), o.val(n), o.change(), !1;
        }),
        $(".plus").click(function() {
            var o = $(this).parent().find(".quant");
            return o.val(parseInt(o.val()) + 1), o.change(), !1;
        });
});

// scroll to top button
$(document).ready(function() {
    $(".wrapper").append('<a href="#" id="go-top"></a>');
});
$(function() {
    $.fn.scrollToTop = function() {
        $(this).hide().removeAttr("href"), "250" <= $(window).scrollTop() && $(this).fadeIn("slow");
        var o = $(this);
        $(window).scroll(function() {
                $(window).scrollTop() <= "250" ? $(o).fadeOut("slow") : $(o).fadeIn("slow");
            }),
            $(this).click(function() {
                $("html, body").animate({ scrollTop: 0 }, "slow");
            });
    };
});
$(function() {
    $("#go-top").scrollToTop();
});
