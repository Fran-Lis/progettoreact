import { useDispatch } from "react-redux";
import { change } from "../store/slices/searchSlice";

export default function SearchBar(){
    const dispatch = useDispatch();

    return(
        <div className="search-bar-container">
            <h1>Vegetarian Recipes</h1>
            <input className="search-bar" type="text" onChange={(e) => dispatch(change(e.target.value))} placeholder="Search..."/>
        </div>
    )
}