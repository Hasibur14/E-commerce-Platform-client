import { useContext, } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import titleImg from "../../../assets/titleImg.png";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleSignOut = () => {
        logOut()
            .then()
            .catch();
    };

    const links = (
        <>
            <li>
                <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-white  px-3 py-2 rounded-lg bg-gradient-to-r from-orange-700 to-orange-500 border-purple-600" : "hover:text-purple-600"} > <span>Home</span> </NavLink>
            </li>
            <li>
                <NavLink to="/product" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-white  px-3 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-fuchsia-600 border-purple-600" : "hover:text-purple-600"} > <span>Products</span> </NavLink>
            </li>
            <li>
                <NavLink to="/service" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-white  px-3 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-fuchsia-600 border-purple-600" : "hover:text-purple-600"} > <span>Service</span> </NavLink>
            </li>
            <li>
                <NavLink to="/contact" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-white  px-3 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-fuchsia-600 border-purple-600" : "hover:text-purple-600"} > <span>Contact</span> </NavLink>
            </li>

        </>
    );


    return (
        <div className='w-full border-b'>
            <div className="navbar flex justify-between mx-28">
                <div className="navbar navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className=" dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 border border-purple-600 rounded-box w-32 h-32 space-y-2">
                            {links}
                        </ul>
                    </div>
                    <div className="lg:ml-20 flex gap-1">
                        <img src={titleImg} alt="" className="w-6 h-7" />
                        <h2 className="text-2xl font-bold ">Prime Pick</h2>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu-horizontal px-1 space-x-8 text-[16px] lg:mr-36 font-bold">
                        {links}
                    </ul>
                </div>
                <div className="navbar md:flex lg:flex space-x-2 navbar-end lg:mr-80">
                    <div className="hidden lg:flex">
                        <div className="mr-4 mt-1 ">
                            {user && (
                                <div className="tooltip tooltip-warning tooltip-bottom" data-tip={user?.displayName}>
                                    <div className="rounded-full border border-red-600"><img className="rounded-full w-10 h-10" src={user.photoURL} alt="image is not found" /></div>
                                </div>
                            )}
                        </div>
                        <div>
                            {
                                user ?
                                    <button onClick={handleSignOut} className=" px-2 py-2 font-bold rounded-md  hover:bg-transparent border-2  text-purple-600 hover:bg-gradient-to-r from-purple-500 to-fuchsia-600 border-purple-600 hover:text-white">Log out</button>
                                    :
                                    <Link to='/login'>
                                        <button className=" px-2 py-2 font-bold rounded-md  hover:bg-transparent border-2  text-purple-600 hover:bg-gradient-to-r from-purple-500 to-fuchsia-600 border-purple-600 hover:text-white">Sign in</button>
                                    </Link>
                            }
                        </div>
                    </div>
                    <div className=" h-[25px] bg-fuchsia-700 text-purple-600 hidden lg:block">|</div>
                    <div className="hidden lg:flex">
                        <Link to='/register' className=" px-2 py-2 font-bold rounded-md  hover:bg-transparent border-2  text-purple-600 hover:bg-gradient-to-r from-purple-500 to-fuchsia-600 border-purple-600 hover:text-white">Sign up</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
