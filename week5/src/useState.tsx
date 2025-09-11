import React, {useState} from "react";

interface CounterProps{
    initialCount?: number;
}


const Counter: React.FC<CounterProps> =({initialCount = 0}) => {
    const [count,setCount] = useState<number>(initialCount);

    const increment =() => {
        setCount(prevCount => prevCount + 1);
    }
    const decrement =() => {
        setCount(count - 1);
    }
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick = {increment}>increment</button>
            <button onClick = {decrement}>decrement</button>
        </div>
    )
}
export default Counter;
