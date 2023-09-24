import {configureStore} from "@reduxjs/toolkit"
import bookSlice from "../features/bookSlice";

const store=configureStore({
    reducer:{
     app:bookSlice,
    }
})

export default store;