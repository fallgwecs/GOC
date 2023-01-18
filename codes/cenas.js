function cenarios (){
  if (c == 0){
    if (propor == 20.9){
      background(ld.ld20);
    }
    if (propor == 16.9){
      background(ld.ld16);
    }
    tld();
  }
  if (c == 1){
    background(mp.bg);
  }  
}
var mp

function tld (){
  if (propor == 20.9){
    mp = {
        bg: loadImage('assets/mP/mP-20_9.png')
    }
  }
  if (propor == 16.9){
    mp = {
        bg: loadImage('assets/mP/mP-16_9.png')
    }
  } 
  if (frameCount == 100){
    c = 1;
  }
}
