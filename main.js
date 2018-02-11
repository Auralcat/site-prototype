$(document).ready(function() {
  // Achar altura máxima da div
  var alturaMaxima = 0;
  $('.col').each(function() {
    if ($(this).find('.texto-expandido').innerHeight() > alturaMaxima) {
      alturaMaxima = $(this).find('.texto-expandido').innerHeight();
    }
  });

  // Aplicar na classe coluna com um pouco de folga pro rodapé não mexer
  $('.col').css('min-height', (alturaMaxima * 1.2) + 'px');

  // Esconder o texto maior ao carregar página
    $('.texto-expandido').hide();

    $('.col').click(function() {
      alert("Altura: "+ $('.col').height() + "px");
      $(this).find('.texto-pequeno').toggle("50");
      $(this).find('.texto-expandido').toggle("50");
    });

});
