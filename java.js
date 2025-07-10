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

// QR CODE


  const inputNumero = document.getElementById('numero');
  const gerarQR = document.getElementById('qrcode');

  inputNumero.addEventListener('input', function () {
    let quantidade = parseInt(this.value, 10);
    if (isNaN(quantidade) || quantidade < 0) quantidade = 0;
    else if (quantidade > 1000) quantidade = 1000;

    const total = (quantidade * valorCota).toFixed(2).replace('.', ',');
    resultado.textContent = `O VALOR DA SUA COTA R$ ${total}`;
  });

  gerarQR.addEventListener('click', function (e) {
    e.preventDefault();

    const quantidade = parseInt(inputNumero.value, 10);

    if (!quantidade || quantidade <= 0) {
      alert('Por favor, informe uma quantidade válida.');
      return;
    }

    const totalReais = (quantidade * valorCota).toFixed(2).replace('.', ',');
    const textoQR = `Pagamento R$ ${totalReais}`;

    const qrURL = `https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png`;

    // Cria nova janela
    const novaJanela = window.open('', '_blank');

    const imgQRCode = document.querySelector('.qr-code img');
imgQRCode.src = 'novo-caminho/qr-code.png';

    novaJanela.document.write(`
      <html>
        <head>
          <title>Pagamento QR Code</title>
          <style>
            body { font-family: Arial, sans-serif; text-align: center; margin-top: 50px; }
            h2 { margin-bottom: 20px; }
            img { border: 1px solid #ccc; padding: 10px; width: 200px; }
          </style>
        </head>
        <body>
          <h2>Pagamento de R$ ${totalReais}</h2>
          <img src="${qrURL}" alt="QR Code">
          <p style="margin-top: 15px;">Escaneie para pagar</p>
        </body>
      </html>
    `);
  });

