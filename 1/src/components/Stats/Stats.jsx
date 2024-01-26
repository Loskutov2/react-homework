import { Stat } from "./Stat"
export function Statistics({label, data}){
    return(
      <div>
        <h1>
          {label}
        </h1>
        <ul>
          {data.map((document)=>{
              return <Stat type={document.label} percentage={document.percentage}></Stat>
          })}
        </ul>
      </div>
    )
}