import{ useEffect, useState } from 'react';

export default function UseEffect(){
    const [qn,setQN]=useState(1);
    const [price,setPrice]=useState(1000);
    const pr=1000;
    useEffect(()=>{
        setPrice(pr*qn);
    },[qn]);

     return<>
        <h1>Cart Page(UseEffect)</h1>
        <button className='bg-black text-amber-50 w-7' onClick={()=>{setQN(qn+1)}}>+</button>
        <b className='mx-5'>{qn} </b>

        <button className='bg-black text-amber-50 w-7' onClick={()=>{ if (qn<=0) { alert("Cart Is Empty")}else{setQN(qn-1)}}}>-</button>
        <h1>Price: {price}</h1>
    </>
}
