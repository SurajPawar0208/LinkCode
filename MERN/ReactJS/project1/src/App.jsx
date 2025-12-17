import Test from './Test'
import Demo from './Demo'
import Conditional from './Components/Conditional'
import Props from './Components/Props'
import Product from './Components/Product'
import UseState from './Components/Hooks/UseState'
import UseEffect from './Components/Hooks/UseEffect'
import UseRef from './Components/Hooks/UseRef'
import UseContext from './Components/Hooks/UseContext'
import PropsDriling from './Components/Hooks/PropsDriling'
import Home from './Components/Routing/Home'
import Navbar from './Components/Routing/Navbar'
import FileHandle from './Components/FormHandling/FormHandle'

export default function App(){

  // const products = [
  //     {
  //       id: 1,
  //       name: "Laptop",
  //       price: 1200,
  //       description: "High performance laptop",
  //       image: "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/48939256-07cc-56ef-9b7b-8264388b145c/aec8f940-3469-5597-816f-0dd903b3407c.jpg"
  //     },
  //     {
  //       id: 2,
  //       name: "Headphones",
  //       price: 80,
  //       description: "Noise-cancelling headphones",
  //       image: "https://st.perplexity.ai/estatic/0b226c450798410ac541646c86ec31afd840e5beab817a5d84fa821e7db61981ec84c3b4a3f072a7a2e1899c9fb06c6e58b36259180e70449c5ca8b5b53d2a930104d0f4f93896c58e39b87222d6f6f6b7d6d373d706b838a479a7afb95ae575"
  //     },
  //     {
  //       id: 3,
  //       name: "Keyboard",
  //       price: 35,
  //       description: "Mechanical keyboard",
  //       image: "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/4d505e84-9aba-5d2b-a759-714d3bd71907/93c63e83-8c2d-5057-934c-189055abc039.jpg"
  //     },
  //     {
  //       id: 4,
  //       name: "Smartwatch",
  //       price: 150,
  //       description: "Fitness tracking smartwatch",
  //       image: "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/3621c06f-47e6-5cb0-909d-299525fb2e59/4cbaa4b4-65d2-5a5f-bfb2-2f048ee18613.jpg"
  //     }
  //   ];

  return <>
  {/* <div style={{display:"flex",height:"400px",width:"1300px",justifyContent:"space-around"}}>
    {products.map((product) => 
    <Product  p={product}>
      <div>
        
      </div>
    </Product>)}
   </div> */}
   {/* <UseState/> */}
   {/* <UseEffect/> */}
   {/* <UseRef/> */}
   {/* <UseContext/> */}
   {/* <PropsDriling/> */}

   {/* <Home/> */}
   {/* <FileHandle/> */}
   <Navbar/>
  {/* <Props product={products}/> */}
  {/* <Test/>
  <Demo/> */}
  {/* <Conditional/> */}
      </>
}