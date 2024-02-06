import { Link } from "react-router-dom"

export default function Recipe(props){
    return(
        <Link className="link" to={`recipes/${props.id}`} key={props.id}>
            <div className="card">
                <img src={props.image} alt=""/>
                <h3 className="recipe-title">{props.title}</h3>
            </div>
        </Link>
    )
}