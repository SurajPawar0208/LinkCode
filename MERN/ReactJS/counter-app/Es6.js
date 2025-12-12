// Math object
let pi=Math.PI;
console.log(pi);
let sqrt=Math.sqrt(81);
console.log(sqrt);
let max=Math.max(12,67,88,99,156);
console.log(max);
let min=Math.min(12,67,88,99,156);
console.log(min);
let ceil=Math.ceil(12.64);
console.log(ceil);
let floor=Math.floor(12.64);
console.log(floor);
let round=Math.round(12.65);
console.log(round);
let random=Math.random();
console.log("Generating OTP.....");

setTimeout(()=>{
console.log(Math.ceil(Math.random()*10000));
},4000)


// Date object/
let date=new Date();
console.log(date.getDate());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getMilliseconds());
console.log(date.getFullYear());
console.log(date.getUTCDate());
console.log(date.getUTCHours());
console.log(date.getMonth());
console.log(date.getDay());

// ==================================================================================================
// ES6 Features
// ==================================================================================================

// 1.template literals  `${}`
// 2.arrow functions -()=>{}
// 3.modules -react JS
// 4.destructuring objects and arrays
// 5.async js -node js
// 6.spread and rest operator  


// 1.destructuring of array
let arr=["red","green","blue","yellow"];//structured array
// let [a,b,c,d]=arr; //destrutured array
// let [a,,,d]=arr
// console.log(d);

// nested array
// let arr1=[1,2,[4,5]];
// let [a,b,[c,d]]=arr1;
// console.log(d);

// destructuring of object
// structured object
let obj={
    name:"geeta",
    mark:89.90
}
 let {name,mark}=obj;
 console.log(name);
 console.log(mark);


 let obj1={
    key1:"val1",
    key2:{
        key3:"val3",
        key4:"val4"
    }
 }

 let {key1,key2:{key3,key4}}=obj1
console.log(key4);

 console.log(obj1.key2.key4);
 