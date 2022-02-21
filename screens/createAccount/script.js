function validarPreenchimentoCampos() {
    let usuario = document.getElementById('usuario').value;
    let senha = document.getElementById('senha').value;
    
    if(!usuario || !senha) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Preencha os dois campos para realizar o cadastro!',
      })
      return;
    }
    cadastrar(usuario, senha);
  }
  
  function cadastrar(usuario, senha) {
    let dadosCadastros = {
      username: usuario,
      password: senha,
      id: Math.floor(Date.now() * Math.random()).toString(36)
    };
  
    let cadastros = localStorage.getItem("dadosCadastros"); 
    
   if (cadastros == null) cadastros = [];
    else cadastros = JSON.parse(cadastros);
    cadastros.push(dadosCadastros);
    localStorage.setItem("dadosCadastros", JSON.stringify(cadastros)) 
    Swal.fire('Cadastro Realizado!')
    window.location = "../../registerStockPoints/index.html"
  }
  
  function listarCadastros() {
    let cadastros = localStorage.getItem("dadosCadastros");
    if (cadastros == null)
    alert("Ainda não há cadastros realizados.");
    else {
      let elementoTela = document.getElementById("listagemRegistros")
      cadastros = JSON.parse(cadastros);
      elementoTela.innerHTML += '<ul class="list-group" > <br>';
      cadastros.forEach(cadastro => {
        elementoTela.innerHTML += '<li style="background-color: white;" class="list-group-item" >Nome: ' + cadastro.username + '</li>';
        elementoTela.innerHTML += '<li class="list-group-item ">Senha: ' + cadastro.password + '</li> <br>';
      });
    }
  }
  
  function login() {
    let usuarioInput = document.getElementById('usuario').value
    let senhaInput = document.getElementById('senha').value
  
    let usuariosCadastrados = JSON.parse(localStorage.getItem("dadosCadastros"));
  
    if (usuariosCadastrados === null) {
      alert("Não existem usuários cadastrados");
    }
      
    for (let i=0; i<usuariosCadastrados.length; i++){
      usuariosCadastrados[i]
      let usuario = usuariosCadastrados[i]
      let senha = usuariosCadastrados[i]
      if (usuario.username === usuarioInput && senha.password === senhaInput) {
        localStorage.setItem("loggedUser", JSON.stringify({id: usuario.id})) 

      // window.location="../form/userStockPoint/index.html"
        
        return;
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Usuário ou senha incorretos!',
        })
        return;
      }
    }
  }
  
  const limpar = function (){
    localStorage.clear();
    window.location = window.location;
  }  

  function mostrarCadastros(){
    let cadastros = localStorage.getItem("dadosCadastros");
    if (cadastros == null)
    alert("Não existe nenhum cadastro.");
    else {
    let listagemRegistros = document.getElementById("listaDeRegistro")
    cadastros = JSON.parse(cadastros);
  };
}

// função login pronto, não mexer
(function($) {

	"use strict";


})(jQuery);