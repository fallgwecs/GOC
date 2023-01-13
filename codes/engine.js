function setup (){
  createCanvas(screenX, screenY)
}
function draw () {
  screenConfig();
  frames();
  cenarios();
}

var screenX = window.screen.width, screenY = window.screen.height
//screenX = largura da janela do usuario, screenY = altura da janela do usuário
var c = 0
//c indica qual o cenario atual, 0 sig tela de carregamento, 1 menu principal ...

function frames (){
  fill (0);
    text (frameCount, 10, 10);
    text (mouseY, 40, 30);
    text (mouseX, 40, 10);
}
// frameCount = variavel do p5 que indica quantos frames já foram renderizados, mouseX e mouseY = variável do p5 que indica as cordenadas do mouse
function screenConfig (){
  if (screenX > screenY + screenY * 0.80){
    propor = 1
    //20:9
  }
  else {
    propor = 2
    //16:9
  }
}


function preload (){
  
}
// mouseClicked = função do p5 que é ativada toda vez que há um click, vc deverá usar as coordenadas do mouse para saber onde houve o click
function mouseClicked () {
  
}
