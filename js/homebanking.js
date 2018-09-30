//Declaración de variables
var saldoCuenta = 5000
var nombreUsuario = "Florencia Mendez"
var limiteExtraccion = 1000

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.

window.onload = function () {
    if (iniciarSesion()) {
        cargarNombreEnPantalla();
        actualizarSaldoEnPantalla();
        actualizarLimiteEnPantalla();
    }
    else {
        saldoCuenta = 0;
        actualizarSaldoEnPantalla();
    }
}


//Funciones que tenes que completar

function controlarDatos(dato) {
    return ((!dato == "") && (typeof dato === 'number') && (dato !== null));
    
}

function sumarDinero(importeAsumar) {
    return (saldoCuenta += importeAsumar)
}

function restarDinero(importeArestar) {
    return (saldoCuenta -= importeArestar)
}

function cambiarLimiteDeExtraccion() {
    var nuevoLimiteExtraccion = parseInt(prompt("¿Cuál es el nuevo límite de extracción?"));
    if (controlarDatos(nuevoLimiteExtraccion)) {
        limiteExtraccion = nuevoLimiteExtraccion;
        actualizarLimiteEnPantalla(limiteExtraccion);
        alert("Nuevo límite de extracción: $" + nuevoLimiteExtraccion + ". ")
    }
}


function extraerDinero() {
    var saldoAnterior = saldoCuenta;
    var dineroAExtraer = parseInt(prompt("¿Cuánto dinero desea extraer?"));
    var billetesdeCien = (dineroAExtraer % 100);
    if (controlarDatos(dineroAExtraer)) {

        if (dineroAExtraer > saldoCuenta) {
            alert("No hay saldo disponible en tu cuenta para extraer esa cantidad de dinero.");
        }
        else if ((dineroAExtraer <= limiteExtraccion) && (billetesdeCien === 0)) {
            alert("Has extraido $" + dineroAExtraer + ".\n" + "Tu saldo es de $" + restarDinero(dineroAExtraer) + ".\n" + "Tu saldo anterior era de $" + saldoAnterior + ".");
        }
        else if (dineroAExtraer > limiteExtraccion) {
            alert("La cantidad de dinero que deseas extraer es mayor a tu límite de extracción.");
        }
        else {
            alert("Solo puedes extraer billetes de 100.");
        }

        actualizarSaldoEnPantalla(saldoCuenta);
    }
}



function depositarDinero() {
    var saldoAnterior = saldoCuenta;
    var dineroADepositar = parseInt(prompt("¿Cuánto dinero desea depositar?"));
    if (controlarDatos(dineroADepositar)) {
        alert("Has depositado $" + dineroADepositar + ".\n" + "Tu saldo es de $" + sumarDinero(dineroADepositar) + ".\n" + "Tu saldo anterior era de $" + saldoAnterior + ".");
        actualizarSaldoEnPantalla(saldoCuenta);
    }
}

/*
function pagarServicio() {
    var agua = 350;
    var telefono = 425;
    var luz = 210;
    var internet = 570;
    saldoAnterior = saldoCuenta;
    var servicioApagar = parseInt(prompt("1: Agua  " + "2: Telefono  " + "3: Luz  " + "4: Internet "));
    if (controlarDatos(servicioApagar)) {
        switch (servicioApagar) {
            case 1:
                if (saldoAnterior >= agua) {
                    saldoCuenta = (saldoCuenta - agua);
                    alert("Has pagado el servicio de agua.\n" + "Saldo Anterior: $" + saldoAnterior + "\n" + "Dinero descontado: $" + agua + "\n" + "Saldo actual: $" + saldoCuenta);
                    actualizarSaldoEnPantalla(saldoCuenta);
                }

                else {
                    alert("Su saldo no es suficiente para abonar este servicio.");
                }
                break;
            case 2:
                if (saldoAnterior >= telefono) {
                    saldoCuenta = (saldoCuenta - telefono);
                    alert("Has pagado el servicio de teléfono.\n" + "Saldo Anterior: $" + saldoAnterior + "\n" + "Dinero descontado: $" + telefono + "\n" + "Saldo actual: $" + saldoCuenta + "\n");
                    actualizarSaldoEnPantalla(saldoCuenta);
                }
                else {
                    alert("Su saldo no es suficiente para abonar este servicio.");
                }
                break;
            case 3:
                if (saldoAnterior >= luz) {
                    saldoCuenta = (saldoCuenta - luz);
                    alert("Has pagado el servicio de luz.\n" + "Saldo Anterior: $" + saldoAnterior + "\n" + "Dinero descontado: $" + luz + "\n" + " Saldo actual: $" + saldoCuenta);
                    actualizarSaldoEnPantalla(saldoCuenta);
                }
                else {
                    alert("Su saldo no es suficiente para abonar este servicio.");
                }
                break;
            case 4:
                if (saldoAnterior >= internet) {
                    saldoCuenta = (saldoCuenta - internet);
                    alert("Has pagado el servicio de internet.\n" + "Saldo Anterior: $" + saldoAnterior + "\n" + "Dinero descontado: $" + internet + "\n" + "Saldo actual: $" + saldoCuenta + "\n");
                    actualizarSaldoEnPantalla(saldoCuenta);
                }
                else {
                    alert("Su saldo no es suficiente para abonar este servicio.");
                }
                break;
                break;
            default:
                alert("No existe el servicio que quieres abonar.");
        }
    }
}
*/

