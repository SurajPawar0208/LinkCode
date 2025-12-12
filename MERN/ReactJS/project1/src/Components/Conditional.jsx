export default function Conditional(){
    let age=30;

    // if(age>18){
    //     return<h1>Eligible FOr Voting</h1>
    // }else{
    //     return <h1>Not Eligible for Voting</h1>
    // }

     return age>18? <Success/>:<Failure/>

}
function Success(){
return<h1>Eligible For Voting</h1>

}

function Failure(){
return <h1>Not Eligible for Voting</h1>
}
