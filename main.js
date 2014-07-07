var Athlete = function(fatigue, height, weight){
	this.fatigue = fatigue;
	this.height = height;
	this.weight = weight;
	
	this.warmUp = function() {
		console.log('Did a 20 minute warmup.');
	}
};


var Rollerblader = function(fatigue, height, weight, isWearingHelmet, skateType){
	// 2. Invoke the superclass constructor with the required parameters
	Athlete.call(this,fatigue, height, weight);
	this.isWearingHelmet = isWearingHelmet;
	this.skateType = skateType;
};
// 1. Set up inheritance chain
Rollerblader.prototype = new Athlete()
// 3. Set proper constructor
Rollerblader.prototype.constructor = Rollerblader;



var Swimmer = function(fatigue, height, weight, breath){
	// 2. Invoke the superclass constructor with the required parameters
	Athlete.call(this, fatigue, height, weight);
	this.breath = breath;
};
// 1. Set up inheritance chain
Swimmer.prototype = new Athlete()
// 3. Set proper constructor
Swimmer.prototype.constructor = Swimmer;




var jim = new Rollerblader(false, '5ft, 10in', '155lbs', true, 'Fancy')
var mary = new Swimmer(true, '5ft, 4in', '130lbs', '2 mins')
var bill = new Rollerblader(true, '5ft, 10in', '250lbs', false, 'From Goodwill')