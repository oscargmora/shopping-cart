import {  useState } from "react";

export const Counter = () => {
    const [counter, setCounter] = useState(1);

    const incrementCounter = () => {
        setCounter((num) => {
            num += 1
            return num
        })
    }

    const decrementCounter = () => {
        setCounter((num) => {
            if (num <= 0) return num
            num -= 1
            return num
        })
    }

    return (
        <div>
            <button onClick={decrementCounter}>-</button>
            <div>{counter}</div>
            <button onClick={incrementCounter}>+</button>
        </div>
    )
}