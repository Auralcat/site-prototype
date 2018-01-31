$(document).ready(function() {
    // Esconder o texto maior ao carregar página
    $('.texto-expandido').hide();

    $('.col').hover(function() {
        $(this).find('.texto-pequeno').toggle("50");
        $(this).find('.texto-expandido').toggle("50");
    });
});
