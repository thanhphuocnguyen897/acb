/**
 * Created by nhatnk on 4/26/17.
 */

function Hero(image, top, left, size){
  this.image = image;
  this.top = top;
  this.left = left;
  this.size = size;

  this.getHeroElement = function(){
    return '<img width="'+ this.size + '"' +
      ' height="'+ this.size + '"' +
      ' src="' + this.image +'"' +
      ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
  }

  this.moveRight = function(){
    this.left += 80;
    console.log('ok: ' + this.left);
  }
  this.moveDown = function(){
    this.top += 50;
    console.log('ok: ' + this.left);
  }
}

var hero = new Hero('pikachu.png', 10, 10, 100);

function start(){
  if(hero.left < window.innerWidth - hero.size){
    hero.moveRight();
  } else {
    hero.moveDown();
  }
  document.getElementById('game').innerHTML = hero.getHeroElement();
  setTimeout(start, 1000)
}

start();