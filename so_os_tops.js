function solucao(produtos) {
	//seu codigo aqui
    let valorTop = 0;
    let total = 0;
        
    for (let item of produtos) {
        total = total + item.preco;
        let valor = item.preco;
        if (valor > 10000) {
            valorTop = valorTop + valor;
            } 
    }
    
    const resposta = {
        totalTop : valorTop,
        percentual : valorTop / total
    };
    console.log(resposta);
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