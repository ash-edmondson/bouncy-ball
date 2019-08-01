var stage = document.getElementById('stage')
var c = stage.getContext('2d')

var ball = {
  x: 20,
  y: 20,
  dx: 3,
  dy: 0,
  r: 10,
  color: 'red'
}

var world = {
  g: 9.81,
  dt: 0,
  lastT: 0
  }


function draw(t){
  t = t / 1000
  world.dt = t - world.lastT
  world.lastT =t
  // clear the screen
  c.beginPath()
  c.rect(0, 0, stage.width, stage.height)
  c.fillStyle = 'hsla( 0, 0%, 100%, 10%)'
  c.fill()

// update ball speed
ball.dy += world.dt * world.g

//wind ressistance

ball.dy *= 0.99
ball.dx *= 0.99

//update ball postition
  ball.x += ball.dx
  ball.y += ball.dy

  // check if we hit the bottom

  if ( (ball.y + ball.r) >= stage.height){

    ball.dy = -Math.abs (ball.dy) * 0.9

    ball.y = stage.height - ball.r


  }


// check if we hit the top
 if ((ball.y -ball.r) <= 0 ) {
     ball.dy = Math.abs(ball.dy) *0.9
    ball.y = 0 + ball.r
    }

// check if we hit the left 
  if ((ball.x - ball.r) <=0) {
  ball.dx = Math.abs(ball.dx) *0.9
  ball.x = 0 + ball.r 
    }

// check if we hit the right
if ((ball.x + ball.r) >= stage.width){
  ball.dx = -Math.abs(ball.dx) *0.9
  ball.x = stage.width -ball.r
}

  // draw the ball
  c.beginPath()
  c.arc(ball.x, ball.y, ball.r, 0, 2*Math.PI)
  c.fillStyle = ball.color
  c.fill()

  requestAnimationFrame(draw)
 
}

requestAnimationFrame(draw)

document.addEventListener ('keydown', function(e){
 if (e.key =="ArrowUp"){
ball.dy = -10
 }

if (e.key =="ArrowDown"){
ball.dy = 10
 }

if (e.key =="ArrowLeft"){
ball.dx = -10
 }

if (e.key =="ArrowRight"){
ball.dx = 10
 }
})
