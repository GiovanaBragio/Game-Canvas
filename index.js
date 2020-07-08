class sprite {
    constructor(x, y, largura, altura, imagem){
        this.x = x;
        this.y = y;
        this.largura = largura;
        this.altura = altura;
        this.imagem = imagem;
    }

    desenha(ctx){
        if (this.imagem) {
            ctx.drawImage(this.imagem, this.x, this.y, this.largura, this.altura);
        } else {
            ctx.fillRect(this.x, this.y, this.largura, this.altura);
            ctx.fillStyle = 'darkred';  
        }
    }
}


let canvasEl = document.querySelector('#jogo');
let ctx = canvasEl.getContext('2d');
ctx.imageSmoothingEnabled = false;

let imagemPrincipal = new Image();
imagemPrincipal.src = 'fantasma.png';
let fantasma = new sprite(50, 50, 128, 128, imagemPrincipal);
let meteoros = [];
    meteoros.push(new sprite(500, 150, 20, 20));
    meteoros.push(new sprite(500, 190, 20, 20));
    meteoros.push(new sprite(500, 110, 20, 20));

imagemPrincipal.addEventListener ( 'load', () => {
    desenhaJogo();
});

canvasEl.addEventListener('mousemove', (e)=> {
    fantasma.x = e.offsetX - fantasma.largura/2;
    fantasma.y = e.offsetY - fantasma.altura/2;
    desenhaJogo();
});

function desenhaJogo() {
    ctx.clearRect(0, 0, 700, 280);
    fantasma.desenha(ctx);
    
    for (let i = 0; i < meteoros.length; i++) {
        meteoros[i].desenha(ctx);
    }
}
