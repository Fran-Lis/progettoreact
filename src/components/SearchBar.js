import { useDispatch } from "react-redux";
import { load } from "../store/slices/recipesSlice";
import { useState } from "react";

export default function SearchBar(){
    const dispatch = useDispatch();
    const [search, setSearch] = useState('')
    function recipeSearch(src){
        fetch(`https://api.spoonacular.com/recipes/complexSearch?diet=vegetarian&addRecipeInformation=true&query=${src}`, {
            method: 'GET',
            headers:{
                'x-api-key': process.env.REACT_APP_API_KEY
          }
        })
        .then((res) => res.json())
        .then((data) => {
            dispatch(load(data.results))
            console.log(data.results)
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        recipeSearch(search)
    }

    function handleInput(e){
        setSearch(e.target.value)
        console.log(e.target.value.toString())
    }

    return(
        <div className="search-bar-container">
            <h1>Vegetarian Recipes</h1>
            <form onSubmit={handleSubmit}>
                <input className="search-bar" type="text" onChange={handleInput}/>
                <button type="submit" className="btn">Search</button>
            </form>
        </div>
    )
}
