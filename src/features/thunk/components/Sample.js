import React from "react";
import { useDispatch } from "react-redux";

import { testThunkAction } from "../actions/test";

const Sample = () => {
  const dispatch = useDispatch();

  return (
    <button
      aria-label="Sample thunk Action"
      onClick={() => dispatch(testThunkAction('argA', 'argB'))}
    >Sample thunk action</button>
  );
}

export default Sample;
