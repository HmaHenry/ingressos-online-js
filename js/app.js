function comprar() {
    let tipo = document.getElementById('tipo-ingresso');
    let qtd = parseInt(document.getElementById('qtd').value);

    if(tipo.value == 'pista') {
        comprarIngresso(qtd, 'qtd-pista');
    } else if(tipo.value == 'superior') {
        comprarIngresso(qtd, 'qtd-superior')
    } else {
        comprarIngresso(qtd, 'qtd-inferior');
    }
}

function comprarIngresso(qtd, id) {
    let tipoIngresso = parseInt(document.getElementById(id).textContent);
    if (qtd > tipoIngresso) {
        alert('Quantidade indisponível para tipo pista.');
    } if (qtd <= 0) {
        alert('Quantidade inválida, por favor reinsira uma quantidade válida.')
    } else {
        tipoIngresso = tipoIngresso - qtd; // Outra forma de escrever: tipoIngresso -= qtd
        document.getElementById(id).textContent = tipoIngresso;
        alert('Compra realizada com sucesso!');
    }
}