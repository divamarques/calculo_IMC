var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){
 
  var paciente = pacientes[i]

  var tdPeso = paciente.querySelector(".info-peso");
  var peso = tdPeso.textContent;

  var tdAltura = paciente.querySelector(".info-altura");
  var altura = tdAltura.textContent;

  var tdImc = paciente.querySelector(".info-imc");

  var pesoValido = validaPeso(peso);
  var alturaValida = validaAltura(altura);

  // Validação do peso
  if(!pesoValido){
    console.log("Peso inválido");
    pesoValido = false;
    tdImc.textContent = "Peso inválido";
    // manipulando estilo
    paciente.classList.add("paciente-invalido");
  }
  // validação da altura
  if(!alturaValida){
    console.log("Altura inválida");
    alturaValida = false;
    tdImc.textContent = "Altura inválida";
    paciente.classList.add("paciente-invalido");
  }

  // só acontece o cálculo se as duas primeiras validações forem verdadeiras
  if(alturaValida && pesoValido){
    var imc = calcImc(peso,altura);
    
    tdImc.textContent = imc;

  }
}

function calcImc(peso, altura){

  var imc = 0;

  imc = peso / (altura * altura);
  //exibindo apenas 2 casas decimais
  return imc.toFixed(2);

}

function validaPeso(peso){
  if(peso >=0 && peso < 1000){
    return true;
  }else{
    return false;
  }
}
function validaAltura(altura){
  if(altura >= 0 && altura <=3.0){
    return true;
  }else{
    return false;
  }
}


//função anônima
// titulo.addEventListener("click", function(){
//   console.log("Chamando função anônima!")
// });


//FUNÇÃO NOMEADA
// titulo.addEventListener("click", mostraMensagem);

// function mostraMensagem(){
//   console.log("Olá eu fui clicado!");
// }








