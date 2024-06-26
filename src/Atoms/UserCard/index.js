import './index.css'
import { Link } from 'react-router-dom';
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
function ButtonLink({to, children}){
    return <Link to={to}><buttton>{children}</buttton></Link>
}