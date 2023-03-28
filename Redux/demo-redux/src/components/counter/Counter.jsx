import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../app/actions/counterActions";

// mounting
// updating
// unmounting
function Counter() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  // const [count, setCount] = useState(10);

  const HandleDecrement = () => {
    dispatch(decrement());
  };

  const HandleIncrement = () => {
    dispatch(increment());
  };

  return (
    <div>
      <h1>Counter : {counter}</h1>
      <button onClick={HandleDecrement}>Giảm</button>
      <button onClick={HandleIncrement}>Tăng</button>

      {console.log("render")}
    </div>
  );
}

export default Counter;
