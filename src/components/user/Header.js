import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../redux/actions/loginAction";
import { changeMode } from "../../redux/actions/changeModeAction";
import { logOut } from "../../utils/userAPI/userapi";
import TonggleMode from "../TonggleMode";




const Header = () => {
 
   const [darkMode, setDarkMode] = useState(false);
   const navigate = useNavigate();
   const loginData = useSelector((state) => state.login);
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(changeMode(darkMode))
   }, [darkMode])



   const handleAuth = () => {

      logOut().then(response => {
        
         dispatch(logoutUser(response.data))
      }).catch(error => console.log(error))

   };

   return (
      <>


         <header className="header_section ">
            <div className="container">
               <nav className="navbar navbar-expand-lg custom_nav-container ">

                  <Link className="navbar-brand" to="/home">
                     <h1>
                        <span style={{ color: '#308d46' }}>Emiza Todo</span>
                     </h1>
                  </Link>

                  <div >
                     <ul className="navbar-nav">
                       
                        <li className="nav-item">
                           {loginData.status ? <Link to="#" className="nav-link" onClick={handleAuth}>
                              Log Out

                           </Link> : <Link className="nav-link" to="/login">
                              Log in

                           </Link>}

                        </li>
                        {loginData.status ? <li className="nav-item text-uppercase">
                           <Link className="nav-link" >{loginData.user.name}</Link>

                        </li> : ''}
                        { loginData.status  ? <li className="nav-item text-uppercase">
                            {
                           loginData.user.role === 'admin' ? <Link to="/adminpage" className="nav-link">AdminPage</Link> : ""
                        }
                       </li> : ''}

                        <li className="nav-item"><TonggleMode handleToggleDarkMode={setDarkMode} mode={darkMode} /></li>
                        <form className="form-inline">
                           <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                              <i className="fa fa-search" aria-hidden="true"></i>
                           </button>
                        </form>
                     </ul>
                  </div>
               </nav>
            </div>
         </header>

      </>
   );
};

export default Header;


