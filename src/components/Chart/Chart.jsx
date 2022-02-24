import React from 'react'
import ChartBar from './ChartBar'
import './Chart.css'

const Chart = (props) => {

const dataPointValues=props.dataPoints.map(dataPoints => dataPoints.value)
const maxValue=Math.max(...dataPointValues)
  
  return (
      <>
    <div className='chart'>
    {props.dataPoints.map((dataPoints)=>{
      return <ChartBar dataPoints={dataPoints} maxValue={maxValue} key={dataPoints.label}/>
    })}
    
    </div>
    </>
  )
}

export default Chart