"use strict";

let x = null;
let y = undefined;
console.log(x, typeof x);
console.log(y, typeof y);

let myNum = "344.44";
let cnum = parseFloat(myNum);
console.log(typeof cnum, cnum);

console.log(parseInt("$123")); //NAN
console.log(parseInt("-123")); //-123
console.log(parseInt("xyz")); //NAN

console.log(isNaN(22));
console.log(isNaN("22"));
console.log(isNaN("vvfhgv"));

if (NaN === NaN) {
  console.log("both are eq");
} else {
  console.log("not eq");
}
let str = "Hello " + "World";
console.log(str);

// implicit coj=hesian

console.log("5" - 10); //-5
console.log("5" + 10); //510
console.log("5" - 5); //0
console.log(10 - "5"); //5
console.log("" + "");
console.log("Hello " + "World");
console.log("Hello " - "World");
console.log(12 >= 18);

let val = 3;
switch (val) {
  case 1:
    console.log("Mon");
    break;
  case 2:
    console.log("Tue");
    break;

  case 3:
    console.log("Wed");
    break;

  default:
    console.log("Invalid no.");

    break;
}

let year = 2023;
if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
  console.log("Leap year");
} else {
  console.log("this is not leap year");
}

let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}
console.log("do while loop");

let num = 1;
do {
  console.log(num);
  num++;
} while (num == 10);

//table
while(num<=10){
  console.log(` ${5} * ${num}= ${5*num}`);
  num++;
  
}

let userInput;
let positiveNum;

function positiveNumber(){
  
do{
  userInput=prompt("Any positive number :")
  positiveNum=parseFloat(userInput)
}while(isNaN(positiveNum)|| positiveNum<0)
document.write("you entered a positive number", positiveNum)
}

//for(;;){
  //console.log("infinity");
  
//}  /// infinity loop


var sum=0;
for(let i=1; i<=10; i++){
  var sum=sum+i
}
console.log(sum);

let value=12;
let isPrimeNum=true;
for(let i=2; i<value; i++){
  if(value%i==0){
    isPrimeNum=false
    break
}

}
if(isPrimeNum){
  console.log("number is prime");
  
}
else{
  console.log("num is not prime");
  
}

for(let i=1; i<=5; i++){
  var pattern=""
  for(let j=1;j<=i;j++){
    pattern=pattern+="*"
    
  }
  console.log(pattern);
  
}
 