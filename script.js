function decPbinario() {
    let x = document.getElementById("1").value
    x = parseInt(x);
    let lista = [];
    while (x > 0) {
      let a = x % 2;
      x = Math.floor(x / 2);
      lista.push(a);
    }
    lista.reverse();
    let resultado = lista.join("");
    resultado = resultado.padStart(4, "0");
    document.getElementById("resultado").innerHTML = "O resultado é : " + resultado;
  }

  function decPbinario(x) {
    x = parseInt(x);
    let lista = [];
    while (x > 0) {
      let a = x % 2;
      x = Math.floor(x / 2);
      lista.push(a);
    }
    lista.reverse();
    let resultado = lista.join("");
    resultado = resultado.padStart(4, "0");
    return resultado
}

function decPoctal() {
    let x = document.getElementById("1").value
    x = parseInt(x);
    let lista = [];
    while (x > 0) {
    let a = x % 8;
    x = Math.floor(x / 8);
    lista.push(a);
    }
    lista.reverse();
    let resultado = lista.join('');
    console.log(resultado);
    document.getElementById("resultado").innerHTML = "O resultado é : " + resultado;
}

function decPhexa() {
    let x = document.getElementById("1").value
    x = parseInt(x);
    let lista = [];
    while (x > 0) {
        let a = x % 16;
        x = Math.floor(x / 16);
        if (a <= 9) {
            lista.push(a);
        } else if (a == 10) {
            lista.push("a");
        } else if (a == 11) {
            lista.push("b");
        } else if (a == 12) {
            lista.push("c");
        } else if (a == 13) {
            lista.push("d");
        } else if (a == 14) {
            lista.push("e");
        } else if (a == 15) {
            lista.push("f");
        }
    }
    lista.reverse();
    let resultado = lista.join("");
    console.log(resultado);
    document.getElementById("resultado").innerHTML = "O resultado é : " + resultado;
}
function converterbinariopDec() {
    let entrada = document.getElementById("1").value;
    let resultado = binarioPdec(entrada);
    document.getElementById("resultado").innerHTML = "O resultado é: " + resultado;
  }
  function binarioPdec(binario) {
    let lista = binario.split("").map(Number);
    let resultado = 0;
    for (let i = lista.length - 1; i >= 0; i--) {
      resultado += lista[i] * Math.pow(2, lista.length - 1 - i);
    }
    return resultado;
  }

  function converteroctalPdec() {
    let entrada = document.getElementById("1").value;
    let resultado = octalPdec(entrada);
    document.getElementById("resultado").innerHTML = "O resultado é: " + resultado;
  }
  function octalPdec(octal) {
    let lista = octal.split("").map(Number);
    let resultado = 0;
    for (let i = lista.length - 1; i >= 0; i--) {
      resultado += lista[i] * Math.pow(8, lista.length - 1 - i);
    }
    return resultado;
  }

  function converteroctalPbinari() {
    let entrada = document.getElementById("1").value;
    let x = octalPdec(entrada);
    let resultado = decPbinario2(x)
    document.getElementById("resultado").innerHTML = "O resultado é: " + resultado;
}