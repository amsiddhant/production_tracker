import React, { useState } from "react";
import Parent from "./Parent";
import Total from "./Total";

const Child = () => {
    const [first, setFirst] = useState("");
  const [state, setState] = useState({
      result:""
  });

  const handleChange = () => {
    setState({
        result : parseInt(first) * 2});
  };

  return (
    <div className='App'>
      <Total {...state} />
      <div className='column'>
      <div className='card acc'>
        <h3>Account</h3>
        <input
          type='number'
          onChange={(e) => setFirst(e.target.value)}
          onKeyUp={handleChange}></input>
       <p>{state.result}%</p>
      </div>
    </div>
      <button onClick={handleChange}>Change Profile</button>
    </div>
  );
};

export default Child;
