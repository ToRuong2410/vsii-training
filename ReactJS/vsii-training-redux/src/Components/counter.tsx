// components/Counter.tsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  selectCount,
} from "../Features/Couter/counterSlice";

const Counter: React.FC = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <div>
      <div style={{ display: "flex" }}>
        <button
          className="btn btn-primary"
          onClick={() => dispatch(increment())}
        >
          Tăng
        </button>
        <h2 style={{ margin: "auto 50px" }}>{count}</h2>
        <button
          className="btn btn-primary"
          onClick={() => dispatch(decrement())}
        >
          Giảm
        </button>
      </div>
    </div>
  );
};

export default Counter;
