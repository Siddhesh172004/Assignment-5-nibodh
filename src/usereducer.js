import React, { useReducer, useEffect } from "react";
const reducer = (state, action) => {
  if (action.type === "incr") {
    return (state = state + 1);
  }
  if (state > 0 && action.type === "decr") {
    return (state = state - 1);
  }
  return state;
};

// main reducer function
const Usereducerr = () => {
  const [state, dispatch] = useReducer(reducer, 0);
  useEffect(() => {
        document.title = "Chats("+state+")";
  });

  return (
    <>
      <div className="container">
        <h2>{state}</h2>
        <button
          onClick={() => {
            dispatch({ type: "incr" });
          }}
        >
          INCR
        </button>
        <button
          onClick={() => {
            dispatch({ type: "decr" });
          }}
        >
          DECR
        </button>
      </div>
    </>
  );
};

export default Usereducerr;
