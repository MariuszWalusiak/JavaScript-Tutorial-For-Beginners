var myArray = new Array();
myArray[0] = 8;
myArray[1] = "hello";


var myCar = new Object();
myCar.maxSpeed = 50;
myCar.driver = "shaun";
myCar.drive = function(){console.log("now driving");};

console.log(myCar.driver)
myCar.drive();


//shorthand notation
/*
var myCar2 = {

    maxSpeed: 70, 
    driver: "netninja ",
    drive:function(){console.log("now driving again");}

 };

console.log(myCar2.maxSpeed);
myCar2.drive()

*/
var myCar2 = {

    maxSpeed: 70, 
    driver: "netninja ",
    drive:function(speed, time){console.log(speed * time);}

 };

console.log(myCar2.maxSpeed);
myCar2.drive(50, 3)






