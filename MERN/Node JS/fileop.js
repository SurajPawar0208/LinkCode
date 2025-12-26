const file=require('fs');

function fileop(){

    // File Operation
    // Non Blocking Io Pattern

    console.log("Start");
    
    // file.writeFileSync('text1.txt', 'This is an example file.'); 

file.writeFileSync("text1.txt","Data Write");         // Sync  ==  it does not contain the third parametr (Arrow Function)`

   
    // file,appendFileSync("text1.txt","\nNew Data Appended",()=>{
    //     console.log("Data Appended");
    // });

    file.readFile("text1.txt","utf-8",(err,data)=>{            // Async  ==  it  contains the third parametr (Arrow Function)
       if(data){ console.log(data);
    }else{
        console.log(err); 
    }
    })

     console.log("End");
}
module.exports=fileop;