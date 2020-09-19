import React from "react";
import "./Counter.css";
import { connect, useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "./Actions/CounterActions";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  return (
    <div>
      <h1> Checkpoint React Redux</h1>
      <div className="btn">
        <button className="btnInc" onClick={() => dispatch(increment(3))}>
          +
        </button>
        <p>{counter}</p>
        <button className="btnDec" onClick={() => dispatch(decrement())}>
          -
        </button>
      </div>
      <button className="btnRes" onClick={() => dispatch(reset())}>
        Reset
      </button>
    </div>
  );
};

export default connect()(Counter);
