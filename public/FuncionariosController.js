class FuncionariosController {
  constructor() {}

  buscarFuncionarios() {
    var settings = {
      url: "http://localhost:3000/",
      method: "POST",
      timeout: 0,
      async: false,
    };

    $.ajax(settings).done(function (response) {
      console.log(response);
    });
  }
}
