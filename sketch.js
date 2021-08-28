const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var playerBase;
var aiBase;
var player1;
var player2;
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
   playerBase = new PlayerBase(300,random(450,height-300),180,150);
   aiBase = new ComputerBase(width-300,random(450,height-300),180,150);
   player1= new Player(285,playerBase.body.position.y-153,50,180); 
   player2= new Computer(width-280,aiBase.body.position.y-153,50,180);
 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
  playerBase.display();
  aiBase.display();
   //display Player and computerplayer
  player1.display();
  player2.display();
}
