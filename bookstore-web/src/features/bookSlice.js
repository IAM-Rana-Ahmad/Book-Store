import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import axios  from "axios"



export const getData = createAsyncThunk("getData", async () => {
    try {
      const response = await axios.get(
        "https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=AIzaSyCeX5xWc2DHOyWvyeW3dUrxY7WVxKh4Rpw");
        console.log(response)
      return response.data.items;
    } catch (error) {
      console.error("Error", error);
      throw error;
    }
  });


  export const bookData = createSlice({
    name: "bookapp",
    initialState: {
      data: [], 
      cartData: [],
      wishList: [],
      loading: false,
      error: null,
      Info:[],
      searchQuery:""
    },
    reducers: {
        addItem:(state,action)=>{
            state.Info=action.payload;
        },
        addCartItem:(state,action)=>{
            state.cartData.push(action.payload)
        },
        removeCart:(state,action)=>{
            state.cartData = state.cartData.filter(item => item.id !== action.payload);
        },
        setSearchQuery: (state, action) => {
            state.searchQuery = action.payload;
          },
    },
    extraReducers: {
      [getData.pending]: (state) => {
        state.loading = true;
        state.error = null;
      },
      [getData.fulfilled]: (state, action) => {
        state.data = action.payload;
        state.loading = false;
        state.error = null;
      },
      [getData.rejected]: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
    },
  });

  
  
  
  
  
  

  export const { addItem, addCartItem, removeCart, setSearchQuery} = bookData.actions;
export default bookData.reducer
