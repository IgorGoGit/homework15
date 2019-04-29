$(document).ready(() => {

    function Buttons (source) {
        $(source).on('click', function() {
            $('.overlay').fadeIn(1000);
        $('.modal').slideDown(1000);
            });
            $('.close').on('click', function() {
            $('.overlay').fadeOut(1500);
            $('.modal').slideUp(1500);
            });
}

Buttons('.main_btna');
Buttons('.main_btn');
Buttons('#tours');


}); 

