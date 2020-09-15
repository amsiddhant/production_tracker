import React, { useState, useEffect } from "react";
import "./App.css";
import "./Account";
import Card from "./Components/Card";
import Total from "./Total";

function App() {
  const [account, setAccount] = useState(0);
  const [Hydra, setHydra] = useState(0);
  const [Thumbnail, setThumbnail] = useState(0);
  const [Appeals, setAppeals] = useState(0);
  const [state, setState] = useState({
    account: parseInt(0),
    hydra: parseInt(0),
    thumb: parseInt(0),
    appeals: parseInt(0),
  });


  const handleChange = () => {
    

   
    setState({
      
      account: parseInt(account) * 2,
      hydra: parseInt((parseInt(Hydra) / 120) * 100),
      thumb: parseInt((parseInt(Thumbnail) / 400) * 100),
      appeals: parseInt((parseInt(Appeals) / 90) * 100),
    });
   
  };
  

  var sum =
    parseInt(account) * 2 +
    parseInt((parseInt(Hydra) / 120) * 100) +
    parseInt((parseInt(Thumbnail) / 400) * 100) +
    parseInt((parseInt(Appeals) / 90) * 100);
  var rem = 100 - sum;
  var accRem = parseInt(rem * 0.01 * 50);
  var hydRem = parseInt(rem * 0.01 * 120);
  var thumbRem = parseInt(rem * 0.01 * 400);
  var applRem = parseInt(rem * 0.01 * 90);

  
console.log(state);
  return (
    <div className='row'>
      <Card
        name='Account'
        target='50'
        achieved={parseInt(account) * 2}
        remain={accRem}
        onChange={(e) => setAccount(e.target.value)}
        onKeyUp={handleChange}></Card>
      <Card
        name='Hydra'
        target='120'
        achieved={parseInt((parseInt(Hydra) / 120) * 100)}
        remain={hydRem}
        onChange={(e) => setHydra(e.target.value)}
        onKeyUp={handleChange}></Card>
      <Card
        name='Thumbnail'
        target='400'
        achieved={parseInt((parseInt(Thumbnail) / 400) * 100)}
        remain={thumbRem}
        onChange={(e) => setThumbnail(e.target.value)}
        onKeyUp={handleChange}></Card>
      <Card
        name='Appeals'
        target='90'
        achieved={parseInt((parseInt(Appeals) / 90) * 100)}
        remain={applRem}
        onChange={(e) => setAppeals(e.target.value)}
        onKeyUp={handleChange}></Card>
      <Total {...state}></Total>
    </div>
  );
}

export default App;
