    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var brickRow = 9;
    var brickColumn= 2;
    var brickWidth = 78;
    var brickHeight = 24;
    var brickTop = 32;
    var brickLeft = 30;
    var brickPadding = 18;
    var ballRadius = 11;
    var x = canvas.width/2;
    var y = canvas.height-30;
    var score = 0;
    var lives = 3;
    var bricks = [];
    var dx = 2;
    var dy = -2;
    var rightKey = false;
    var leftKey = false;
    var paddleHeight = 10;
    var paddleWidth = 75;
    var paddleX = (canvas.width-paddleWidth/2);

    function drawScore() {
        ctx.font = "22px Impact, Charcoal, sans-serif";
        ctx.fillStyle = "#ff0000";
        ctx.fillText("Score: "+score, 25, 425);
    }
    function drawLives() {
        ctx.font = "22px Impact, Charcoal, sans-serif";
        ctx.fillStyle = "#00cc00";
        ctx.fillText("Lives: "+lives, canvas.width-90, 425);
    }

    document.addEventListener("keydown", keyDownMove, false);
    function keyDownMove(e) {
        if(e.keyCode == 39) {
            rightKey = true;
        }
        else if(e.keyCode == 37) {
            leftKey = true;
        }
    }

    document.addEventListener("keyup", keyUpMove, false);
    function keyUpMove(e) {
        if(e.keyCode == 39) {
            rightKey = false;
        }
        else if(e.keyCode == 37) {
            leftKey = false;
        }
    }

    function mouseMoveEvent(e) {
        if(positionX > 0 && positionX < canvas.width) {
            paddleX = positionX - paddleWidth/2;
        }
    }

    function collisionDetection() {
        for(c=0; c<brickColumn; c++) {
            for(r=0; r<brickRow; r++) {
                var b = bricks[c][r];
                if(b.status == 1) {
                    if(x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight) {
                        dy = -dy;
                        b.status = 0;
                        score++;
                        if(score == brickRow*brickColumn) {
                            alert("WAY TO GET RID OF ALL OF THE BRICKS! CONGRATS!");
                            document.location.reload();
                        }
                    }
                }
            }
        }
    }

    function drawBall() {
        ctx.beginPath();
        ctx.arc(x, y, ballRadius, 0, Math.PI*2);
        ctx.fillStyle = "#ccff33";
        ctx.fill();
        ctx.closePath();
    }

    function drawPaddle() {
        ctx.beginPath();
        ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
        ctx.fillStyle = "#3333ff";
        ctx.fill();
        ctx.closePath();
    }

    function drawBricks() {
        for(c=0; c<brickColumn; c++) {
            for(r=0; r<brickRow; r++) {
                if(bricks[c][r].status == 1) {
                    var brick1 = (r*(brickWidth+brickPadding))+brickLeft;
                    var brick2 = (c*(brickHeight+brickPadding))+brickTop;
                    bricks[c][r].x = brick1;
                    bricks[c][r].y = brick2;
                    ctx.beginPath();
                    ctx.rect(brick1, brick2, brickWidth, brickHeight);
                    ctx.fillStyle = "#993300";
                    ctx.fill();
                    ctx.closePath();
                }
            }
        }
    }

        for(c=0; c<brickColumn; c++) {
        bricks[c] = [];
        for(r=0; r<brickRow; r++) {
        bricks[c][r] = { x: 0, y: 0, status: 1 };
        }
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawPaddle();
        drawBricks();
        drawScore();
        drawLives();
        drawBall();
        collisionDetection();
        if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
            dx = -dx;
        }
        if(y + dy < ballRadius) {
            dy = -dy;
        }
        else if(y + dy > canvas.height-ballRadius) {
            if(x > paddleX && x < paddleX + paddleWidth) {
                dy = -dy;
            }
            else {
                lives--;
                if(!lives) {
                    alert("YOU HAVE FAILED. GAME OVER.");
                    document.location.reload();
                }
                else {
                    x = canvas.width/2;
                    y = canvas.height-30;
                    dx = 3;
                    dy = -3;
                    paddleX = (canvas.width-paddleWidth);
                }
            }
        }

        if(rightKey && paddleX < canvas.width-paddleWidth) {
            paddleX += 9;
        }
        else if(leftKey && paddleX > 0) {
            paddleX -= 9;
        }
        x += dx;
        y += dy;
        requestAnimationFrame(draw);
    }

    draw();

    function back(){
    var random= Math.floor(Math.random()*5);
    if(random==0){
        canvas.style.backgroundImage="url('sky.png')";
        }
    else if(random==1){
        canvas.style.backgroundImage="url('hogwarts.png')";
        }
    else if(random==2){
        canvas.style.backgroundImage="url('lotr.png')";
        }
    else if(random==3){
        canvas.style.backgroundImage="url('ocean.png')";
        }
    else if(random==4){
        canvas.style.backgroundImage="url('space.png')";
        }
    }