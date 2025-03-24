import { use } from "react"

export default function Users ({fetchUsers}){
    const users = use(fetchUsers);
   
    return (
        <div className="card1">
            <h2>Users: {users.length} </h2>
        </div>
    )
}