import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deposite, withdrow } from "./rtk/action/bank-action";
import Product from "./componants/Products";

export default function App() {
  const state = useSelector((state) => state.bank);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <p>Your Acount Balanc : {state} </p>
      <button
        onClick={() => {
          dispatch(withdrow(100));
        }}
      >
        With Drow
      </button>

      <button
        onClick={() => {
          dispatch(deposite(100));
        }}
      >
        deposite
      </button>

      <Product />
    </div>
  );
}
