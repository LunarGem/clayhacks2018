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
    //console.log(thoughts);
    $('.thoughts').html(thoughts);
    if(thoughts == 1){
    	//transformColor();
        addContent();
    }
}

function blink(){
    blinks++;
    //console.log(blinks);
    $('.blinks').html(blinks);
}

function sleep(){
	tiredness -= 0.05;
	$('.tiredness').html(tiredness);
}

function laugh(){
	happiness += 0.05;
	$('.happ').html(happiness);
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

function addLaugh(){
	$('.laugh').show();
}
