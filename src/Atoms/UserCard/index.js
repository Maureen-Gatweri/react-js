import './index.css'
const UserCard=({image,fullName})=>{
    return(
        <div className="customer">
        <div className="customers">
            <img src={image} alt={`${fullName}profile`}/>
            <h3>{fullName}</h3>
        </div>
        </div>
    );
    
};
export default UserCard;