//Create variables here
var dog,happyDog,database,foodS,foodStock
var dogImg,happyDogImg
function preload()
{
  //load images here
  dogImg = loadImage ("images/dogImg.png");
  happyDogImg = loadImage ("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  dog =createSprite (250,250,10,10)
  dog.addImage(dogImg)
  dog.scale=0.5
  database=firebase.database();
foodStock=database.ref('food')
foodStock.on("value",readStock)
}


function draw() {  
background(46, 139, 87)

if(keyWentDown(UP_ARROW)){
  writeStock(foodS)
  dog.addImage(happyDogImg)
}

  drawSprites();
  textSize(20)
fill("red")
  text ("Note: Press UP ARROW Key TO Feed The Dog",50,50)
  text("foodStock: "+foodS,50,90)
  }
  function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  if(x<=0){
    x=0
  }else{
    x=x-1
  }

  database.ref('/').update({
    food:x}
  )
}



