//declaring constants
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

//declaring variables
var engine,world;
var Bg1Image, Bg2Image;
var mainBg;
var Score = 0;
var security, system;
//declaring variables for making a bridge
var br1, br2, br3, br4, br5, br6, br7, br8, br9, br10;
var cn1, cn2, cn3, cn4, cn5, cn6, cn7, cn8, cn9, cn10;

const accessCode1 = "FOOD";
const accessCode2 = "BED";
const accessCode3 = "SPACE";

function preload(){
   Bg1Image = loadImage("adventure1Img.jpg");
   Bg2Image = loadImage("treasureBridge1.jpg");
}

function setup(){
    createCanvas(1270, 567);
    engine = Engine.create();
    world = engine.world;

    security = new Security();
    system = new System();
}

function draw(){
    //section background
    if(Score < 3){
    mainBg = Bg1Image;
    }
    else if(Score === 3){
    mainBg = Bg2Image;
    br1 = new bridge(width/2, height/2, 80, 80);
    br1.print();
    }

    background(mainBg);

    //other
    Engine.update(engine);
    drawSprites();

    //display
    hints();
    security.display();
}

function hints(){

    //clue 1
    if(Score < 3){
    textSize(40);
    fill("black");
    text("O F D O", 120, 95);
    //hint
    textSize(35);
    fill("white");
    text("Which fill our stomach!", 120, 145);


    //clue 2
    textSize(40);
    fill("black");
    text("D B E", 762, 95);
    //hint
    textSize(35);
    fill("white");
    text("where you sleep!", 762, 145);


    //clue 3
    textSize(40);
    fill("black");
    text("E C S A P", 762, 370);
    //hint
    textSize(35);
    fill("white");
    text("where there is nothing!", 762, 420);

    return true;
    }
    else{
    return false;
    }


}