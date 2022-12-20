var boneco,boneco_parado, boneco_correndo;
var chao,chao2,chaoImg;
var chaoColisao, chaoColisao2;
var jump;
var isMoviment = false;

function preload (){
  boneco_parado = loadImage("assets/Sprite teste.png");
  boneco_correndo = loadImage("assets/Sprite corre.png")
  chaoImg = loadImage("assets/TexturaChão.png");
}


function setup() {
  createCanvas(1600,800);
  chaoGrupo = new Group();
  boneco = createSprite(100,100,10,10);
  boneco.addImage(boneco_parado);
  boneco.scale = 0.03;
 
  
for (c=0; c<=12; c++){
  
    chao = createSprite(28+64*c,390,64,64);
    chao.addImage(chaoImg);
    chaoGrupo.add(chao);
  }

for (i=0; i<=12; i++){

  chao2 = createSprite(1000+64*i,700,64,64);
  chao2.addImage(chaoImg);
  chaoGrupo.add(chao2);
}

 
  chaoGrupo.debug = true;
  //console.log(chao);
  

  chaoColisao = createSprite(400,374,800,19);
  chaoColisao.visible = false;

  chaoColisao2 = createSprite(1369,678,800,19);
  chaoColisao2.visible = false;

  jump = createSprite(1000,653,30,30);


  //boneco.debug = true; 
}

function draw() 
{
  background(51);
  boneco.collide(chaoColisao);
  boneco.collide(chaoColisao2);



//Texto indicativo
fill('white');
textSize(20);
text('<-- pule aqui dentro', 1030, 650);
text('•Setinhas para andar', 80, 100);
text('•Espaço para pular', 80, 150);
text('•K para resetar o personagem', 80, 200);
text('⇦ ⇨', 325, 100);
text('⇧', 342, 90);
text('⇩', 342, 110);
text('▂▂▂▂▂▂',320, 150);





  //movimentos

  if (keyIsDown(RIGHT_ARROW)){
   boneco.x = boneco.x + 8;
   isMoviment = true;
  }
  if (keyIsDown(LEFT_ARROW)){
    boneco.x = boneco.x - 8;
    isMoviment = true;
   }
   if (keyWentUp(RIGHT_ARROW) || keyWentUp(LEFT_ARROW)){
    isMoviment = false;
   }
  if (keyDown("space") && boneco.isTouching(chaoGrupo)){
  boneco.velocityY = boneco.velocityY - 15;
  }

  if (keyDown("space") && boneco.isTouching(jump)){
    boneco.velocityY = boneco.velocityY - 18;
  }
  
  
  // lapidar

  camera.position.y = boneco.y;

  if (isMoviment == true){
    boneco.addImage(boneco_correndo);
  }

  if(isMoviment == false){
    boneco.addImage(boneco_parado);
  }


  console.log(isMoviment);

  //reset do boneco

  if (keyDown("k")){
  boneco.x = 400;
  boneco.y = 200; 
  }

  //gravidade
  boneco.velocityY = boneco.velocityY + 0.8;

  //mouse pega o boneco
  if (mouseIsPressed){
  boneco.y = mouseY;
  boneco.x = mouseX;
  console.log("poin");
}

boneco.depth = chao.depth;
boneco.depth = boneco.depth + 1;

 
  drawSprites();


}
