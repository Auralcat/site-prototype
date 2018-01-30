$(document).ready(function() {

  // Expandir texto nas colunas, demonstração para coluna 1
  $('#texto-expandido1').toggle();
  $('#col1').hover(function() {
    alert("Workin'");
    $('#texto-pequeno1').toggle("150");
    $('#texto-expandido1').toggle("150");
  });

});
