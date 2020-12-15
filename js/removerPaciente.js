var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function (event) {
  event.target.parentNode.classList.add("fadeOut");

  setTimeout(function () {
    event.target.parentNode.remove("fadeOut");
  }, 500);

  //Abaixo, descrição para melhor entender, mas o código acima é mais sucinto e tem o mesmo efeito.
  // var alvoEvento = event.target;// TD
  // var paiDoAlvo = alvoEvento.parentNode;//TR = paciente = remover
  // paiDoAlvo.remove();
});
