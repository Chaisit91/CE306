import React, {useState} from "react";

interface CounterProps{
    initialCount?: number;
}


const Counter: React.FC<CounterProps> =({initialCount = 0}) => {
    const [count,setCount] = useState<number>(initialCount);
    // const [name, setName] = useState<string>('');

    const increment =() => {
        setCount(prevCount => prevCount + 1);
    }
    const decrement =() => {
        setCount(count - 1);
    }
    const resetcrement =() => {
        setCount(0);
    }
    return (
        <div style={{padding:'20px', textAlign : 'center'}}>
            <h2>Counter Exercise - Solution</h2>
            <h1>{count}</h1>
            <div style={{margin: '20px 0' ,display: "flex" , gap :'15px' , justifyContent :"center"}}>
                <button onClick = {increment} style={{backgroundColor : '#259e1aff'}}>+ เพิ่ม</button>
                <button onClick = {decrement}style={{backgroundColor:'rgba(255, 11, 11, 0.99)'}}>- ลด</button>
                <button onClick = {resetcrement}style={{backgroundColor: 'rgba(238, 88, 1, 1)'}}>Reset</button>
            </div>

            {/* <h2>Your Name : {name}</h2> */}
            {/* <input type="text" value={name} onChange={(e) => setName(e.target.value)} /> */}
            
        </div>
    )
}
export default Counter;

