import React from 'react'
import Chart from 'react-apexcharts'
import { useEffect, useState } from 'react'
import * as Service from '../services'


function AvailabilityRatio() {

    const [label , setLabel] = useState()
    const [dataLabels, setDataLabels] = useState([]);
    const [labelsUnique, setLabelsUnique] = useState([]);

    useEffect(() => {
        Service.getData().then(data => {
            if(data) {
                setLabel(data.value.hiringTest)
                const labelCount = data.value.hiringTest.map(item => item.availability)
                let labelCountUnique = [...new Set(labelCount)]
                setDataLabels(labelCountUnique.sort((a, b) => a > b ? 1 : -1))
                setLabelsUnique(labelCountUnique.map(item => labelCount.filter(item2 => item2 === item).length))
            } else {
                setDataLabels([])
            }
        })
    } , [])


    const options = {
      series : labelsUnique,
      colors : ["#295757", "#EF6D3F"],
      labels: dataLabels,
      legend : {
        show : false,
      },
      plotOptions : {
        pie : {
          expandOnClick: false,
          donut : {
            size : '60px',
            labels: {
              show: false,
            }
          }
        }
      }
    }
  return (
    <div className='availability-wrapper'>
        <h3>Availability Ratio</h3>
        <div className='stats-wrapper'>
          <Chart
            options={options}
            series={options.series}
            type='donut'
            width='250px'
            height='250px'
          />
          <div className='chart-labels'>
            <span className='available'></span>
            <p>Available</p>
            <span className='full'></span>
            <p>Full</p>
          </div>
        </div>
    </div>
  )
}

export default AvailabilityRatio