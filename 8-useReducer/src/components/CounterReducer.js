import { useReducer } from 'react';

function Counter() {

    const counterReducer = (state, action) => {
        switch (action) {
            case "INCREMENT":
                return state + 1;
            case "DECREMENT":
                return state - 1;
            case "RESET":
                return 0;
            default:
                return state;
        }
    };
    const [count, dispatch] = useReducer(counterReducer, 0);


    return (
        <section>
            <h2>Count:{count}</h2>
            <button onClick={() => dispatch("INCREMENT")}>+</button>
            <button onClick={() => dispatch("DECREMENT")}>-</button>
            <button onClick={() => dispatch("RESET")}>Reset</button>
        </section>
    );
}

export default Counter;
