var meuNome = "Rafael Fontes";
var nomeFinal = meuNome + " Lira";
var idade = "25";


var md5 = require('md5');

var hash = md5(nomeFinal+idade);
console.log("Nome: " + nomeFinal + " | Idade: " + idade);
console.log("Hash MD5: " + hash);