export default function Steps(props){
    return(
        <>
            <h3>Steps:</h3>
            <ol>
                {props.steps.map((step) => {
                    return <li>{step}</li>
                })}
            </ol>
        </>
    )
}