$(document).ready(function() {
  $('#cadastroForm').submit(function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário
    
    // Obter os valores dos campos
    var nome = $('#inputName').val();
    var sobrenome = $('#inputLastName').val();
    var usuario = $('#user').val();
    var email = $('#inputEmail').val();
    var senha = $('#inputPassword').val();
    var grau = $('#grau').val();
    
    // Verificar se o nome de usuário e o email já existem no Local Storage
    var usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    var usuarioExistente = usuarios.find(function(u) {
      return u.usuario === usuario || u.email === email;
    });
    
    if (usuarioExistente) {
      alert('Nome de usuário ou email já existem. Por favor, escolha outro.');
      return;
    }
    
    // Criar objeto do usuário
    var novoUsuario = {
      nome: nome,
      sobrenome: sobrenome,
      usuario: usuario,
      email: email,
      senha: senha,
      grau: grau
    };
    
    // Armazenar o novo usuário no Local Storage
    usuarios.push(novoUsuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    
    // Limpar os campos do formulário
    $('#cadastroForm')[0].reset();
    
    alert('Cadastro realizado com sucesso!');
    window.location.href = "Login.html";
  });
});



/*
const $ = (elemento) => document.querySelector(elemento);

$("#cadastro").addEventListener("click", (ev) => {
  ev.preventDefault();

  const nome = $("#inputName").value;
  const sobrenome = $("#inputLastName").value;
  const email = $("#inputEmail").value;
  const user = $("#inputuser").value;
  const senha = $("#inputPassword").value;
  //const confirmaSenha = $("#confirma-senha").value;

  //const senhaConfirmada = senha === confirmaSenha;

  if (!senhaConfirmada) {
    alert("Sua confirmação de senha não confere.\nPor favor verifique.");
    return;
  }

  const tudoPreenchido =
    nome.length !== 0 &&
    sobrenome.length !== 0 &&
    email.length !== 0 &&
    user.length !== 0 &&
    senha.length !== 0;

  if (tudoPreenchido === false) {
    alert("Preencha todos os campos antes de enviar.");
    return;
  }

  const usuarioCadastrado = {
    email,
    nome,
    sobrenome,
    login,
    user,
    senha,
  };

  const string = JSON.stringify(usuarioCadastrado);
  localStorage.setItem("usuario", string);

  alert("Cadastro realizado com sucesso!");
  window.location.href = "..Templates/Login.html";
});*/