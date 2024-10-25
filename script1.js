"use strict";

function calculate(num1,num2,operator){
    let result;
    switch (operator) {
        case "+":
            result=num1+num2 ;
            return result

        case "-":
            result=num1-num2;
            return result
    
        default:
            return "no operation"
    }
}

console.log(calculate(4,5,"+"));

/*const isReverse=(str)=>{
    let reverse="";
    for(let char=0; char<str.length; char++){
        reverse=reverse+str[char]
    }
    return reverse
} 
console.log(isReverse("Aman Awasthi"));

*/

const isStringIndexing=(str)=>{
    let StringIndexing="";
    for(let char=0;char<str.length;char++){
        //console.log(str[char]);
        StringIndexing=StringIndexing+str[char]
    }
    return StringIndexing
}
//isStringIndexing("PAPA LEVEL")
//console.log(isStringIndexing("PAPA LEVEL"));

  
const isReverse=(str)=>{
    let reverse="";
    for(let char=str.length;char>=0;char--){
        console.log(str[char]);
    }
}
console.log(isReverse("SARAS POP MOM"));



const isPalinDrome=(str)=>{
    let palindrom="";
    for(let char=str.length-1;char>=0;char--){
        console.log(str[char]);
        palindrom=palindrom+str[char]
    }
    if(str==palindrom){
        console.log("palindrom");
        
        return true
    }
    else{
        return false
    }
}
console.log(isPalinDrome("SARAS"));


//Array literal

let arrs=["Aman", "Ankita","Goldi"]
console.log(arrs[2]);
console.log(arrs.at(-3 ));

// array constructor

let arr2=new Array(1,2,3,4)
console.log(arr2);


for(let item of arrs){
    console.log(item);
    
}
for(let item=0;item<arrs.length;item++){
    console.log(arrs[item]);
    
}

let fruits=["Apple", "Banana", "Mango", "Banana"]

console.log("forin");
for(let item in fruits){
    
    console.log(fruits[item]);
    
}

console.log("Foreach");
let addArr=new Array()
fruits.forEach((i)=>{
    console.log(i);     
    addArr.unshift(i)
    
})      
console.log("reverse");
console.log(addArr);

for(let j=addArr.length-1; j>=0; j--){
    console.log(addArr[j]);
    
}

const mapArr=fruits.map((currentEle,index,arr)=>{
    return `my fav fruit is ${currentEle}`;
})
document.querySelector(".mapArr ").innerHTML+=`<p>${mapArr}</p>`

// array crud operation

let uname=["Shaisha", "Rohit","Jyoti","Radha","Shubhanshi","Shikhar","Abhay"]

//last element add
let pushOP=uname.push("Rajiv")
console.log(uname);
//last item remove
uname.pop()
console.log(uname);
//first element add or remove
uname.unshift("Roshni ")
console.log(uname);

uname.shift()
console.log(uname);

// splice (start,end, item1,item2,..)
console.log("splice");

uname.splice(1,1,"Ranjit","Amit")
console.log(uname);
   
//8) ['Shaisha', 'Ranjit', 'Amit', 'Jyoti', 'Radha', 'Shubhanshi', 'Shikhar', 'Abhay']
//indexOf, lastindexOf, includes  


