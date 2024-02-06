import { configureStore } from "@reduxjs/toolkit";
import { recipesReducer } from "./slices/recipesSlice";
import { searchReducer } from "./slices/searchSlice";

export default configureStore({
    reducer: {
        recipes: recipesReducer,
        search: searchReducer
    }
})