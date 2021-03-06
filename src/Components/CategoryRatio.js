import React, { useEffect } from 'react'
import Chart from 'react-apexcharts'
import { useState } from 'react'
import * as Service from '../services'

function CategoryRatio(props) {

    const [label , setLabel] = useState()
    const [dataCategory , setDataCategory] = useState([]);
    const [categoryUnique, setCategoryUnique] = useState([]);
    const [category, setCategory] = useState([]);

    useEffect(() => {
        Service.getData().then(data => {
            if(data) {
                setCategory(data.value.hiringTest)
                const categoryCount = data.value.hiringTest.map(item => item.category)
                let categoryCountUnique = [...new Set(categoryCount)]
                setDataCategory(categoryCountUnique.sort((a, b) => a > b ? 1 : -1))
                setCategoryUnique(categoryCountUnique.map(item => categoryCount.filter(item2 => item2 === item).length))
            } else {
                setDataCategory([])
            }
        })
    } , [])

    const options = {
        series : [{
            name : 'Category',
            data : categoryUnique
        }],
        colors : "#EF6D3F",
        labels: dataCategory,
    }

    

  return (
    <div className='category-wrapper'>
        <h3> Category Ratio </h3>
        <div className='stats-wrapper'>
            {dataCategory.map((item, index) => {
                return (
                    <div key={index} className='stats-item'>
                        {/* <span className='category-count'>{categoryCountUniqueCount[index]}</span>
                        <p>{item}</p> */}
                         <div className='stats-item-content'>
                            <div className='stats-item-title'>
                                <span> {item} </span>
                                <h4> {categoryUnique[index]} </h4>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
        <div className='chart-wrapper'>
            <Chart
            type='bar'
            width='100%'
            height='100%'
            series={options.series}
            options={options}
            />
        </div>
    </div>
  )
}

export default CategoryRatio