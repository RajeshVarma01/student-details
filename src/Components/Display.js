import React from 'react'
import { useSelector } from 'react-redux'

const Display = () => {
    const datas =  useSelector((state)=>state.data.value)
    
  return (
    <div>
      {
        datas.map((data) => {
            return(
                <div>
                <h1>{data.Firstname}</h1>
                <h1>{data.Lastname}</h1>
                <h1>{data.Email}</h1>
                <h1>{data.phNo}</h1>
                <h1>{data.batchNo}</h1>
                </div>
            )
        })
      }
    </div>
  )
  }

export default Display
