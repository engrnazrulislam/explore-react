import './Actor.css';
export default function Actor({name, age}){
    return(
        <div className="actor">
            <h2>Actor Name: {name}</h2>
            <p>Age: {age}</p>
        </div>
    )
}