

var myCar2 = {

    maxSpeed: 70, 
    driver: "netninja ",
    drive:function(speed, time){console.log(speed * time);
    },
    logDriver: function(){
        console.log("Driver name is " + this.driver);
    }

 };

myCar2.logDriver()
console.log(myCar2.maxSpeed);
myCar2.drive(50, 3)






