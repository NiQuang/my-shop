import { isAdmin, isAuthenticate } from "../authenticate";
import {Navigate} from 'react-router-dom';
import { message } from "antd";
const PrivateAdmin = ({children}) => {
    const auth = isAuthenticate();
    if(!auth || !auth.isAdmin){
        // message.success('You are not admin!')
        return <Navigate to="/signin" />;
    }
    return children;
};

export default PrivateAdmin;