var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function (event) {
  event.preventDefault();

  var form = document.querySelector("#form-adiciona");

  // extraindo informações do paciente
  var paciente = infosPacientesForm(form);

  var erros = validaPaciente(paciente);
  console.log(erros);
  if (erros.length > 0) {
    exibeMensagemErro(erros);
    return;
  }

  adicionaPacienteTabela(paciente);

  form.reset();

  var mensagensErro = document.querySelector("#mensagens-erro");
  mensagensErro.innerHTML = "";


});

function adicionaPacienteTabela(paciente){
   //cria tr e td do paciente
   var pacienteTr = montaTr(paciente);
     // adicionando paciente na tabela
  var tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr);
}

function exibeMensagemErro(erros){
  var ul = document.querySelector("#mensagens-erro");
  ul.innerHTML = "";
  erros.forEach(function(erro){
    var li = document.createElement("li");
    li.textContent = erro;
    ul.appendChild(li);
  });
  
}
//objeto - informação dos pacientes
function infosPacientesForm(form) {
  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calcImc(form.peso.value, form.altura.value),
  };

  return paciente;
}
//mntanto a tr - baseado no objeto paciente
function montaTr(paciente) {
  var pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");

  pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
  pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
  pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
  pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
  pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

  return pacienteTr;
}
//montando a td
function montaTd(dado, classe) {
  var td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);

  return td;
}
//verificação dos campos
function validaPaciente(paciente) {
  var erros = [];

  if(paciente.nome.length == 0){
    erros.push("Precisa preencher o campo!")
  }
  if (!validaPeso(paciente.peso)) erros.push("Peso inválido");
  if (!validaAltura(paciente.altura)) erros.push("Altura inválida");
  if(paciente.gordura.length == 0){
    erros.push("A gordura precisa ser especificada!")
  }
  if(paciente.peso.length == 0){
    erros.push("Precisa ser preenchido!")
  }
  if(paciente.altura.length == 0){
    erros.push("Precisa ser preenchido!")
  }
  return erros;
}
