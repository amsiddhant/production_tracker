import React, { useState, useEffect } from "react";
import Total from "./Total";
import DoughnutChart from "./Chart";
const Account = (props) => {
  const [profileState, setProfileState] = useState(props);

  var hyd = parseInt(profileState.hydra);
  var thumb = parseInt(profileState.thumb);

  var t = hyd;

  useEffect(() => {
    setProfileState(props);
  }, [props]);

  var dval1 = 0;
  let dval = parseInt(dval1);
  const [first, setFirst] = useState("");
  const [Hydrafirst, setHydraFirst] = useState("");
  const [Thumbfirst, setThumbFirst] = useState("");
  const [Other, setOther] = useState("");
  const [Target, setTarget] = useState("");
  const [state, setState] = useState({
    account: dval,
    hydra: dval,
    thumb: dval,
    other:dval,
    tot: dval,
  });

  const handleChange = () => {
    setState({
      account: parseInt(first) * 2,
      hydra: parseInt((parseInt(Hydrafirst) / 120) * 100),
      // thumb: parseInt(thumb)
      thumb: parseInt((parseInt(Thumbfirst) / 400) * 100),
      other:parseInt((parseInt(Other)/Target)*100),
      
      tot:
        (100 -
          (parseInt(first) * 2 +
            (parseInt(Hydrafirst) / 120) * 100 +
            (parseInt(Thumbfirst) / 400) * 100)) *
        0.01 *
        50,
    });
  };

  var sum =
    parseInt(first) * 2 +
    (parseInt(Hydrafirst) / 120) * 100 +
    (parseInt(Thumbfirst) / 400) * 100+
    (parseInt(Other)/Target)*100;
  var rem = 100 - sum;
  var accRem = parseInt(rem * 0.01 * 50);
  var hydRem = parseInt(rem * 0.01 * 120);
  var thumRem = parseInt(rem * 0.01 * 400);
  var othRem = parseInt(rem * 0.01 * Target);

  return (
    <div className='App'>
      <div className='column'>
        {/* <div className='column'>
        <div className='card acc group'>
          <h3>Account</h3>
          <input
            type='number'
            className='count'
            onChange={(e) => setFirst(e.target.value)}
            onKeyUp={handleChange}></input>
          <span class='bar'></span>
          <p>{state.account}%</p>
        </div>
      </div> */}

        <div className='widget'>
          <div className='details'>
            <div className='form__group field temperature'>
              <input
                type='number'
                className='form__field'
                placeholder='Name'
                name='name'
                id='name'
                required
                onChange={(e) => setFirst(e.target.value)}
                onKeyUp={handleChange}
                
                
                
              />
              <label for='name' className='form__label'>
                Count
              </label>
            </div>
            <div className='summary'>
              <p className='summaryText'>Account</p>
            </div>
            <div className='precipitation'>Achieved: {state.account}%</div>
            <div className='wind'>Remaining: {accRem}</div>
            <div className='wind windy'>Target: 50</div>
          </div>
        </div>
      </div>

      <div className='column'>
        <div className='widget'>
          <div className='details'>
            <div className='form__group field temperature'>
              <input
                type='number'
                className='form__field'
                placeholder='Name'
                name='name'
                id='name'
                required
                onChange={(e) => setHydraFirst(e.target.value)}
                onKeyUp={handleChange}
              />
              <label for='name' className='form__label'>
                Count
              </label>
            </div>
            <div className='summary'>
              <p className='summaryText'>Hydra T1</p>
            </div>
            <div className='precipitation'>Achieved: {state.hydra}%</div>
            <div className='wind'>Remaining: {hydRem}</div>
            <div className='wind windy'>Target: 120</div>
          </div>
        </div>
      </div>

      <div className='column'>
        <div className='widget'>
          <div className='details'>
            <div className='form__group field temperature'>
              <input
                type='number'
                className='form__field'
                placeholder='Name'
                name='name'
                id='name'
                required
                onChange={(e) => setThumbFirst(e.target.value)}
                onKeyUp={handleChange}
              />
              <label for='name' className='form__label'>
                Count
              </label>
            </div>
            <div className='summary'>
              <p className='summaryText'>Thumbnail</p>
            </div>
            <div className='precipitation'>Achieved: {state.thumb}%</div>
            <div className='wind'>Remaining: {thumRem}</div>
            <div className='wind windy'>Target: 350</div>
          </div>
        </div>
      </div>

      <div className='column'>
        <div className='widget'>
          <div className='details'>
            <div className='form__group field temperature'>
              <input
                type='number'
                className='form__field'
                placeholder='Name'
                name='name'
                id='name'
                required
                onChange={(e) => setOther(e.target.value)}
                onKeyUp={handleChange}
              />
              <label for='name' className='form__label'>
                Count
              </label>
            </div>
            <div className='summary'>
              <p className='summaryText'>Other</p>
            </div>
            <div className='precipitation'>Achieved: {state.other}%</div>
            <div className='wind'>Remaining: {othRem}</div>
            
            <div className='wind windy' style={{display:"inline-flex"}}>
            <span style={{color:"yellow"}}>Target</span>
            <input
                type='number'
                className='form__field'
                style={{fontSize: 16}}
                placeholder='Target'
                name='name'
                id='name'
                required
                onChange={(e) => setTarget(e.target.value)}
                
              />
              
             </div>
          </div>
        </div>
      </div>

      <Total  />
     
    </div>
  );
};

export default Account;
