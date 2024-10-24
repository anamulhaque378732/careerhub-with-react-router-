import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
const Header = () => {

    const links = <>
        <li className="hover:bg-sky-500 hover:text-black rounded-md"> <NavLink to='/'> Home</NavLink></li>

        <li className="hover:bg-sky-500  hover:text-black rounded-md"><NavLink to='/applied'>Applied Job</NavLink></li>
        <li className="hover:bg-sky-500 hover:text-black rounded-md"><NavLink to='/statistic'>Statistic</NavLink></li>
        <li className="hover:bg-sky-500 hover:text-black rounded-md"><NavLink to='/blogs'>Blogs</NavLink></li>

    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn    text-xl bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 ...">Career Hub</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <Link className="btn p-1  hover:bg-orange-300 bg-gradient-to-r from-cyan-500 to-blue-500 ...">Apply now</Link>
            </div>
        </div>
    );
};

export default Header;