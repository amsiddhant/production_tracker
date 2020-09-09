import React, { useState } from "react";
import Parent from "./Parent";
import Total from "./Total";

const Child1 = () => {
    const [first, setFirst] = useState("");
  const [state, setState] = useState({
      result1:""
  });

  const handleChange = () => {
    setState({
        result1 : parseInt(first) * 2});
  };

  return (
    <div className='App'>
      <Total {...state} />
      <div className='column'>
      <div className='card acc'>
        <h3>Hydra</h3>
        <input
          type='number'
          onChange={(e) => setFirst(e.target.value)}
          onKeyUp={handleChange}></input>
       <p>{state.result1}%</p>
      </div>
    </div>
      <button onClick={handleChange}>Change Profile</button>
    </div>
  );
};

export default Child1;
