$(document).ready(function() {

  // Expandir texto nas colunas, demonstração para coluna 1
  $('#texto-expandido1').toggle();
  $('#texto-expandido2').toggle();

  $('#col1').hover(function() {
    $('#texto-pequeno1').toggle("150");
    $('#texto-expandido1').toggle("150");
  });

  // Testar coluna 2
  $('#col2').hover(function() {
    $('#texto-pequeno2').toggle("250");
    $('#texto-expandido2').toggle("250");
  });

});
