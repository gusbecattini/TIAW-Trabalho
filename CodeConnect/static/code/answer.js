$(document).ready(function() {
    $('#cadastroRespostaForm').submit(function(event) {
      event.preventDefault();
      var textoResposta = $('#textoResposta').val();
      
      var novaResposta = {
        resposta: textoResposta
      };
      
      var respostas = JSON.parse(localStorage.getItem('respostas')) || [];
      respostas.push(novaResposta);
      localStorage.setItem('respostas', JSON.stringify(respostas));
      $('#textoResposta').val('');
      exibirRespostas();
    });
    
    function exibirRespostas() {
      var respostas = JSON.parse(localStorage.getItem('respostas')) || [];
      $('#listaRespostas').empty();

      respostas.forEach(function(resposta) {
        var itemResposta = $('<div>').addClass('resposta');
        var textoResposta = $('<p>').text(resposta.resposta);
        itemResposta.append(textoResposta);
        $('#listaRespostas').append(itemResposta);
      });
    }
  });
  