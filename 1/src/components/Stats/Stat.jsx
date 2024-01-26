export function Stat({type, percentage}){
    return(
        <li>
            <p>{type}</p>
            <h2>{percentage}</h2>
        </li>
    )
}