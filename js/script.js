$(document).ready(function() {
    $(".show_modal, .hide_modal").on("click", function() {
        $("body").toggleClass("page-category");
        $(".modal_cont").toggleClass("modal_cont_animate");
    });
});