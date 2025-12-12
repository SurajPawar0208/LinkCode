// // it is used store homogenous as well as hetreogenous type of values
// // dynamiclly
// // mutable in nature
// let arr1=new Array();
// arr1[0]="hi"
// arr1[1]="byy"
// console.log(arr1);

// let arr2=[1,2,3,4,5];
// console.log(arr2);
// arr2[0]=90;
// //1.normal for loop
// // for(let i=0;i<arr2.length;i++){
// //     console.log(arr2[i]);
   

// // 2.for of loop
// for(let a of arr2){
//     console.log(a);
   
// }

// // 3.for each loop
// // functional progamming - function works like loop
// arr2.forEach((val,index,arr)=>{console.log(val,index,arr);})



// let tarr=[[1,2,[3,4,5],[7,8]],[[9,10,[11,22],[23,24]]],[33,44]];
// [9,10,[11,22],[23,24]]
// console.log(tarr[1][0][3][1]);//24
// console.log(tarr[1][0][1]); //10
// console.log(tarr[1][0][2][0])// 11
// console.log(tarr[1][0][0])// 9
// console.log(tarr[2][1])// 44
// console.log(tarr[0][3][1])// 8


// // object - is is used to store the data
// let mobiles=[{
//     cname:"samsung",
//     desc:"samsung 16 pro max",
//     price:16000

// },{
//     cname:"iphone",
//     desc:"iphone 17 pro max",
//     price:160000

// },{
//     cname:"one plus",
//     desc:"oneplus 16 pro max",
//     price:36000

// },{
//     cname:"redmi",
//     desc:"16 pro max",
//     price:13000

// }]


// mobiles.forEach((val)=>{console.log(val.cname+"="+val.price);
// })


// // console.log(mobiles[0].cname);


// // console.log(typeof mobile);
// // console.log(mobile.cname);
// // console.log(mobile.price*2);

// //================================================================================================

// // functional progamming -

// // map , filter , reduce,forEach

let arr=[1,2,3,4,5,6];

// // map - it is used to transform the data from one array to another array after iterating
// // original array will not be changed
// // it returns new array
arr=arr.map(val=> val*3);
console.log(arr);
// Odd numbers
arr=arr.filter(val=> val%2!=0);
console.log(arr);

let mul=arr.reduce((acc,cur)=> acc*cur);
console.log(mul);

// =================================================");
// Object - it is used to store the data in key value pair
// Object Functions


let obj2={
    key1:"value11",
    key2:"value22",
    key3:"value33"
}

// console.log(obj);
// obj.key1="value44";
// console.log(obj);

//iterate a object
// for in loop
// for(let key in obj){
//     console.log(key,obj[key]);
   
// }

let obj={
    keys1:"value1",
    keys2:"value2",
    keys3:"value3"
}
Object.freeze(obj);  //we cant change the object after freezing
Object.seal(obj);    // we can change the object but cant add new key value pair
console.log(obj);


console.log(Object.keys(obj));  // it returns array of keys 
console.log(Object.values(obj));  // it returns array of values
console.log(Object.entries(obj));// it returns array of array of key value pairs

let obj1={
    keys4:"value4",
    keys5:"value5"
}

Object.assign(obj,obj1); // it is used to merge two objects
console.log(obj);

// ===============================================");








