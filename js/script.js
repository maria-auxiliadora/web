$(document).ready(function() {
    // navbar active
    navbarActive();
    function navbarActive() {
        var scrollLink = $(".nav_link");
        var scrollLinkUx = $(".nav_ux");

        // smooth scrolling
        scrollLink.click(function(e) {
            e.preventDefault();
            $("html, body").animate({
                scrollTop: $(this.hash).offset().top
            }, 30);
        });

        scrollLinkUx.click(function(e) {
            e.preventDefault();
            $("html, body").animate({
                scrollTop: $(this.hash).offset().top
            }, 30);
        });

        // active link switching
        $(window).scroll(function() {
            var scrollbarLocation = $(this).scrollTop();

            scrollLink.each(function() {
                var sectionOffset = $(this.hash).offset().top - 30;

                if (sectionOffset <= scrollbarLocation) {
                    $(".nav_link").removeClass("active");
                    $(this).addClass("active");
                }
            });

            scrollLinkUx.each(function() {
                var sectionOffset = $(this.hash).offset().top - 30;

                if (sectionOffset <= scrollbarLocation) {
                    $(".nav_ux").removeClass("active");
                    $(this).addClass("active");
                }
            });
        });

        // quitar el url #
        $('a[href*="#"]:not([href="#"])').on("click", function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

                if (target.length) {
                    $("html, body").animate({
                        scrollTop: target.offset().top
                    }, 30);
                    return false;
                }
            }
        });
    }

    setTimeout(function() {
        $(".loader_bg").fadeToggle();
    }, 1760);
});

// multiple modals
$.fn.multipleModal = function() {
    $(this).click(function() {
        $("body").addClass("page-category");
        $(".modal_cont").addClass("modal_cont_animate");
        $(".modal_content_anhost").append('<div class="modal_block_c"><div class="content_hidden-anhost pd-b3r pd024"><div class="description_modal fx fx-fd-c gp18 mr-t32"></div></div></div>');

        var dataTitle = $(this).attr('data-title');
        var dataDescription = $(this).attr('data-description');
        $(".content_hidden-anhost").prepend(dataTitle).before();
        $(".description_modal").prepend(dataDescription);

        $(".hide_modal").on("click", function() {
            $("body").removeClass("page-category");
            $(".modal_cont").removeClass("modal_cont_animate");

            setTimeout(function() {
                $(".modal_block_c").remove();
            }, 370);
        });
    });
}
$(".show_modal[data-title]").multipleModal();

























