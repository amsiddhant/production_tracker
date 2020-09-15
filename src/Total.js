import React, { useState, useEffect } from "react";

const Total = (props) => {


  return (
    <div className='column' style={{width:"100%"}}>
      <div className='card appeals'>
  <span>Total </span>
  <span className='total'>{props.account + props.hydra + props.thumb + props.appeals}%</span>
      </div>
     
    </div>
  );
};
export default Total;
