import React, { useContext } from "react";
import { store } from "./test2";

export default function Test() {
  const globalState = useContext(store);
  const { dispatch } = globalState;
  console.log(globalState); // this will return { color: red }
  // return <button onClick={()=>dispatch({ type: 'help' })}></button>
}
