import Recipe from "./Recipe"
import { useSelector } from "react-redux"

export default function Recipes(){
  const data = useSelector((state) => state.recipes.value);
      return(
        <div className="recipe-container">
            {data.length === 0 ? <div className="noRecipes"><p>Sorry, no recipes found</p></div> : data.map((element) => {
                return(
                    <Recipe image={element.image} title={element.title} id={element.id}/>
                    )
                })}
        </div>
      )
}