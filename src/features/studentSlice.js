import { createSlice } from "@reduxjs/toolkit";
const studentdata = [
    {id:1, Firstname:'Rajesh', Lastname:'Varma', Email:'raje@212', phNo:12134243, batchNo:1, },
    {id:2, Firstname:'mahesh', Lastname:'maneppaly', Email:'mahesh@232', phNo:9348642643, batchNo:2,},
    {id:3, Firstname:'saad', Lastname:'sheik', Email:'saad@344', phNo:3473674243, batchNo:3,}
]

const studentSlice = createSlice({
    name:'data',
    initialState:{
        value:studentdata
    },
    reducers:{
        addStudent:(state, action) => {
            state.value.push(action.payload)
        }
    }
})

export default studentSlice.reducer

export const{addStudent} = studentSlice.actions