import "./Demo.css"
import a from './assets/SpiderMan.jpg'

export default function Demo(){

    let mystyle={
        color:"pink"
    }
    return <>
    <img src={a}/>

    <h1 style={{color:"Red", background:"Yellow"}}>Demo Function</h1>

    <h2 style={mystyle}>Internal CSS</h2>
    <div className="box"></div>
</>
}

