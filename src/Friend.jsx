export default function Friend({friend}){
    console.log(friend);
    const {name, username, email, phone, website } = friend;
   
    
    return (
        <div className="card1">
            <h4>Name: {name}</h4>
            <h4>User Name: {username}</h4>
            <h4>User Email: {email}</h4>
            <h4>User phone: {phone}</h4>
            <h4>User website: {website}</h4>
          
        </div>
    )
}