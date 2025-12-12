//  Data stored in two ways in javascript 
// 1: Using Object curly braces : {   }
// 2.Function COnstructor : function Person(){  }
// 3.Using New keyword : new Object()
// let mobile={  }

// 4.Nested Object - Object inside object
// EX  :: let rohit={  }
// =================================================================

let sport={
    Cricket:{
        pname:"rohit sharma",
        jersyNo:45,
        role:"batsman"
    },
    Football:{
        pname:"ronaldo",
        jersyNo:7,
        role:"striker"
    } ,
    Tennis:{
        pname:"Roger Federer",
        jersyNo:1,
        role:"All Rounder"
    }  
}
console.log( "===============================================");
console.log(sport);
console.log( "===============================================");
console.log(sport.Cricket);
console.log( "===============================================");
console.log(sport.Football);
console.log( "===============================================");
console.log(sport.Tennis);

console.log( "===============================================");

let car={
    cname:"BMW",
    price:8000000,
    color:"black",
    display:function(){
    console.log("Car name is "+this.cname +"  With Colour  "+this.color+ " and its  Price is "+this.price);
    console.log( "===============================================");

    }
}

console.log(car.cname);
console.log(car.price*2);

car.display();

// =============================================================
//Array , Object Is 'Mutbale' , 'String Is Immutable'
// Object Iteration
// 1.for in loop

for(let key in obj){
    console.log(key ,obj[key]);
}

// Nested Object Iteration
for(let sportname in sport){
    console.log("Sport Name :"+ sportname);
}
// ============================================================

// Object - it is used to store the data in key value pair
// Object Functions


let obj2={
    key1:"value11",
    key2:"value22",
    key3:"value33"
}

console.log(obj);
obj.key1="value44";
console.log(obj);

//iterate a object
// for in loop
for(let key in obj){
    console.log(key,obj[key]);
   
}

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
