//CREATED BY AADI GOLECHA ON 14th MAY
//fruit ninja game


//Game States

var LOBBY = 0;
var SELECTOR = 1;
var WITHBOMB = 2;
var TIMERMODE = 3;
var FREEPLAY = 4;
var THREEBOMB = 5;
var ONELIFE = 6;
var MINUSTEN = 7;
var PAUSE = 8;
var WITHOUTBOMB = 9;
var gameState = 0;

var knife,fruit,trail, bombF,bomb ,retry ,retryImg ;
var playButton, title ,woodenbg ,withBomb ,withBombImg ,withoutBomb ,withoutBombImg ,freePlay,freePlayImg,timer,timerImg,backbutton,backbuttonImg;
var fruitGroup,bombGroup,trailG, score,randomFruit, position;
var knifeImage , fruit1, fruit2 ,fruit3,fruit4, monsterImage,woodenImg,playButtonImg ,gameOverImage,bombImage,titleImg,cut;
var knifeCut , gameOver ,redCross;
var bombx ,bombxImg ,bombref ,bombrefImg ,threeBomb ,threeBombImg ,oneLife ,oneLifeImg ,bombAndTimer ,bombAndTimerImg ,click ,bombBlast ;

var cross1 ,cross2 ,cross3 ,redXImg ,grayXImg ,lifeone = 0 ,time = 30;;


function preload(){
  
  knifeImage = loadImage("knife.png");
  bombImage = loadImage("bomb.png")
  fruit1 = loadImage("fruit1.png");
  fruit2 = loadImage("fruit2.png");
  fruit3 = loadImage("fruit3.png");
  fruit4 = loadImage("fruit4.png");
  cut = loadImage("cut.png");
  titleImg = loadImage("fruitNinja.png");
  gameOverImage = loadImage("gameover.png");
  woodenImg = loadImage("background.jpg");
  playButtonImg = loadImage("play.png");
  withBombImg = loadImage("withbomb.png");
  withoutBombImg = loadImage("withoutbomb.png");
  freePlayImg = loadImage("freePlay.png");
  timerImg = loadImage("timer.png");
  backbuttonImg = loadImage("backbuttom.png");
  bombxImg = loadImage("bombx.png");
  bombrefImg = loadImage("bombref.png");
  threeBombImg =loadImage("threebomb.png");
  oneLifeImg = loadImage("onelife.png");
  bombAndTimerImg = loadImage("-10withbomb.png");
  redXImg = loadImage("redx.png");
  grayXImg = loadImage("grayx.png");
  retryImg = loadImage("retry.png");

  //loaded sound
  knifeCut = loadSound("knifeSwoosh.mp3");
  gameOver = loadSound("gameover.mp3");
  click = loadSound("click.mp3");
  bombBlast = loadSound("bombBlast.mp3");

}



function setup() {
  createCanvas(600, 400);
  
  woodenbg = createSprite(300,200,10,10);
  woodenbg.addImage(woodenImg);

  
  
  //creating sword
  knife=createSprite(900,900,20,20);
  knife.scale=0.7
  knife.addImage(cut);
  knife.visible = false;
  
  //set collider for sword
  knife.setCollider("rectangle",0,0,20,20);

  title = createSprite(300,200,10,10);
  title.addImage(titleImg);
  
  playButton = createSprite(300,300,10,10);
  playButton.addImage(playButtonImg)
  playButton.scale = 0.5;
  
  withBomb = createSprite(130,200,10,10);
  withBomb.addImage(withBombImg);
  withBomb.visible = false;
  withBomb.scale = 1.5;
  
  withoutBomb = createSprite(450,200,10,10);
  withoutBomb.addImage(withoutBombImg);
  withoutBomb.visible = false;
  withoutBomb.scale = 1.5;
  
  freePlay = createSprite(300,100,10,10);
  freePlay.addImage(freePlayImg);
  freePlay.visible = false;
  freePlay.scale = 1.5;
  
  timer = createSprite(300,300,10,10);
  timer.addImage(timerImg);
  timer.visible = false;
  timer.scale = 1.5;
  
  backbutton = createSprite(40,50,10,10);
  backbutton.addImage(backbuttonImg);
  backbutton.scale = 0.4;
  
  bombx = createSprite(400,100,10,10);
  bombx.addImage(bombxImg);
  bombx.visible = false;
  bombx.scale = 0.6;
  
  bombref = createSprite(150,100,10,10);
  bombref.addImage(bombrefImg);
  bombref.visible = false;
  bombref.scale = 0.8;
  
  threeBomb = createSprite(300,100,10,10);
  threeBomb.addImage(threeBombImg);
  threeBomb.visible = false;
  threeBomb.scale = 2;
  
  oneLife = createSprite(100,300,10,10);
  oneLife.addImage(oneLifeImg);
  oneLife.visible = false;
  oneLife.scale = 2;
  
  bombAndTimer = createSprite(440,300,10,10);
  bombAndTimer.addImage(bombAndTimerImg);
  bombAndTimer.visible = false;
  bombAndTimer.scale = 2;

  cross1 = createSprite(570,40,10,10);
  cross1.addImage(grayXImg);
  cross1.scale = 0.1
  cross1.visible = false;

  cross2 = createSprite(530,45,10,10);
  cross2.addImage(grayXImg);
  cross2.scale = 0.2
  cross2.visible = false;

  cross3 = createSprite(460,50,10,10);
  cross3.addImage(grayXImg);
  cross3.scale = 0.3
  cross3.visible = false;

  knife=createSprite(40,200,20,20);
  knife.addImage(cut);

  retry = createSprite(400,200,10,10);
  retry.addImage(retryImg);
  retry.scale = 0.5;
  retry.visible = false;
  
  // Score variables and Groups
  score=0;

  redcross = 0;

  fruitGroup=createGroup();
  bombGroup=createGroup();
  trailG = createGroup();  
  
}

