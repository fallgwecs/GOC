//alterei a ordem dos ifs de propor e c, pois assim reduz o numero de ifs utilizados, otimizando ainda mais o codigo.
function cenarios (){
  if (propor == 20.9){
    if (c == 0){
      //ld =loading, ou nesse caso tela de loading
      background(ld.ld20)
      tld20_1();
    }
    else if (c == 1){
      background(mp.bg);
      image(mp.lb, screenX * 0.01, screenY * 0.35, screenX * 0.07, screenY * 0.07);
      image(mp.ngb, screenX * 0.01, screenY * 0.50, screenX * 0.07, screenY * 0.07);
    }  
  }
  if (propor == 16.9){
    if (c == 0){
      background(ld.ld16);
      tld16_1();
    }
    else if (c == 1){
      background(mp.bg);
      image(mp.lb, screenX * 0.02, screenY * 0.35, screenX * 0.10, screenY * 0.07);
      image(mp.ngb, screenX * 0.02, screenY * 0.50, screenX * 0.10, screenY * 0.07);
    }
  } 
}
var mp
//mp = menu principal; tld = tela de loading; bg = background; lb = loadButton ngb = newGmeButton
//prefiri fazer as telas de loading separadas de acordo com a proporção assim evitando verificações desnecessarias.
function tld20_1 (){
  mp = {
    bg: loadImage('assets/mP/mP-20_9.png'),
    lb: loadImage('assets/mP/loadButton.png'),
    ngb: loadImage('assets/mP/newGameButton.png')
  }
  if (frameCount == 100){
    c = 1;
  }
}
function tld16_1 (){
  mp = {
    bg: loadImage('assets/mP/mP-16_9.png'),
    lb: loadImage('assets/mP/loadButton.png'),
    ngb: loadImage('assets/mP/newGameButton.png')
  } 
  if (frameCount == 100){
    c = 1;
  } 
}
