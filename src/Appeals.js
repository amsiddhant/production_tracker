import React,{useState} from 'react'

export default function Appeals() {
    const [first, setFirst] = useState("");
    const [result, setResult] = useState("");
  
    function calculator(){
        
  return (
      setResult((parseInt(first)/350)*100)
  )
    }
  
    return (
      <div className='column'>
        <div className='card appeals'>
          <h3>Appeals</h3>
          <input type='number' onChange={(e) => setFirst(e.target.value)} onKeyUp={calculator}></input>
          <p value="0%">{result}%</p>
        </div>
      </div>
    );
  }
