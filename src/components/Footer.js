export default function Footer(){
    const backLink = 'https://spoonacular.com/food-api'

    return(
        <footer>
            <p>Data by <a href={backLink} rel="noreferrer" target="_blank">{backLink}</a></p>
        </footer>
    )
}