function draw() 
{ 
  
  gameStateLog = gameState;

  if(gameState === LOBBY)
  {
    lobby ();
  } 
  
  if(gameState === SELECTOR)
  {
    selector () ;     
  }
  
  if(gameState === WITHOUTBOMB)
  {
    withoutbomb();
  }
  
  if(gameState === FREEPLAY) 
  {
    freeplay(); 
  }
  
  if(gameState === TIMERMODE)
  {
    timerMode();  
  } 
  
  if(gameState === WITHBOMB)
  {       
    withbomb();
  }
  
  if(gameState === THREEBOMB)
  {
     threebomb(); 
  }

  if(gameState === ONELIFE)
  {
    onelifef();
  }

  if(gameState === MINUSTEN){
    minusten();
  }
    
  var message = gameState;
  console.log(message)

  drawSprites();

  fill(rgb(237, 213, 126));
  textSize(70);
  text(score,10,75);

  fill("red");
  textSize(70);
  text(time,520,390);
}  


function bombF(){
  if(World.frameCount%100 === 0){
    bomb=createSprite(400,400,20,20);
    bomb.addImage(bombImage);
    bomb.scale = 0.2;

    bomb.x=Math.round(random(100,550));
    //update below give line of code for increase monsterGroup speed by 10
    bomb.velocityY = -8;
    bomb.setLifetime=100;
    
    bombGroup.add(bomb);
  }
}

function fruits(){
  if(World.frameCount%20===0){
    position = Math.round(random(1,2));
    fruit=createSprite(400,200,20,20);
    
     //using random variable change the position of fruit, to make it more challenging
    
    if(position==1)
    {
    fruit.y=400;
    //update below give line of code for increase fruitGroup speed by 4
    fruit.velocityY=-7
    }
    else
    {
      if(position==2){
      fruit.y=400;
      
     //update below give line of code for increase fruitGroup speed by 4
      fruit.velocityY= -7;
      }
    }
    
    fruit.scale=0.2;
     //fruit.debug=true;
     r=Math.round(random(1,4));
    if (r == 1) {
      fruit.addImage(fruit1);
    } else if (r == 2) {
      fruit.addImage(fruit2);
    } else if (r == 3) {
      fruit.addImage(fruit3);
    } else {
      fruit.addImage(fruit4);
    }
    
    fruit.x=Math.round(random(50,550));
   
    
    fruit.setLifetime=100;
    
    
    
    fruitGroup.add(fruit);
  }
  
  
  
}

function knifef(){
  if (frameCount%1 === 0)
  {
    trail = createSprite(900,900,10,10);
    trail.addImage(cut);
    
    
    if (frameCount%5=== 0)
    {
      trailG.destroyEach();
    }
    
  }
  
  trail.y=World.mouseY;
  trail.x=World.mouseX;
  knife.y=World.mouseY;
  knife.x=World.mouseX;

  
  trailG.add(trail);
}

function chopper (){
  if(fruitGroup.isTouching(knife)){
    
    fruitGroup.destroyEach();
    
    fruitGroup.velocityX = 7 + (score/3);
    
    score = score + 1;
  }
}

function lobby (){
  title.visible = true;
    playButton.visible = true;
    backbutton.visible = false;
    withoutBomb.visible = false;
    withBomb.visible = false;
    freePlay.visible = false;
    timer.visible = false; 
    bombx.visible = false;
    bombref.visible = false;
    threeBomb.visible = false;
    oneLife.visible = false;
    bombAndTimer.visible = false;
    retry.visible = false;
    
    if(mousePressedOver(playButton))
    {
      gameState = SELECTOR;
      click.play()
    }
}

