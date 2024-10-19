export default function Friend({friends}){
    return(
        <div className="box">
            <h5>Name : {friends.name}</h5>
            <p>Email : {friends.email}</p>
            <p>Phone : {friends.phone}</p>
        </div>
    )
}