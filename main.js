var breath = 0;
var beats = 0;
var thoughts = 0;
var blinks = 0;
var age = 0;
var happiness = 100;
var hunger = 0;
var knowledge = 0;
var tiredness = 0;


function breathe(){
    breath++;
    //console.log(breath);
    $('.breaths').html(breath);
    if(breath == 10){
        addBeat();
    }
}

function beat(){
    beats++;
    //console.log(beats);
    $('.beats').html(beats);
    if(beats == 10){
        addThought();
    }
}

function think(){
    thoughts++;
    addTurn();
	knowledge ++;
	$('.know').html(knowledge);
    //console.log(thoughts);
    $('.thoughts').html(thoughts);
    if(thoughts == 1){
    	//transformColor();
        addContent();
    }
    $('.res').prepend(randomThought("baby") + "</br>");
}

function blink(){
    blinks++;
    //console.log(blinks);
    $('.blinks').html(blinks);
}

function sleep(){
	tiredness = Math.max(tiredness -= 0.05, 0);
	$('.tiredness').html(tiredness);
    $('.res').prepend("You slowly close your eyes and sleep. </br>");
}

function laugh(){
	happiness = Math.min(happiness += 0.05, 100);
	$('.happ').html(happiness);
}
/*function work(){
	addTurn();
    $('.res').prepend("Your mother rubs your cheek as you giggle. </br>"); //TODO: change thought
}*/

function cry(){
    happiness = Math.max(happiness -= 0.05, 0);
    $('.happ').html(happiness);
    $('.res').prepend("You begin to wail. Daddy lifts you into his arms.</br>");
}

function eat(){
    hunger = Math.max(hunger -= 0.05, 0);
    $('.hunger').html(hunger);
    $('.res').prepend("You cry a bit and Mommy gives you your bottle.</br>");
}

function randomThought(age){
    if(age == "baby"){
        newthought = babyThoughts[Math.floor(Math.random() * babyThoughts.length)];
        //console.log(newthought);
        return newthought;
    }
}
function addTurn(){
    age += 0.05; //to be balanced
    $('.age').html(age);
    happiness -= 0.05;
    $('.happ').html(happiness);
    hunger += 0.05;
    $('.hunger').html(hunger);
    tiredness += 0.05;
    $('.tiredness').html(tiredness);
}

function addBeat(){
    $('.heart').show();
}

function addThought(){
    $('.brain').show();
}

function addBaby(){
	$('.baby').show();
}

function addContent(){
    $('.stats').show();
    $('.actions').show();
    $('.results').show();
    $('.baby').show();
}
