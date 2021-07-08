const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;
var engine, world;
var balls = [];
var plinkos = [];
var divisions=[];
var ball, line;
var divisionHeight=300;
var score=0;
var count=0;
var gameState="start";
function setup() {
  createCanvas(800, 700);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(400,700,810,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }
    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    
//Engine.run(engine);
    
}
 


function draw() {
  background(0);
  Engine.update(engine);
 
 textSize(20)
 text("Score : "+score,20,30);
  
  textSize(35)
  text("500",5,550);
  text("500",90,550);
  text("500",170,550);
  text("500",250,550);
  text("100",330,550);
  text("100",410,550);
  text("100",490,550);
  text("200",570,550);
  text("200",650,550);
  text("200",730,550);

  ground.display();

  if (gameState==="end"){
    background("BLACK");
    fill ("WHITE");
    textSize(40);
    text("GAME OVER!",300,400)
  }  
  for (var k = 0; k < plinkos.length; k++) {
    plinkos[k].display();
  }
  
    if(ball!=null)
    {
       ball.display();
        
        if (ball.body.position.y>700)
        {
              if (ball.body.position.x < 300) 
              {
                  score=score+500;      
                  ball=null             
                  if ( count>= 5)gameState ="end";            
              }


              else if (ball.body.position.x < 600 && ball.body.position.x > 301 ) 
              {
                    score = score + 100;
                    ball=null;
                    if ( count>= 5)gameState ="end"; 
              }
              else if (ball.body.position.x < 900 && ball.body.position.x > 601 )
              {
                    score = score + 200;
                    ball=null;
                    if ( count>= 5)gameState ="end"; 
              }      
              
        }
    }
    for (var i = 0; i < divisions.length; i++) {
    
      divisions[i].display();
    }
  }
  function mousePressed() {
    if(gameState !== "end") {
        count++;
    ball = new Particle(mouseX, 50, 10, 10);
    }
}