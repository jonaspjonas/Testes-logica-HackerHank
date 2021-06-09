function solucao(obj) {
	//seu codigo aqui
    if (obj.temIngresso && obj.idade >= obj.censura || obj.temIngresso && obj.estaComPais) {
        if (obj.temCarteirinha || obj.idade < 18){
            console.log("MEIA");
        } else {
            console.log("INTEIRA");
        }
        
    } else {
        console.log("ACESSO NEGADO");
    }
}

function processData(input) {
    solucao(JSON.parse(input));
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});