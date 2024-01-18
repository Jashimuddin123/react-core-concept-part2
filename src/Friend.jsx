export default function Friend({friend}){
    const {name, email,id} = friend;


return(
    <div className="box">
        <h4>Name :{name} </h4>
        <p>Email : {email}</p>
        <h2>User id :{id}</h2>
    </div>
)

}