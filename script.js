/* let output = document.getElementById("output");
let numberDate = document.getElementById("date");

let myDate = new Date();
let myDay = myDate.getDay();
let ndate = myDate.toLocaleString(); // pentru a ne afisa ora locala

switch (myDay) {
  case 0:
    myDay = "Sunday";
    break;
  case 1:
    myDay = "Monday";
    break;
  case 2:
    myDay = "Tuesday";
    break;
  case 3:
    myDay = "Wednesday";
    break;
  case 4:
    myDay = "Thursday";
    break;
  case 5:
    myDay = "Friday";
    break;
  case 6:
    myDay = "Saturday";
    break;
}

output.innerHTML = myDay;
date.innerHTML = ndate;


 */


const outputDay = document.querySelector('#output-day')
const outputDate = document.querySelector('#output-date')

let date = new Date();
console.log(date)
let day = date.getDay()
console.log(day)
let myLocalDate = date.toLocaleString()
console.log(myLocalDate)

switch(day){
    case 0:
        day = "Sunday";
        break;
      case 1:
        day = "Monday";
        break;
      case 2:
        day = "Tuesday";
        break;
      case 3:
        day = "Wednesday";
        break;
      case 4:
        day = "Thursday";
        break;
      case 5:
        day = "Friday";
        break;
      case 6:
        day = "Saturday";
        break;
}

outputDay.innerHTML = day
outputDate.innerHTML = myLocalDate