function solucao(tempo, distancia) {
	//seu codigo aqui
    if (tempo < 5) {
        console.log("600");
    } else if (tempo > 5 && tempo < 60 ) {
        let custo = (tempo * 100) + (distancia * 50);
        console.log(custo);
    } else if (tempo > 60) {
        if (distancia < 100) {
            let custo = distancia * 200;
            console.log(custo);
        } else {
            let custo = distancia * 150;
            console.log(custo);
        }
    }

}

function processData(input) {
    const {tempo, distancia} = JSON.parse(input);
    solucao(tempo, distancia);
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