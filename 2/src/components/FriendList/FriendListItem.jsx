export function FriendListItem({isOnline, name, ava}){
    return(
        <li>
            <span>
                {isOnline?'🟢':'🔴'}
            </span>
            <img src={ava} alt="" />
            <p>{name}</p>
        </li>
    )
}