import React from 'react'

function Table() {
  return (
    <div className='table-content'>
        <div className='table-header'>
            <div className='table-header-item'>
                <input type='checkbox'></input>
                <span>Name</span>
                <span>Category</span>
                <span>Availability</span>
                <span>Arrival</span>
            </div>
            <div className='table-body-item'>
                <input type='checkbox'></input>
                <span>Name</span>
                <span>Category</span>
                <span>Availability</span>
                <span>Arrival</span>
            </div>
        </div>
    </div>
  )
}

export default Table