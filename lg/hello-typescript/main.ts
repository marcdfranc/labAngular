// javascript Vanilla

var numeros = [1, 2, 3];

var minhaVar = "Minha Variável";

function minhaFunc(x, y) {
    return x + y;
}

numeros.map(function (valor) {
    return valor * 2;
});

// ES6 - ES 2015
let num = 2;
const PI = 3.141516;

numeros.map(valor => valor * 2);

class Matematica {

	soma(x, y) {
		return x + y;
	}
}