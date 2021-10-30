import React from 'react';
import './Header.css';
import { NavLink, Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light py-2" style={{
                backgroundColor: "#dff9fb"
            }}>
                <div className="container">
                    <h1>Ghurbo</h1>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/home" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/destinations" className="nav-link">Destinations</Link>
                            </li>
                            {
                                user.email ? <li className="nav-item">
                                    <Link to="/myorders" className="nav-link">My orders</Link>
                                    <Link to="/login" className="nav-link">Manage All Orders</Link>
                                    <Link to="/login" className="nav-link">Add a new service</Link>
                                    <Link to="" className="nav-link">Signed as : {user.email}</Link>
                                    <button className="btn btn-danger" onClick={logOut}>Log Out</button>
                                </li> : <li>
                                    <Link to="/login" className="nav-link">Login</Link>
                                </li>
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;



// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import { HashLink } from 'react-router-hash-link';
// import useAuth from '../../../hooks/useAuth';
// import './Header.css'

// const Header = () => {
//     const { user, logOut } = useAuth();
//     return (
//         <>
//             <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-4">
//                 <div className="container">
//                     <a className="navbar-brand" href="#">Mahade Hasan</a>
//                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                             <li className="nav-item">
//                                 <NavLink className="nav-link" to="/home">Home</NavLink>
//                             </li>
//                             <li className="nav-item">
//                                 <HashLink className="nav-link" to="/home#services">Services</HashLink>
//                             </li>
//                             <li className="nav-item">
//                                 <NavLink className="nav-link" to="/blogs">Blogs</NavLink>
//                             </li>
//                             <li className="nav-item">
//                                 <NavLink className="nav-link" to="/appointment">Appointment</NavLink>
//                             </li>
//                         </ul>
//                         <form className="d-flex">
//                             {
//                                 user?.email ? <>
//                                     <h5 className="text-white ml-3">Signed in as : {user.displayName}</h5>
//                                     <h5 onClick={logOut} className=" btn btn-danger text-white">Logout</h5>
//                                     {/* <button onClick={logOut} className="btn btn-outline-info logout-btn">Logout</button> */}
//                                 </> : <>
//                                     <NavLink to="/signin" className="nav-link">Sign in</NavLink>
//                                     <NavLink to="/signup">
//                                         <button className="btn btn-outline-info">Signup</button>
//                                     </NavLink>
//                                 </>
//                             }
//                         </form>
//                     </div>
//                 </div>
//             </nav>
//         </>
//     );
// };

// export default Header;