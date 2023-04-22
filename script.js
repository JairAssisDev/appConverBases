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

  function decPbinario2(x) {
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
function decPhexa2(x) {
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
    return(resultado);
}

function converterbinariopDec() {
    let entrada = document.getElementById("1").value;
    
    // Verifica se a entrada contém apenas 0s e 1s
    if (!/^[01]+$/.test(entrada)) {
      alert("Por favor, insira apenas 0s e 1s.");
      return;
    }
    
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

  function converterOctalpHexa() {
    let entrada = document.getElementById("1").value;
    let x = octalPdec(entrada);
    let resultado = decPhexa2(x);
    document.getElementById("resultado").innerHTML = "O resultado é: " + resultado;
}
function converteroctalPbinari() {
    let entrada = document.getElementById("1").value;
    let x = octalPdec(entrada);
    let resultado = decPbinario2(x);
    document.getElementById("resultado").innerHTML = "O resultado é: " + resultado;
}

function converterbinariopOctal() {
    let entrada = document.getElementById("1").value;
    
    // Verifica se a entrada contém apenas 0s e 1s
    if (!/^[01]+$/.test(entrada)) {
      alert("Por favor, insira apenas 0s e 1s.");
      return;
    }
    
    let x = binarioPdec(entrada);
    let resultado = decPoctal2(x);
    document.getElementById("resultado").innerHTML = "O resultado é: " + resultado;
  }
  function decPoctal2(x) {
    x = parseInt(x);
    let lista = [];
    while (x > 0) {
    let a = x % 8;
    x = Math.floor(x / 8);
    lista.push(a);
    }
    lista.reverse();
    let resultado = lista.join('');
    return resultado;
}
function converterBinariopHexa() {
    let entrada = document.getElementById("1").value;
    
    // Verifica se a entrada contém apenas 0s e 1s
    if (!/^[01]+$/.test(entrada)) {
      alert("Por favor, insira apenas 0s e 1s.");
      return;
    }
    
    let x = binarioPdec(entrada);
    let resultado = decPhexa2(x);
    document.getElementById("resultado").innerHTML = "O resultado é: " + resultado;
  }

  function hexaPdec() {
    let x = document.getElementById("1").value
    let lista = [];
    let resultadoArray = [];
  
    for (let caractere of x) {
      if (/[0-9]/.test(caractere)) {
        lista.push(parseInt(caractere));
      } else {
        lista.push(caractere);
      }
    }
  
    for (let i = 0; i < lista.length; i++) {
      if (lista[i] === "a" || lista[i] === "A") {
        lista[i] = 10;
      } else if (lista[i] === "b" || lista[i] === "B") {
        lista[i] = 11;
      } else if (lista[i] === "c" || lista[i] === "C") {
        lista[i] = 12;
      } else if (lista[i] === "d" || lista[i] === "D") {
        lista[i] = 13;
      } else if (lista[i] === "e" || lista[i] === "E") {
        lista[i] = 14;
      } else if (lista[i] === "f" || lista[i] === "F") {
        lista[i] = 15;
      }
    }
  
    let a = 0;
  
    for (let g = lista.length - 1; g >= 0; g--) {
      let item = lista[a];
      a++;
      let y = Math.pow(16, g);
      let valor = item * y;
      resultadoArray.push(valor);
    }
    let resultado = resultadoArray.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
    document.getElementById("resultado").innerHTML = "O resultado é: " + resultado;
    }
    function converterHexapBinario() {
      let entrada = document.getElementById("1").value;
      
      // Verifica se a entrada contém apenas 0s e 1s
      if (!/^[0-9a-fA-F]+$/.test(entrada)) {
        alert("Por favor, insira apenas números e letras de a a f (em minúsculas ou maiúsculas).");
        return;
      }
      
      let x = hexaPdec2(entrada);
      let resultado = decPbinario2(x);
      document.getElementById("resultado").innerHTML = "O resultado é: " + resultado;
    }

    function hexaPdec2() {
      let x = document.getElementById("1").value
      let lista = [];
      let resultadoArray = [];
    
      for (let caractere of x) {
        if (/[0-9]/.test(caractere)) {
          lista.push(parseInt(caractere));
        } else {
          lista.push(caractere);
        }
      }
    
      for (let i = 0; i < lista.length; i++) {
        if (lista[i] === "a" || lista[i] === "A") {
          lista[i] = 10;
        } else if (lista[i] === "b" || lista[i] === "B") {
          lista[i] = 11;
        } else if (lista[i] === "c" || lista[i] === "C") {
          lista[i] = 12;
        } else if (lista[i] === "d" || lista[i] === "D") {
          lista[i] = 13;
        } else if (lista[i] === "e" || lista[i] === "E") {
          lista[i] = 14;
        } else if (lista[i] === "f" || lista[i] === "F") {
          lista[i] = 15;
        }
      }
    
      let a = 0;
    
      for (let g = lista.length - 1; g >= 0; g--) {
        let item = lista[a];
        a++;
        let y = Math.pow(16, g);
        let valor = item * y;
        resultadoArray.push(valor);
      }
      let resultado = resultadoArray.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
      return resultado;
      }
  
      function converterHexapOctal() {
        let entrada = document.getElementById("1").value;
        // Verifica se a entrada contém apenas 0s e 1s
        if (!/^[0-9a-fA-F]+$/.test(entrada)) {
          alert("Por favor, insira apenas números e letras de a a f (em minúsculas ou maiúsculas).");
          return;
        }
        
        let x = hexaPdec2(entrada);
        let resultado = decPoctal2(x);
        document.getElementById("resultado").innerHTML = "O resultado é: " + resultado;
      }

      function binariofrapradecfra() {
        let entrada = document.getElementById("1").value.replace(",", ".");
        let [intPart, fracPart] = entrada.split(".");
        let intDecimal = parseInt(intPart, 2);
        let fracDecimal = 0;
        for (let i = 0; i < fracPart.length; i++) {
          fracDecimal += parseInt(fracPart[i]) * Math.pow(2, -(i + 1));
        }
        let resultado = intDecimal + fracDecimal;
        document.getElementById("resultado").innerHTML = "O resultado é: " + resultado;
      }
      