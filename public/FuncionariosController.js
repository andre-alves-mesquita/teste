class FuncionariosController {
  constructor() {}

  buscarFuncionarios() {
    let funcionarios = null;
    var settings = {
      url: "http://localhost:3000/",
      method: "POST",
      timeout: 0,
      async: false,
    };

    $.ajax(settings).done(function (response) {
      console.log(response);
      funcionarios = response;
    });

    funcionarios.forEach((element) => {
      $(".funcionarios").append(`<li>${element}</li>`);
    });
  }
}
