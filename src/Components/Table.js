import React from 'react'
import { useEffect } from 'react'
import * as Service from '../services'
import { useState } from 'react'
import vector from '../assets/Vector.png'

function Table() {
  const [data, setData] = useState([])
  const [options, setOptions] = useState(false)
  const [newData, setNewData] = useState([])
  const [search, setSearch] = useState([])

  useEffect(() => {
    Service.getData().then(data => {
      if(data) {
        setData(data.value.hiringTest)
        localStorage.setItem('data', JSON.stringify(data.value.hiringTest))
        var dataGroup = []
        data.value.hiringTest.forEach(item => {
          dataGroup.push({
            select: false,
            name : item.name,
            category : item.category,
            availability : item.availability,
            arrival_status : item.arrival_status,
            id: item._id
          })
        })
      
        setNewData(dataGroup)
      } else {
        setData([])
      }
      
    })

  }, [])

  function searchgroup (data) {
    let search = []
    data.forEach(item => {
      if (item.select) {
        search.push(item)
      }
    })

    setSearch(search.length)
    if (search.length === 0) {
      setOptions(false)
    }
  }

  const onChangeInput = (e) => {
    setOptions(true)
    let value = e.target.checked
    setNewData(newData.map(item => {
      item.select = value
      return item
    }))

    searchgroup(newData)
  }
    
  const onChangeRow = (e , id) => {
    let value = e.target.checked
    if (value) {
      setOptions(true)
      setNewData(newData.map(item => {
        if (item.id === id) {
          item.select = value
        }
        return item
      }))
    } else {
      setNewData(newData.map(item => {
        if (item.id === id) {
          item.select = value
        }
        return item
      }))
    }
    searchgroup(newData)
    
  }

  const handleInput = () => {
  let ids = []
  newData.forEach(item => {
    if (item.select) {
      ids.push(item.id)
    }
  })

  ids.map(id => {
    Service.deleteData(id).then(data => {
      if (data.m === 'Done') {
        window.location.reload()
      }
    })
  })

  setOptions(false)
  }

  let selectedOption
  if (options) {
    selectedOption = (
      <div className='options-popup'>
        <p className='close-popup' onClick={() => setOptions(false)}>&times;</p>
        <span>{search} Table Selected</span>
        <button className='arrive'> <img src={vector} /> Mark as Arrived</button>
        <button onClick={handleInput}>Delete Table</button>
      </div>
    )
  }

  return (
    <div className='table-content'>
        <table className='table-header'>
            <thead className='table-header-item'>
              <tr>
                <th><input type='checkbox' onChange={onChangeInput}></input></th>
                <th>Name</th>
                <th>Category</th>
                <th>Availability</th>
                <th>Arrival</th>
              </tr>
            </thead>
            <tbody>
            {newData.map((item, index) => {
              return (
                <tr className='table-body-item' key={index}>
                  <td><input type='checkbox'checked={item.select} onChange={e => onChangeRow(e, item.id)}/></td>
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