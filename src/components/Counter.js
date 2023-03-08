import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const inc = () => {
    dispatch({ type: "INCR" });
  };

  const dec = () => {
    dispatch({ type: "DECR" });
  };

  return (
    <div>
      <h1>Les données : {count}</h1>
      <button onClick={inc}>+ 1</button>
      <button onClick={dec}>- 1</button>
    </div>
  );
};

export default Counter;
