import './Counter.css';
import * as React from "react";

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1
        }
        this.handleCount = this.handleCount.bind(this);

    }

    handleCount() {
        this.setState({ count: this.state.count + 1 })
    }

    // state = { count: 0 }; // With ES new gen and Babel

    render() {
        return (
            <>
                <span>Current Count: {this.state.count}</span>
                <section>
                    <button onClick={this.handleCount}>+</button>
                    <button>-</button>
                </section>
            </>
        );
    }
}

export default Counter;

