const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ball,chain1;

var score = 0;

var ground1,ground2;
var box1,box2,box3,box4,box5,box6,box7;
var box8,box9,box10,box11,box12;
var box13,box14,box15;
var box16;

function setup()
{
    engine = Engine.create();
	world = engine.world;
    canvas = createCanvas(800,400);

    ball = new Ball(100,300,30,30);

    chain1 = new chain(ball.body,{x:100,y:200});

    ground1 = new ground(400,380,800,20);
    ground2 = new ground(400,280,150,10);

    box1 = new box(340,250,20,30);
    box2 = new box(360,250,20,30);
    box3 = new box(380,250,20,30);
    box4 = new box(400,250,20,30);
    box5 = new box(420,250,20,30);
    box6 = new box(440,250,20,30);
    box7 = new box(460,250,20,30);

    box8 = new box(360,220,20,30);
    box9 = new box(380,220,20,30);
    box10 = new box(400,220,20,30);
    box11 = new box(420,220,20,30);
    box12 = new box(440,220,20,30);

    box13 = new box(380,190,20,30);
    box14 = new box(400,190,20,30);
    box15 = new box(420,190,20,30);

    box16 = new box(400,180,20,30);
}

function draw()
{
    Engine.update(engine)
    background(0);

    console.log(score);

    text("Score:"+score,700,40);

    ball.display(252,243,4);

    chain1.display();
    
    ground1.display();
    ground2.display();

    box1.display(134,205,223);
    box2.display(134,205,223);
    box3.display(134,205,223);
    box4.display(134,205,223);
    box5.display(134,205,223);
    box6.display(134,205,223);
    box7.display(134,205,223);

    box8.display(255,192,203);
    box9.display(255,192,203);
    box10.display(255,192,203);
    box11.display(255,192,203);
    box12.display(255,192,203);

    box13.display(62,223,207);
    box14.display(62,223,207);
    box15.display(62,223,207);

    box16.display(127,127,127);
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    chain1.fly();
}