import { useSelector } from "react-redux"
import { useParams, Link } from "react-router-dom"
import Ingredients from "../components/Ingredients"
import Steps from "../components/Steps"
import IngredientsArray from "../functions/ingredientArray"
import stepsArray from "../functions/stepsArray"
import Footer from "../components/Footer"

export default function RecipeDetail(){
    const {recipesID} = useParams()
    const recipe = useSelector((state) => state.recipes.value.filter((el) => {
        return el.id.toString() === recipesID.toString()
    }))

    const ingredients = IngredientsArray(recipe[0].analyzedInstructions[0].steps);
    const steps = stepsArray(recipe[0].analyzedInstructions[0].steps);

    return(
        <>
            <div className="detail-container">
                <div className="btn-container">
                    <Link className="btn" to='/'>Back</Link>
                </div>
                <div className="detail-page">
                    <img src={recipe[0].image} alt=""/>
                    <h2>{recipe[0].title}</h2>
                    <p className="readyTime">Ready in {recipe[0].readyInMinutes} minutes</p>
                    <Ingredients ingredients={ingredients} />
                    <Steps steps={steps} />
                </div>
            </div>
            <Footer />
        </>
    )
}
