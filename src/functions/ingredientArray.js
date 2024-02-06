export default function IngredientsArray(arr){
    let arrIngredients = []
    let ingredients = []

    arr.map((el) => {
        return arrIngredients.push(el.ingredients.map((ingredient) => {
            return ingredient.name
        }))
    })

    arrIngredients.map((el) => {
        return el.map((el) =>{
            return ingredients.push(el)
        })
    })

    return ingredients
}