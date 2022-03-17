import React from 'react';

function Form() {
  return (
    <div className='form-input'>
        <form>
            <div className='form-group'>
                <label>Name</label>
                <input type='text' className='form-control' placeholder='Enter Name' />
            </div>
            <div className='form-group'>
                <label>Category</label>
                <button className='btn form-control'>
                    <span> Select Category </span>
                    <svg width="15" height="10" viewBox="-2.5 -5 75 60" preserveAspectRatio="none">
                    <path d="M0,0 l35,50 l35,-50" fill="none" stroke="black" stroke-linecap="round" stroke-width="5" />
                    </svg>
                </button>
            </div>
        </form>
    </div>
  )
}

export default Form