document.getElementById("meuFormulario").addEventListener("submit", function(event) {
  event.preventDefault(); // Previne o envio automático do formulário
  
 
  var campoA = parseInt(document.getElementById("campoA").value);
  var campoB = parseInt(document.getElementById("campoB").value);
  

  if (campoB > campoA) {
   
    exibirMensagem("Formulário válido!", "green");
    
    
  } else {

    exibirMensagem("Formulário inválido! O número B deve ser maior que o número A.", "red");
  }
});

function exibirMensagem(mensagem, cor) {

  var mensagemElement = document.getElementById("mensagemValidacao");
  
 
  mensagemElement.textContent = mensagem;
  mensagemElement.style.color = cor;
}

