const input = document.getElementById('numero');


input.addEventListener('input', function () {
    let valor = parseInt(this.value, 10);

    if (isNaN(valor)) {
        this.value = '';
    } else if (valor < 0) {
        this.value = 0;
    } else if (valor > 1000) {
        this.value = 1000;
    }
});

const inputCotas = document.getElementById('numero');

const resultado = document.getElementById('resultado');

const valorCota = 0.50;

inputCotas.addEventListener('input', function () {
    let quantidade = parseInt(this.value, 10);

    if (isNaN(quantidade) || quantidade < 0) {
        quantidade = 0;
    } else if (quantidade > 1000) {
        quantidade = 1000;
        this.value = 1000;
    }


const total = (quantidade * valorCota).toFixed(2).replace('.', ',');
resultado.textContent = `O VALOR DA SUA COTA: R$ ${total}`;

});

// tttttt

const input2 = document.getElementById('numero2');

input2.addEventListener('input', function () {
    let valor = parseInt(this.value, 10);

    if (isNaN(valor)) {
        this.value = '';
    } else if (valor < 0) {
        this.value = 0;
    } else if (valor > 1000) {
        this.value = 1000;
    }
});

const input2Cotas = document.getElementById('numero2');
const resultado2 = document.getElementById('resultado2');

input2Cotas.addEventListener('input', function () {
    let quantidade = parseInt(this.value, 10);

    if (isNaN(quantidade) || quantidade < 0) {
        quantidade = 0;
    } else if (quantidade > 1000) {
        quantidade = 1000;
        this.value = 1000;
    }

const total2 = (quantidade * valorCota).toFixed(2).replace('.', ',');
resultado2.textContent = `O VALOR DA SUA COTA: R$ ${total2}`;

});

// ttt

const input3 = document.getElementById('numero3');

input3.addEventListener('input', function () {
    let valor = parseInt(this.value, 10);

    if (isNaN(valor)) {
        this.value = '';
    } else if (valor < 0) {
        this.value = 0;
    } else if (valor > 1000) {
        this.value = 1000;
    }
});

const input3Cotas = document.getElementById('numero3');
const resultado3 = document.getElementById('resultado3');

input3Cotas.addEventListener('input', function () {
    let quantidade = parseInt(this.value, 10);

    if (isNaN(quantidade) || quantidade < 0) {
        quantidade = 0;
    } else if (quantidade > 1000) {
        quantidade = 1000;
        this.value = 1000;
    }

const total3 = (quantidade * valorCota).toFixed(2).replace('.', ',');
resultado3.textContent = `O VALOR DA SUA COTA: R$ ${total3}`;

});

//    4 


const input4 = document.getElementById('numero2');

input4.addEventListener('input', function () {
    let valor = parseInt(this.value, 10);

    if (isNaN(valor)) {
        this.value = '';
    } else if (valor < 0) {
        this.value = 0;
    } else if (valor > 1000) {
        this.value = 1000;
    }
});

const input4Cotas = document.getElementById('numero4');
const resultado4 = document.getElementById('resultado4');

input4Cotas.addEventListener('input', function () {
    let quantidade = parseInt(this.value, 10);

    if (isNaN(quantidade) || quantidade < 0) {
        quantidade = 0;
    } else if (quantidade > 1000) {
        quantidade = 1000;
        this.value = 1000;
    }

const total4 = (quantidade * valorCota).toFixed(2).replace('.', ',');
resultado4.textContent = `O VALOR DA SUA COTA: R$ ${total4}`;

});

