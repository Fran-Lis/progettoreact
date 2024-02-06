import noRepeat from "../functions/noRepeat";

export default function Ingredients(props){
    return(
        <>
            <h3>Ingredients:</h3>
            <ul>
                {noRepeat(props.ingredients).map((ingredient) => {
                    return <li>{ingredient}</li>
                })}
            </ul>
        </>
    )
}