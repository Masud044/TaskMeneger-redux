import { createSlice } from '@reduxjs/toolkit'

 const initialState={
     task:[],
 }

const taskMaster = createSlice({
     name:'taskmaster',
     initialState,
     reducers:{

     }
})

export default taskMaster.reducer