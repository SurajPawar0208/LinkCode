export default function PropsDriling() {
    let a=20;

  return <F1 n={a}/>
}
function F1(props){
    return  <F2 n={props.n}/>
}
function F2(props){
    return <F3 n={props.n}/>
}   
function F3(props){
    return <h1>Hello Guys {props.n}</h1>
}