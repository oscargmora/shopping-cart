import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import counterStyles from './counter.module.css';

export const Counter = ({dataId, basket, startingNumber}) => {
    const [counter, setCounter] = useState(startingNumber || 0);

    useEffect(() => {
        const checkIfStartingNumber = () => {
            if (startingNumber) {
                setCounter(startingNumber);
            }
        }

        checkIfStartingNumber();
    }, [startingNumber]);

    useEffect(() => {
        const checkIfExists = () => {
            if (dataId in basket) {
                setCounter(basket[dataId][0]);
            }
        }

        checkIfExists();
    }, [dataId, basket]);

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
        <div className={counterStyles.container}>
            <button onClick={decrementCounter}>-</button>
            <div data-testid="counter">{counter}</div>
            <button onClick={incrementCounter}>+</button>
        </div>
    )
}

Counter.propTypes = {
    dataId: PropTypes.number.isRequired,
    basket: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array,
    ]),
    startingNumber: PropTypes.number,
} 