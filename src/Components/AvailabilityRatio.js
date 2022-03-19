import React from 'react'
import Chart from 'react-apexcharts'
import { useEffect, useState } from 'react'


function AvailabilityRatio() {

    const [label , setLabel] = useState()
    const [dataLabels, setDataLabels] = useState([]);
    const [labelsUnique, setLabelsUnique] = useState([]);

    useEffect(() => {
        const label = JSON.parse(localStorage.getItem('data'))
        setLabel(label.map(item => item.availability))
        const labelsCount = label.map(item => item.availability)
        console.log(labelsCount)
        let labelsCountUnique = [...new Set(labelsCount)]
        setDataLabels(labelsCountUnique.sort((a, b) => a > b ? 1 : -1))
        console.log(labelsCountUnique)
        setLabelsUnique(labelsCountUnique.map(item => labelsCount.filter(item2 => item2 === item).length))
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