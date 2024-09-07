import { Component } from "react";

export class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: props.initialValue,
    };
  }

  increase = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  };

  componentDidMount() {
    // do something
  }

  componentDidUpdate() {
    // do something
  }

  shouldComponentUpdate(prevState, nextState) {
    return prevState.initialValue !== nextState.initialValue;
  }

  getSnapshotBeforeUpdate() {}

  render() {
    return (
      <div>
        <h3>Counter: {this.state.counter}</h3>
        <button onClick={this.increase}>Increase class</button>
      </div>
    );
  }
}
