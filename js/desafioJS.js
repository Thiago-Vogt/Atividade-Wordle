var altura = 6;
var comprimento = 5;
var linha = 0;
var coluna = 0;
var FimDeJogo = false;
var palavra = "GERAR"

window.onload = function() {
    inicializar();
}

function inicializar() {
    for (let r = 0; r < altura; r++) {
        for (let c = 0; c < comprimento; c++) {
            let caixa = document.createElement('span');
            caixa.id = r.toString() + "-" + c.toString();
            caixa.classList.add("caixa");
            caixa.innerHTML = '';
            document.getElementById('tabela').appendChild(caixa);
        }
    }
}

function inserirLetra() {
    if(FimDeJogo) return;

    else if(!FimDeJogo && linha+1==altura) {
        FimDeJogo = true;
        document.getElementById('resposta').innerText = palavra;
    }

    for (let c = 0; c < comprimento; c++) {
        let letraAtual = document.getElementById(linha.toString() + '-' + c.toString());
        letraAtual.innerText = document.getElementById('letra').value.charAt(c);
    }


    checarPalavra();
    linha +=1;
}

function checarPalavra() {
    let corretas = 0;
    for (let c = 0; c < comprimento; c++) {
        let letraAtual = document.getElementById(linha.toString() + '-' + c.toString());
        let letra = letraAtual.innerText;
        if (palavra[c] == letra) {
            letraAtual.classList.add("certo");
            corretas += 1;
        }
        else if (palavra.includes(letra)) {
            letraAtual.classList.add('lugarErrado');
        }
        else {
            letraAtual.classList.add('errado');
        }

        if (corretas == comprimento) {
            FimDeJogo = true;
        }
    }
}