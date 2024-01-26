import { FriendListItem } from "./FriendListItem"
export function FriendList({data}){
    return(
      <ul>
        {data.map((person)=>{
          return(<FriendListItem 
            isOnline={person.isOnline}
            ava={person.avatar}
            name={person.name}
          ></FriendListItem>
        )})}
      </ul>
    )
}