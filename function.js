var cuentas = [
  { nombre: "Mali", saldo: 200, password: 'hello' },
  { nombre: "Gera", saldo: 290, password: 'l33t' },
  { nombre: "Maui", saldo: 67, password: '123' }
];
var cuentaElegida = []
function login() {
  for (let i = 0; i < cuentas.length; i++) {
    if (document.getElementById("user").value == cuentas[i].nombre && document.getElementById("pass").value == cuentas[i].password) {
      cuentaElegida = cuentas.filter(function (cuenta) {
        return cuenta.nombre == cuentas[i].nombre
      });
      localStorage.setItem("cuentaElegida", JSON.stringify(cuentaElegida));
      window.location = "index.html"
      return cuentaElegida
    }
    else {
      alert("Contraseña o usuario incorrectos");
    }
  }
}
function consultarSaldo() {
  var login = JSON.parse(localStorage.getItem("cuentaElegida"));
  let saldo = login[0].saldo;
  document.getElementById("saldo").innerText = saldo.toString();;
}


function ingresarMonto() {
  var login = JSON.parse(localStorage.getItem("cuentaElegida"));
  var saldonuevo = Number(document.getElementById("ingresar").value);
  let saldo = login[0].saldo + saldonuevo;
  if (saldo > 990) {
    alert("Esta operación supera el monto permitido")
  }
  else {
    login[0].saldo = saldo;
    localStorage.setItem("cuentaElegida", JSON.stringify(login));
    document.getElementById("ingresar").value = ""
  }
  consultarSaldo();
}

function retirarMonto() {
  var login = JSON.parse(localStorage.getItem("cuentaElegida"));
  var saldonuevo = Number(document.getElementById("retirar").value);
  let saldo = login[0].saldo - saldonuevo;
  if (saldo < 10) {
    alert("La cuenta no puede tener menos de $10")
  }
  else {

    login[0].saldo = saldo;
    localStorage.setItem("cuentaElegida", JSON.stringify(login));
    document.getElementById("retirar").value = ""
  }
  consultarSaldo();
}
