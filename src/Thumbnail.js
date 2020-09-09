import React, { useState } from "react";
import Hydra from "./Hydra";

const Thumbnail = () => {
  var dval = 0;
  dval = parseInt(dval);
  const [Thumbfirst, setThumbFirst] = useState("");
  const [state, setState] = useState({
    thumb: dval,
  });

  const handleChange = () => {
    setState({
      //hydra: (parseInt(Hydrafirst) / 120) * 100,
      thumb: (parseInt(Thumbfirst) / 350) * 100,
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
                onChange={(e) => setThumbFirst(e.target.value)}
                onKeyUp={handleChange}
              />
              <label for='name' class='form__label'>
                Count
              </label>
            </div>
            <div className='summary'>
              <p className='summaryText'>Thumbnail</p>
            </div>
            <div className='precipitation'>Achieved: {state.thumb}%</div>
            <div className='wind'>Remaining: 25</div>
            <div className='wind windy'>Target: 350</div>
          </div>
        </div>
      </div>

      <Hydra {...state} />
    </div>
  );
};

export default Thumbnail;
