var botaoAdicionar = document.querySelector("#buscar-paciente");

botaoAdicionar.addEventListener("click", function () {
  console.log("buscando paciente!");
  //fazendo uma requisição - API

  var xhr = new XMLHttpRequest();
  //tipo de requisição - no caso get
  xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

  xhr.addEventListener("load", function () {
    var erroAjax = document.querySelector("#erro-ajax");
    if (xhr.status == 200) {
      erroAjax.classList.add("invisivel");
      var resposta = xhr.responseText;
      var pacientes = JSON.parse(resposta);

      pacientes.forEach((paciente) => {
        adicionaPacienteTabela(paciente);
      });
    } else {
      console.log(xhr.status);
      console.log(xhr.responseText);
      erroAjax.classList.remove("invisivel");
      erroAjax.classList.add("paciente-invalido");
    }
  });

  xhr.send();
});
