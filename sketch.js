var Hiren;
var Jayveer;
var Rhea;

function setup(){
createCanvas(600,600);
Hiren = createSprite(300,300,20,20);
Hiren.shapeColor = yellow;
Jayveer = createSprite(200,200,20,20);
Jayveer.shapeColor = orange;
Rhea = createSprite(100,100,20,20);
Rhea.shapeColor = red;
}

function preload(){


}

function draw(){
background("blue");


drawSprites();
}