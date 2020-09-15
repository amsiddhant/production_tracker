import React from "react";
import PropTypes from "prop-types";

function Card(props) {
  return (
    <div className='App'>
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
                onChange={props.onChange}
                required
                onKeyUp={props.onKeyUp}
              />
              <label for='name' className='form__label'>
                Count
              </label>
            </div>
            <div className='summary'>
              <p className='summaryText'>{props.name}</p>
            </div>
            <div className='precipitation'>Achieved: {props.achieved}%</div>
            <div className='wind'>Remaining: {props.remain}</div>
            <div className='wind windy'>Target: {props.target}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {};

export default Card;
