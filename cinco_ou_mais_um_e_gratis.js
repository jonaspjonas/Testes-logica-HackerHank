function solucao(precos) {
    //seu codigo aqui
    let comDesconto = 0;
    let semDesconto = 0;
    let desconto = 0;
    if (precos.length > 4){
        desconto = Math.min(...precos);
        for (let i = 0; i < precos.length; i++){
            comDesconto = comDesconto + precos[i];
        }console.log(comDesconto - desconto);
    } else {
        for (let i = 0; i < precos.length; i++){
            semDesconto = semDesconto + precos[i];
        }console.log(semDesconto);
        
    }
    
}

function processData(input) {
	solucao(input.trim().split(" ").filter(x => x).map(x => parseInt(x, 10)));
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