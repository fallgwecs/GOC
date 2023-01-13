function setup (){
  createCanvas(screenX, screenY);
  frameRate(60);
}
function draw () {
  screenConfig();
  cenarios();
  frames();
  if(fscreen == false){
    image(fs.false, screenX - screenX * 0.04, 0, 20, 20) 
  }
  else{
    image(fs.true, screenX - screenX * 0.04, 0, 20, 20) 
  }
  
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
  console.log('função funcionando');
}

// frameCount = variavel do p5 que indica quantos frames já foram renderizados, mouseX e mouseY = variável do p5 que indica as cordenadas do mouse
function screenConfig (){
//proporção de tela
  if (screenX > screenY + screenY * 0.80){
    propor = 20.9
  }
  else {
    propor = 16.9
  }
}

var fscreen = false;
var fs
function preload (){
  fs = {
    true: loadImage('assets/fs_true.png'),
    false: loadImage('assets/fs_false.png')
  }
}
// mouseClicked = função do p5 que é ativada toda vez que há um click, vc deverá usar as coordenadas do mouse para saber onde houve o click
function mouseClicked () {
  if(mouseX > screenX - screenX * 0.10 && mouseY < screenY - screenY * 0.90){
    toggleFullScreen();
    if (fscreen == false){
      fscreen = true;
    }
    if (fscreen == true){
      fscreen = false;
    }
  }


  if(screenY > screenX){
    alert('erro: vire seu dispositivo na horizontal e recarregue a pag')
  }
}

function toggleFullScreen() {
  if ((document.fullScreenElement && document.fullScrenElement !== null) ||    
   (!document.mozFullScreen && !document.webkitIsFullScreen)) {
    if (document.documentElement.requestFullScreen) {  
      document.documentElement.requestFullScreen();  
    } else if (document.documentElement.mozRequestFullScreen) {  
      document.documentElement.mozRequestFullScreen();  
    } else if (document.documentElement.webkitRequestFullScreen) {  
      document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);  
    }  
  } else {  
    if (document.cancelFullScreen) {  
      document.cancelFullScreen();  
    } else if (document.mozCancelFullScreen) {  
      document.mozCancelFullScreen();  
    } else if (document.webkitCancelFullScreen) {  
      document.webkitCancelFullScreen();  
    }  
  } 
} 
