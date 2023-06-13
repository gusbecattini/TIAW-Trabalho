$(document).ready(function() {
  $('#cadastroComentarioForm').submit(function(event) {
    event.preventDefault(); 
    
    // Obter o nome do usuário do Local Storage
    var usuario = JSON.parse(localStorage.getItem('usuarios'));
    var nomeUsuario = usuario.nome;
    
    // Obter o texto do comentário
    var textoComentario = $('#textoComentario').val();
    
    // Cria um novo elemento de comentário
    var novoComentario = $('<li>').text(nomeUsuario + ': ' + textoComentario);
    
    // Adiciona o novo comentário à lista de comentários
    $('#listaComentarios').append(novoComentario);
    
    // Limpa o campo do formulário
    $('#textoComentario').val('');
  });
});
