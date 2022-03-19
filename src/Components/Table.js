import React from 'react'
import { useEffect } from 'react'
import * as Service from '../services'
import { useState } from 'react'

function Table() {
  const [data, setData] = useState([])
  const [options, setOptions] = useState(false)
  const [newData, setNewData] = useState([])

  useEffect(() => {
    Service.getData().then(data => {
      if(data) {
        setData(data.value.hiringTest)
        localStorage.setItem('data', JSON.stringify(data.value.hiringTest))
      } else {
        setData([])
      }
    })
      var dataGroup = []
      data.forEach(item => {
        dataGroup.push({
            select : false,
            name : item.name,
            category : item.category,
            availability : item.availability,
            arrival_status : item.arrival_status,
          })
      })
    
      setNewData(dataGroup)
    }, [])

    console.log(newData)

  const handleInput = (e) => {
    let ids = []
    data.forEach(item => {
      ids.push(item._id)
    })

    // console.log(ids)
  }

  let selectedOption
  if (options) {
    selectedOption = (
      <div className='options-popup'>
        <p className='close-popup' onClick={() => setOptions(false)}>&times;</p>
        <span>1 Table Selected</span>
        <button className='arrive' onClick={handleInput}>Mark as Arrived</button>
        <button>Delete Table</button>
      </div>
    )
  }

  return (
    <div className='table-content'>
        <table className='table-header'>
            <thead className='table-header-item'>
              <tr>
                <th><input type='checkbox'></input></th>
                <th>Name</th>
                <th>Category</th>
                <th>Availability</th>
                <th>Arrival</th>
              </tr>
            </thead>
            <tbody>
            {data.map((item, index) => {
              return (
                <tr className='table-body-item' key={index}>
                  <td><input type='checkbox'/></td>
                  <td>{item.name}</td>
                  <td>{item.category}</td>
                  <td>{item.availability}</td>
                  <td>{item.arrival_status}</td>
                </tr>
              )
            })}
            </tbody>
        </table>
        { selectedOption }
    </div>
  )
}

export default Table