const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var time;
var times;
var AM=0,PM=1;
var timeline,timings;

var bg = "sunrise1.png";

function preload() {
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    if(backgroundImg){
        background(backgroundImg);
    }

    Engine.update(engine);

    // write code to display time in correct format here
    textSize(30);
    timeline = text("Time : "+timings+time,100,100);

    if(hour<12){
        times = "AM";
    }
    else{
        times = "PM";
    }

}

async function getBackgroundImg(){

    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=06 && hour<=19){
        bg = "sunrise1.png";
    }
    else{
        bg = "sunset12.png";
    }
    timings = datetime.slice(11,13);
    console.log(hour);
    if( timings > 12){
        timings = timings-12;
    }   

    backgroundImg = loadImage(bg);
    time = times;
    //if(hour<12){
      //  console.log("bye");
        //time = AM;
    //}
    //else{
        //console.log("hi");
        //time = PM;
    //}
    console.log(time);
}
