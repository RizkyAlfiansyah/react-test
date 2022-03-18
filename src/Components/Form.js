import React from 'react';
import { useState } from 'react';

function Form({selected , setSelected}) {

    const [dropDown, setDropDown] = useState(false);
    const options = ['Fruits', 'Vegetables', 'Dairy'];
  return (
    <div className='form-input'>
        <form>
            <div className='form-group'>
                <label>Name</label>
                <input type='text' className='form-control' placeholder='Enter Your Name' />
            </div>
            <div className='dropdown'>
                <label>Category</label>
                <a className='btn form-control' onClick={() => setDropDown(!dropDown)}>
                    <span> {selected ? selected : "Select Category"} </span>
                    <svg width="14" height="8" viewBox="-2.5 -5 75 60" preserveAspectRatio="none">
                    <path d="M0,0 l35,50 l35,-50" fill="none" stroke="black" strokeLinecap="round" strokeWidth="5" />
                    </svg>
                </a>
            {dropDown && (<div className='dropdown-content'>
                {options.map((option, key) => (
                        <div 
                        onClick={(e) => 
                        {
                            setSelected(option); 
                            setDropDown(false)
                        }} 
                            key={key} 
                            className='dropdown-items'>
                            {option}
                        </div>   
                ))}
                </div>
            )}
            </div>
            <div className='form-group'>
                <label>Availability</label>
                <div className='form-radio'>
                    <input type='radio' name='availability' value='Available' />
                    <label>Available</label>
                    <input type='radio' name='availability' value='Full' />
                    <label>Full</label>
                </div>
            </div>
            <div className='form-group'>
                <label>Arrival</label>
                <input type='text' className='form-control' placeholder="Value Hasn't Arrival" />
            </div>

            <input type='submit' className='btn btn-submit' value="Submit Form"/>
        </form>
    </div>
  )
}

export default Form