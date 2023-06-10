import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addStudent } from '../features/studentSlice'
import Display from './Display'

const AddStudent = () => {


const[data, setData] = useState({Firstname:'', Lastname:'', Email:'', phNo:'',batchNo:''})


const dispatch = useDispatch() 
const datas = useSelector((state)=> state.data.value)

const handleChange = (e)=>{
    setData({...data,[e.target.name]:e.target.value})
    // console.log(data,'form values after change')
}

const addStud = ()=>{
    dispatch(addStudent({id:datas.length+1,...data}))
    console.log(datas,"this is datas")
}
  return (
    <div>
    <input onChange={handleChange} name='Firstname' value={data.Firstname} placeholder='Firstname'/>
    <input onChange={handleChange} name='Lastname' value={data.Lastname} placeholder='Lastname'/>
    <input onChange={handleChange} name='Email' value={data.Email} placeholder='Email'/>
    <input onChange={handleChange} name='phNo' value={data.phNo} placeholder='PhoneNo'/>
    <input onChange={handleChange} name='batchNo' value={data.batchNo} placeholder='BatchNo'/>
    <button onClick={addStud}>ADD</button>
    <Display/>
    </div>
  )
}

export default AddStudent
