import { useReducer } from 'react';

function Counter() {
    // const [count, setCount] = useState(0);
    const counterReducer = (currState, payload) => {
        switch (payload.type) {
            case "INCREMENT":
                return currState + payload.value;
            case "DECREMENT":
                return currState - payload.value;
            case "RESET":
                return  payload.value;
            default:
                return currState;
        }
    }
    const [count, dispatch] = useReducer(counterReducer, 0)

    return (
        <section>
            <h2>Count:{count}</h2>
            <button onClick={() => { dispatch({type: "INCREMENT", value: 1})}}>+</button>
            <button onClick={() => { dispatch({type: "DECREMENT", value: 1})}}>-</button>
            <button onClick={() => { dispatch({type: "RESET", value: 0})}}>Reset</button>
        </section>
    );
}

export default Counter;
