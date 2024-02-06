import { createSlice } from "@reduxjs/toolkit";

export const recipesSlice = createSlice({
    name: 'recipes',
    initialState: {
        value: []
      },
      reducers:{
        load: (state, action) =>{
            state.value = action.payload
        }
      }
})

export const {load} = recipesSlice.actions

export const recipesReducer = recipesSlice.reducer