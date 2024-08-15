import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import titleImg from "../../../assets/titleImg.png";
import userImg from '../../../assets/user.png';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const handleSignOut = () => {
        logOut()
            .then()
            .catch();
    };

    const controlNavbar = () => {
        if (window.scrollY < lastScrollY) {
            // Scrolling up
            setShowNavbar(true);
        } else if (window.scrollY > lastScrollY) {
            // Scrolling down
            setShowNavbar(false);
        }
        setLastScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", controlNavbar);
        return () => {
            window.removeEventListener("scroll", controlNavbar);
        };
    }, [lastScrollY]);

    const links = (
        <>
            <li>
                <NavLink 
                    to="/" 
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "border-b-4 border-orange-500" : "hover:text-orange-500"
                    }
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to="/product" 
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "border-b-4 border-orange-500" : "hover:text-orange-500"
                    }
                >
                    Products
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to="/service" 
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "border-b-4 border-orange-500" : "hover:text-orange-500"
                    }
                >
                    Service
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to="/contact" 
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "border-b-4 border-orange-500" : "hover:text-orange-500"
                    }
                >
                    Contact
                </NavLink>
            </li>
        </>
    );

    return (
        <div className={`w-full border-b shadow transition-transform duration-300 fixed top-0 left-0 right-0 z-50 bg-white ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}>
            <div className="container mx-auto">
                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul tabIndex={0} className="dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 border border-orange-500 rounded-box w-32 h-32 space-y-2">
                                {links}
                            </ul>
                        </div>
                        <div className="flex gap-1">
                            <img src={titleImg} alt="Title" className="w-6 h-7" />
                            <h2 className="text-2xl font-bold">Prime Pick</h2>
                        </div>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu-horizontal px-1 space-x-8 text-[16px] lg:mr-36 font-bold">
                            {links}
                        </ul>
                    </div>
                    <div className="navbar-end flex items-center space-x-2">
                        {user && (
                            <div className="hidden lg:flex items-center space-x-4">
                                <div className="tooltip tooltip-warning tooltip-bottom" data-tip={user.displayName}>
                                    <div className="rounded-full border border-red-500 text-orange-500">
                                        <img
                                            className="rounded-full w-10 h-10"
                                            src={user.photoURL || userImg}
                                            alt={user.displayName || "User Image"}
                                        />
                                    </div>
                                </div>
                                <button onClick={handleSignOut} className="px-2 py-2 font-bold rounded-md hover:bg-transparent border-2 text-orange-500 hover:bg-gradient-to-r from-orange-400 to-rose-500 border-orange-500 hover:text-white">
                                    Log out
                                </button>
                            </div>
                        )}
                        {!user && (
                            <div className="hidden lg:flex items-center space-x-4">
                                <Link to='/login'>
                                    <button className="px-2 py-2 font-bold rounded-md hover:bg-transparent border-2 text-orange-500 hover:bg-gradient-to-r from-orange-400 to-rose-500 border-orange-500 hover:text-white">
                                        Sign in
                                    </button>
                                </Link>
                                <div className="h-[25px] bg-orange-600 text-orange-500 hidden lg:block">|</div>
                                <Link to='/register'>
                                    <button className="px-2 py-2 font-bold rounded-md bg-gradient-to-r from-orange-400 to-rose-500 text-white border-2 border-orange-500">
                                        Sign up
                                    </button>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
