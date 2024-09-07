import { useEffect, useState } from "react";

export const CounterFunc = (props) => {
  const [counter, setCounter] = useState(props.initialValue);

  const increase = () => {
    setCounter((prevState) => prevState + 1);
  };

  useEffect(() => {
    // do something
  }, [props.initialValue]);

  return (
    <div>
      <h3>Counter: {counter}</h3>
      <button onClick={increase}>Increase func</button>
    </div>
  );
};
