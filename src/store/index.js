import { configureStore } from "@reduxjs/toolkit";
import homeReducer from './modules/home'  //使用toolkit方式
const store = configureStore({
    reducer:{
        home: homeReducer,
        
    }
})


export default store