var Sweeper, sweeperImg;
var road, bg;
var obstacle, can1, can2, can3, can4, bottle1, bottle2, BBig1, Bbig2, bigcoronaImg;
var truckImg, drumImg, busImg, barigaterImg, dustbinImg, carImg, sweeperGif;

function preload(){
    sweeperImg= loadImage("sprites/sweeper.png");
    road= loadImage("sprites/road.jpg");
    //track2= loadImage("sprites/track2.jpg");
    BigcoronaImg= loadImage("sprites/big corona.png")
    drumImg= loadImage("sprites/drum.png");
    truckImg= loadImage("sprites/truck.jpg");
    busImg= loadImage("sprites/bus.png");
    barigaterImg= loadImage("sprites/barigater.png");
    dustbinImg= loadImage("sprites/dustbin.png");
    carImg= loadImage("sprites/car.png");
    can1= loadImage("sprites/can1.png");
    can2= loadImage("sprites/can2.png");
    can3= loadImage("sprites/can3.png");
    can4= loadImage("sprites/can4.png");
    bottle1= loadImage("sprites/bottle1.png");
    bottle2= loadImage("sprites/bottle2.png");
    BBig1= loadImage("sprites/BBig1.png");
    BBig2= loadImage("sprites/BBig2.png"); 




}  

function setup(){
    createCanvas(1500,800);

    bg=createSprite(750,400);
    bg.addImage(road);
    bg.scale=4.2

    Sweeper = createSprite(800,400,20,20);
    Sweeper.addImage(sweeperImg);

    obstacle = createSprite(800,400,20,20);
    obstacle.addImage(can1);

    busImg = createSprite(800,400,20,20);
    busImg.addImage(busImg);

    barigaterImg = createSprite(800,400,20,20);
    barigaterImg.addImage(barigaterImg);

    // barigatergif = createSprite(800,400,20,20);
    // barigater.addImage(barigater);

    dustbinImg = createSprite(800,400,20,20);
    dustbinImg.addImage(dustbinImg);

    drumImg = createSprite(800,400,20,20);
    drumImg.addImage(drum.png);

    // sweeperGif = createSprite(800,400,20,20);
    // sweeperGif.addImage(sweeper.png);
}

function draw(){
    background(255);

    drawSprites();
}