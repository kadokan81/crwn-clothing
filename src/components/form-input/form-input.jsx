import React from 'react';
import './form-input.scss'

const FormInput = ({handeleChange, label, ...otherProps}) => {
    return ( 
      <div className="group">
          <input type="text" className="form-input" onChange={handeleChange} {...otherProps} />
          {
              label ? 
             ( <label className= {`${otherProps.value.length ? 'shrink' : ''} form-input-label`} >
                {label}
              </label>)
              :null
          }
      </div>
     );
}
 
export default FormInput;