function selector (){
  title.visible = false;
  playButton.visible = false;
  withBomb.visible = true;
  withoutBomb.visible = true;
  backbutton.visible = true;
  freePlay.visible = false;
  timer.visible = false; 
  bombx.visible = true;
  bombref.visible = true;
  threeBomb.visible = false;
  oneLife.visible = false;
  bombAndTimer.visible = false;

  if(mousePressedOver(backbutton))
  {
    gameState = LOBBY;
  }    
  
  if(mousePressedOver(withBomb))
  {
    gameState = WITHBOMB;
  }
    
  if(mousePressedOver(withoutBomb))
  {
    gameState = WITHOUTBOMB;
  }
}

function withoutbomb (){
  withBomb.visible = false;
    withoutBomb.visible = false;
    freePlay.visible = true;
    timer.visible = true; 
    bombx.visible = false;
    bombref.visible = false;
    threeBomb.visible = false;
    
    if(mousePressedOver(backbutton))
    {
      gameState = SELECTOR;
    }  
    
    if(mousePressedOver(freePlay))
    {
      gameState = FREEPLAY;
    } 
    
    if(mousePressedOver(timer))
    {
      gameState = TIMERMODE;
    }

}

function freeplay (){
    freePlay.visible = false;
    timer.visible = false; 

    fruits();
    chopper();
    knifef();

    backbutton.y = 150;
    
    if(mousePressedOver(backbutton))
    {
      gameState = WITHOUTBOMB;
      score = 0;
    } 
}

function timerMode (){
    freePlay.visible = false;
    timer.visible = false; 
    backbutton.visible = false;

    if(time > 0.1){
      fruits ();
      knifef();
      chopper ();
  
      time = time - 0.05;
    }
  
    if(time < 0.1)
    {
      end();
  
      if(mousePressedOver(retry))
      {
        retryf();
      }
    }
}

function withbomb (){
  withBomb.visible = false;
    withoutBomb.visible = false;
    bombx.visible = false;
    bombref.visible = false;
    threeBomb.visible = true;
    oneLife.visible = true;
    bombAndTimer.visible = true;
    cross1.visible = false;
    cross2.visible = false;
    cross3.visible = false;
    retry.visible = false;
    
    if(mousePressedOver(threeBomb))
    {
      gameState = THREEBOMB;
    }
    
    if(mousePressedOver(oneLife))
    {
      gameState = ONELIFE;
    }
    
    if(mousePressedOver(bombAndTimer ))
    {
      gameState = MINUSTEN;
    }
    
    if(mousePressedOver(backbutton))
    {
      gameState = SELECTOR;
    }   
}

function threebomb (){
  threeBomb.visible = false;
  oneLife.visible = false;
  bombAndTimer.visible = false;
  backbutton.visible = false ;
  
  cross1.visible = true;
  cross2.visible = true;
  cross3.visible = true;

  chopper ();

  if(bombGroup.isTouching(knife)){
    bombGroup.destroyEach();
    bombBlast.play();
    redcross = redcross + 1;
  }
  
  else if(redcross === 1){
    cross1.addImage(redXImg);
  }else if (redcross === 2){
    cross2.addImage(redXImg);

  }else if (redcross === 3){
    cross3.addImage(redXImg);
  }

  if(redcross < 3)
  {
    fruits();
    bombF();
    knifef();
  }
  if(redcross === 3 ){

    end ()

    retry.visible = true;

    if(mousePressedOver(retry)){
      retryf()
      gameState = THREEBOMB;
      redcross = 0;
    }

  }
  
}

function end (){
  backbutton.visible = true ;
  retry.visible = true ;

  trailG.destroyEach();  
  bombGroup.destroyEach();;

  backbutton.x = 200;
  backbutton.y = 200;

  if(mousePressedOver(backbutton)){
    gameState = LOBBY;
    
    score = 0;
    time = 30;
    redcross = 0;
    
    backbutton.x = 40;
    backbutton.y = 50;
  }

  
}

function retryf (){
  score = 0;
  redcross = 0;
  time = 30;

  retry.visible = false;

  cross1.addImage(grayXImg);
  cross2.addImage(grayXImg);
  cross3.addImage(grayXImg);
}

function onelifef (){
  threeBomb.visible = false;
  oneLife.visible = false;
  bombAndTimer.visible = false;
  backbutton.visible = false ;

  if(bombGroup.isTouching(knife)){
    lifeone = lifeone + 1;
    bombGroup.destroyEach();
  }

  if(lifeone === 0) 
  {
    fruits ();
    bombF();
    knifef();
    chopper ()
  }

  if(lifeone === 1){
    end();

    if(mousePressedOver(retry)){  
      lifeone = lifeone - 1;
      retryf();
    }

  }

}

function minusten(){
  threeBomb.visible = false;
  oneLife.visible = false;
  bombAndTimer.visible = false;
  backbutton.visible = false ;

  if(bombGroup.isTouching(knife))
  {
    bombGroup.destroyEach();
    score = score - 10;
  }

  if(time > 0.1){
    fruits ();
    bombF();
    knifef();
    chopper ();

    time = time - 0.05;
  }

  if(time < 0.1)
  {
    end();

    if(mousePressedOver(retry))
    {
      retryf();
    }
  }
  
}
