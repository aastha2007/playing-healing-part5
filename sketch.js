const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;

function preload(){
//drimg=loadImage("images/doctor.png")
}
function setup(){
  createCanvas(1400,800)
  engine = Engine.create();
  world = engine.world;
  wall1=new Maze(382,615,300,PI)
  wall2=new Maze(1393,103,200,PI/2)
  wall3=new Maze(1208,36,100,PI)
  wall4=new Maze(50,250,100,PI)
  wall5=new Maze(108,788,100,PI)
  wall6=new Maze(330,50,100,PI/2)
  wall7=new Maze(4,653,300,PI/2)
  wall8=new Maze(126,612,60,PI)
  wall9=new Maze(202,580,200,PI/2)
  wall10=new Maze(1355,218,200,PI)
  wall11=new Maze(249,772,200,PI)
  wall12=new Maze(1110,238,150,PI/2)
  wall13=new Maze(1068,48,200,PI)
  wall14=new Maze(297,484,200,PI)
  wall15=new Maze(287,333,300,PI/2)
  wall16=new Maze(57,449,200,PI/2)
  wall17=new Maze(57,534,150,PI)
  wall18=new Maze(1174,354,200,PI)
  wall19=new Maze(924,371,300,PI/2)
  wall20=new Maze(906,127,300,PI)
  wall21=new Maze(935,484,200,PI)
  wall22=new Maze(520,590,200,PI/2)
  wall23=new Maze(540,281,400,PI)
  wall24=new Maze(684,579,200,PI)
  wall25=new Maze(624,442,100,PI/2)
  wall26=new Maze(798,622,200,PI/2)
  wall27=new Maze(520,673,150,PI)
  wall28=new Maze(708,231,300,PI/2)
  wall29=new Maze(699,36,350,PI)
  wall30=new Maze(1258,466,350,PI/2)
  wall31=new Maze(473,790,350,PI/2)
  wall32=new Maze(1245,606,250,PI)
  wall33=new Maze(143,18,250,PI)
  wall34=new Maze(1060,631,250,PI)
  wall35=new Maze(317,165,200,PI)
  wall36=new Maze(663,321,150,PI)
  wall37=new Maze(790,678,100,PI)
  wall38=new Maze(30,87,150,PI/2)
  wall39=new Maze(841,474,150,PI/2)
  wall40=new Maze(434,161,200,PI/2)
  wall41=new Maze(1167,786,200,PI/2)
  wall42=new Maze(1160,620,150,PI/2)
  wall43=new Maze(901,756,100,PI)
  wall44=new Maze(1254,360,150,PI/2)
  wall45=new Maze(194,183,200,PI/2)
  wall46=new Maze(554,13,200,PI/2)
  wall47=new Maze(1353,635,100,PI/2)
  wall48=new Maze(823,76,150,PI/2)


 // dr=createSprite(50,750)
  //dr.addAnimation("drmoving",drimg)
  
  dr=new Doctor(200,200)
  v1=new Virus(150,300,50)
  
}
function draw(){
  background("pink")
  Engine.update(engine);
  
  textSize(15);
  text(mouseX+" ,"+mouseY,700,400);
  wall1.display();
  wall2.display();
  wall3.display();
  wall4.display();
  wall5.display();
  wall6.display();
  wall7.display();
  wall8.display();
  wall9.display();
  wall10.display();
  wall11.display();
  wall12.display();
  wall13.display();
  wall14.display();
  wall15.display();
  wall16.display();
  wall17.display();
  wall18.display();
  wall19.display();
  wall20.display();
  wall21.display();
  wall22.display();
  wall23.display();
  wall24.display();
  wall25.display();
  wall26.display();
  wall27.display();
  wall28.display();
  wall29.display();
  wall30.display();
  wall31.display();
  wall32.display();
  wall33.display();
  wall34.display();
  wall35.display();
  wall36.display();
  wall37.display();
  wall38.display();
  wall39.display();
  wall40.display();
  wall41.display();
  wall42.display();
  wall43.display();
  wall44.display();
  wall45.display();
  wall46.display();
  wall47.display();
  wall48.display();
  dr.display();
  v1.display();

  if (rightPressed){
   // dr.position.x+=20
   Body.applyForce(dr,{x:dr.position.x,y:dr.position.y},{x:0.5,y:0})
  }
  
}
//function keyPressed(){
  
//}