function pagarServicio() {
    var agua = 350;
    var telefono = 425;
    var luz = 210;
    var internet = 570;
    var saldoAnterior = saldoCuenta;
    var precioServicio;
    var nombreServicio;
    var servicioApagar = parseInt(prompt("1: Agua  " + "2: Telefono  " + "3: Luz  " + "4: Internet "));
    if (controlarDatos(servicioApagar)) {
        switch (servicioApagar) {
            case 1:
                nombreServicio = 'Agua';
                precioServicio = agua;
                break;
            case 2:
                nombreServicio = 'Teléfono';
                precioServicio = telefono;
                break;
            case 3:
                nombreServicio = 'Luz';
                precioServicio = luz;
                break;
            case 4:
                nombreServicio = 'Internet';
                precioServicio = internet;
                break;
            default:
                alert("No existe el servicio que quieres abonar.");
        }

        if (saldoAnterior >= precioServicio) {
            saldoCuenta = (saldoCuenta - precioServicio);
            alert("Has pagado el servicio de " + nombreServicio + ".\n" +
                  "Saldo Anterior: $" + saldoAnterior + "\n" +
                  "Dinero descontado: $" + precioServicio + "\n" +
                  "Saldo actual: $" + saldoCuenta);
            actualizarSaldoEnPantalla(saldoCuenta);
        } else {
            alert("Su saldo no es suficiente para abonar este servicio.");
        }
    }
}



function transferirDinero() {
    var cuentaAmiga1 = 123456;
    var cuentaAmiga2 = 654321;
    var montoAtransferir = parseInt(prompt("¿Cuánto dinero deseas transferir?"));
    if (controlarDatos(montoAtransferir)) {
        if (montoAtransferir > saldoCuenta) {
            alert("No se puede transferir esa cantidad de dinero.");
        }

        else {
            var cuenta = parseInt(prompt("Ingrese el número de cuenta al que quiere transferir el dinero."));
            if (cuenta === cuentaAmiga1) {
                alert("Has transferido $" + montoAtransferir + " a la cuenta amiga N1.");
                saldoCuenta = (saldoCuenta - montoAtransferir);
                actualizarSaldoEnPantalla(saldoCuenta);
            }

            else if (cuenta === cuentaAmiga2) {
                saldoCuenta = (saldoCuenta - montoAtransferir);
                alert("Has transferido $" + montoAtransferir + " a la cuenta amiga N2.")
                actualizarSaldoEnPantalla(saldoCuenta);
            }

            else if ((cuenta !== cuentaAmiga2) || (cuenta !== cuentaAmiga1)) {
                alert("No conocemos ese número de cuenta.");
            }

        }
    }
}

function iniciarSesion() {
    var codigoDeSeguridad = 1530;
    var contraseña = parseInt(prompt("Ingrese su contraseña"));
    if (contraseña === codigoDeSeguridad) {
        alert("Bienvenida Florencia Mendez, ahora ya puedes realizar operaciones.");
        return true;
    }
    else {
        alert("Código incorrecto. Tu dinero se ha retenido por razones de seguridad.")
        return false;
    }


}






//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}



//Cómo hago para que no me salte NaN cuando se pulsa cancelar o cuando no se ingresa ningun valor en los Prompts 