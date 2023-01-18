//alterei a ordem dos ifs de propor e c, pois assim reduz o numero de ifs utilizados, otimizando ainda mais o codigo.
function cenarios (){
  if (propor == 20.9){
    if (c == 0){
      //ld =loading, ou nesse caso tela de loading
      background(ld.ld20)
      tld20();
    }
  }
  if (propor == 16.9){
    if (c == 0){
      background(ld.ld16);
      tld16();
    }
  }
}
var mp
//mp = menu principal; tld = tela de loading; bg = background
//prefiri fazer as telas de loading separadas de acordo com a proporção assim evitando verificações desnecessarias.
function tld20 (){
  if (propor == 20.9){
    mp = {
        bg: loadImage('assets/mP/mP-20_9.png')
    }
  }
  if (frameCount == 100){
    c = 1;
  }
}
function tld16 (){
  if (propor == 16.9){
    mp = {
        bg: loadImage('assets/mP/mP-16_9.png')
    }
  } 
  if (frameCount == 100){
    c = 1;
  }
}