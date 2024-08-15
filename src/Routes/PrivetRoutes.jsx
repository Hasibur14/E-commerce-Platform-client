

import { PropTypes } from 'prop-types';
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from '../Provider/AuthProvider';


const PrivetRoutes = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    // console.log(location.pathname)

    if (loading) {
        return <div className="container lg:mx-[800px] mt-16 ">
            <span className="loading loading-spinner loading-xs"></span>
            <span className="loading loading-spinner loading-sm"></span>
            <span className="loading loading-spinner loading-md"></span>
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    }

    if (user) {
        return children;
    }

    return (
        <Navigate state={location.pathname} to='/login'></Navigate>
    );
};


PrivetRoutes.propTypes = {
    children: PropTypes.node.isRequired,
};

export default PrivetRoutes;
