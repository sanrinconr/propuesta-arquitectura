export function NamesView({users}){
    return users.map((user, i)=><p key={i}>{user.name}</p>)
}