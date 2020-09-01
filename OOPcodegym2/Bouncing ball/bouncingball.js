/* var ctx = document.getElementById("myCanvas").getContext("2d");*/

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function(){
        this.canvas.width = 500;
        this.canvas.height = 400;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
        window.addEventListener('keydown', function(e){
            myGameArea.key = e.keyCode;
        })
        window.addEventListener('keyup', function(e){
            myGameArea.key = false;
        })
    },
    clear: function(){
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop : function(){
        clearInterval(this.interval);
    }
}

var Ball = function(x, y, radius){
    this.gamearea = myGameArea;
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = "rgb(" + Math.floor(Math.random()*256)+ "," + Math.floor(Math.random()*256)+ "," + 
    Math.floor(Math.random()*256)+")";
    this.direction = Math.random()*2*Math.PI;
    this.speed = 6;

    this.drawBall = function(){
        ctx = myGameArea.context;
        ctx.fillStyle = this.color;
        ctx.beginPath();
         ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI);
        ctx.fill();
        }
    this.updatePosition = function(paddle){
        this.paddle = paddle;
        this.btop = this.y - this.radius;
        this.bbot = this.y + this.radius;
        this.bleft = this.x - this.radius;
        this.bright = this.x + this.radius;
        
        this.ptop = this.paddle.y;
        this.pbot = this.paddle.y + this.paddle.height;
        this.pleft = this.paddle.x;
        this.pright = this.paddle.x + this.paddle.width;
        this.x += Math.cos(this.direction)*this.speed;
        this.y += Math.sin(this.direction)*this.speed;
        if(this.x - this.radius < 0){
            this.x = this.radius;
            this.direction = Math.atan2(Math.sin(this.direction), Math.cos(this.direction)*-1);
        }
        else if (this.x + this.radius > myGameArea.canvas.width){
            this.x = myGameArea.canvas.width - this.radius;
                this.direction = Math.atan2(Math.sin(this.direction), Math.cos(this.direction)*-1);
        };
        if(this.y - this.radius < 0){
            this.y = this.radius;
            this.direction = Math.atan2(Math.sin(this.direction)*-1, Math.cos(this.direction));
        }
        else if(this.y + this.radius > myGameArea.canvas.height){
            this.y = myGameArea.canvas.height - this.radius;
            this.direction = Math.atan2(Math.sin(this.direction)*-1, Math.cos(this.direction));
            /* myGameArea.stop(); */
        };
        if(this.bright>this.pleft && this.bbot > this.ptop && this.bleft < this.pright && this.btop < this.pbot){
            this.y = this.paddle.y - this.radius;
            this.direction = Math.atan(Math.sin(this.direction)*-1, Math.cos(this.direction));
        }
    }
}
var Paddle = function(x, y, width, height){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.ptop = this.y;
    this.pbot = this.y+ this.height;
    this.pleft = this.x;
    this.pright = this.x + this.width;
    
    this.drawPaddle = function(){
        ctx = myGameArea.context;
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.updatePosition = function(){
        this.x += this.speedX;
        if(this.x < 0){
            this.x = 0;
        }
        else if(this.x + this.width > myGameArea.canvas.width){
            this.x = myGameArea.canvas.width- this.width;
        }
    }
}

function updateGameArea(){
    myGameArea.clear();
    ball.drawBall();
    ball.updatePosition(paddle);
    paddle.drawPaddle();
    paddle.updatePosition();
    paddle.speedX = 0;
    if(myGameArea.key && myGameArea.key == 37) {paddle.speedX = -6;};
    if(myGameArea.key && myGameArea.key == 39) {paddle.speedX = 6};
    }
    
    var ball;
    var paddle;
    var widthP = myGameArea.canvas.width*0.5;
    var heightP = myGameArea.canvas.height*0.5;

function startGame(){
    ball = new Ball(widthP,heightP,20);    
    paddle = new Paddle(widthP, 360, 100, 20);
    myGameArea.start();    
}    