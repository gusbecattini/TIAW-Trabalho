$(document).ready(function() {
  $('#loginForm').submit(function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário
    
    // Obter os valores dos campos
    var login = $('#inputEmail4').val();
    var senha = $('#senha').val();
    
    // Verificar se o usuário existe no Local Storage
    var usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    var usuario = usuarios.find(function(u) {
      return u.usuario === login || u.email === login;
    });
    
    if (!usuario || usuario.senha !== senha) {
      alert('Credenciais inválidas. Por favor, tente novamente.');
      return;
    }
    
    // Limpar os campos do formulário
    $('#loginForm')[0].reset();
    
    alert('Login bem-sucedido! Bem-vindo, ' + usuario.nome + '!');
    window.location.href = "profile.html";
  });
});
