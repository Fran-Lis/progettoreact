import { configureStore } from "@reduxjs/toolkit";
import { recipesReducer } from "./slices/recipesSlice";

export default configureStore({
    reducer: {
        recipes: recipesReducer,
    }
})