import React, { useState,useEffect } from "react";
import Account from "./Account";
const Hydra = (prop) => {


    const [profileState, setProfileState] = useState(prop);

    var thumb = parseInt(profileState.thumb);
  
    var t = thumb;
  
    useEffect(() => {
      setProfileState(prop);
    }, [prop]);




  var dval = 0;
  dval = parseInt(dval);

  const [Hydrafirst, setHydraFirst] = useState("");

  const [state, setState] = useState({
    hydra: dval,
  });

  const handleChange = () => {
    setState({
      hydra: (parseInt(Hydrafirst) / 120) * 100,
      thumb: parseInt(thumb),
    });
  };

  return (
    <div className='App'>
      <div className='column'>
        <div className='widget'>
          <div className='details'>
            <div class='form__group field temperature'>
              <input
                type='number'
                class='form__field'
                placeholder='Name'
                name='name'
                id='name'
                required
                onChange={(e) => setHydraFirst(e.target.value)}
                onKeyUp={handleChange}
              />
              <label for='name' class='form__label'>
                Count
              </label>
            </div>
            <div className='summary'>
              <p className='summaryText'>Hydra T1</p>
            </div>
            <div className='precipitation'>Achieved: {state.hydra}%</div>
            <div className='wind'>Remaining: 25</div>
            <div className='wind windy'>Target: 120</div>
          </div>
        </div>
      </div>

      <Account {...state} />
    </div>
  );
};

export default Hydra;
