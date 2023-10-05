import {configureStore} from '@reduxjs/toolkit'
 import taskreducer from './feature/task/Taskmaster'

const store = configureStore({

     reducer:{
        tasks: taskreducer,
     },
})
export default store;