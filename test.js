//current date
/*
var myDate = new Date();
console.log(myDate);
*/

// Future and past date

/*
var myPastDate = new Date(1545, 11 ,2, 10, 30, 15);
var myFutureDate = new Date(2515, 0, 31, 10, 30, 15)

console.log(myPastDate)
console.log(myFutureDate)
*/


var birthday = new Date(1991, 2, 25, 11, 15, 25)


//get the month of the date (0-11)
console.log(birthday.getMonth())

//get the full year(YYYY)
console.log(birthday.getFullYear())

//get the date of the month(1-31)
console.log(birthday.getDate())

//get the day of the week(0,6)
console.log(birthday.getDay())

//get the hour of the date(0-23)
console.log(birthday.getHours())

//get the number of miliseconds since 1st Jan 1970
console.log(birthday.getTime())