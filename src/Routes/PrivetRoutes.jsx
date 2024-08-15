

import { PropTypes } from 'prop-types';
import { useContext } from "react";
import { ImSpinner3 } from "react-icons/im";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from '../Provider/AuthProvider';

const PrivetRoutes = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    // console.log(location.pathname)

    if (loading) {
        return <div className="container lg:mx-[850px] mt-16 ">
            <span>
                <ImSpinner3 className='text-7xl text-red-500 animate-spin' />
            </span>
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
