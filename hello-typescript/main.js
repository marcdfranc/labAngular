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
var num = 2;
var PI = 3.141516;
numeros.map(function (valor) { return valor * 2; });
var Matematica = /** @class */ (function () {
    function Matematica() {
    }
    Matematica.prototype.soma = function (x, y) {
        return x + y;
    };
    return Matematica;
}());
