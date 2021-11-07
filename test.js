
/*
var myCar2 = {

    maxSpeed: 70, 
    driver: "netninja ",
    drive:function(speed, time){console.log(speed * time);
    },
    logDriver: function(){
        console.log("Driver name is " + this.driver);
    }

 };
*/

//constructor functions

var Car  = function(maxSpeed,driver){

    this.maxSpeed = maxSpeed;
    this.driver = driver;
    this.drive = function(speed, time){console.log(speed * time);
    };
    this.logDriver =  function(){
        console.log("Driver name is " + this.driver);
    };


 }

var myCar = new Car(80,"Ninja man");
var myCar2 = new Car(70,"Ninja2"); 
var myCar3 = new Car(60,"Ninja woman");
var myCar4 = new Car(40,"Ninja4");

myCar.drive(30,4);
myCar3.logDriver();

 





