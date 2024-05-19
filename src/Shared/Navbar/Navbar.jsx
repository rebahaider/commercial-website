import { Link, NavLink } from "react-router-dom";


const Navbar = () => {

    const navLink = <>

        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/">Update Profile</NavLink></li>
        <li><NavLink to="/">User Profile</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>


    </>
    return (
        <div className="navbar text-white bg-[#525079] font-bold">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black">
                        {navLink}
                    </ul>
                </div>

                <Link to="/" className="flex items-center gap-4">
                    <img className="rounded-full w-20" src="/logo.PNG" alt="" />
                    <h3 className="text-xl font-bold">Commercial Website</h3>
                </Link>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLink}
                </ul>
            </div>

            <div className="navbar-end">
                <div className="dropdown dropdown-end mr-3">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
                <a className="btn">Log In</a>
            </div>
        </div>
    );
};

export default Navbar;