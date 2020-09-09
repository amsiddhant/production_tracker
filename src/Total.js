import React, { useState, useEffect } from "react";
import Account from "./Account";

const Total = (props) => {
  const [profileState, setProfileState] = useState(props);
  
  
  
  var acc = parseInt(profileState.account)
  var hyd = parseInt(profileState.hydra)
  var thumb = parseInt(profileState.thumb)
  var other = parseInt(profileState.other)
  
 var t = acc+hyd+thumb+other

  useEffect(() => {
    setProfileState(props);
  
  }, [props]);
  return (
    <div className='column' style={{width:"100%"}}>
      <div className='card appeals'>
        <h3>Total</h3>
        <p>{t}%</p>
      </div>
    </div>
  );
};
export default Total;
