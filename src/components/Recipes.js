import Recipe from "./Recipe"
import { useSelector } from "react-redux"

export default function Recipes(props){
  const data = useSelector((state) => state.recipes.value);
  const dt = data.filter((element) => element.title.toLowerCase().includes(props.search.toLowerCase()))
      return(
        <div className="recipe-container">
            {dt.length === 0 ? <div className="noRecipes"><p>Sorry, no recipes found</p></div> : dt.map((element) => {
                return(
                    <Recipe image={element.image} title={element.title} id={element.id}/>
                    )
                })}
        </div>
      )
}