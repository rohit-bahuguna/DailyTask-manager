import React, {  useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../redux/actions/loginAction";

import {toast , ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { logIn } from "../../utils/userAPI/userapi";

const Login = () => {
  const [user, setUser] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
 
 
  const loginFn = async (e) => {

    e.preventDefault()

    logIn(user)
      .then(response => {
      
        dispatch(loginUser(response.data))
      
        navigate('/home')
      }).catch(error => {
        console.log(error);
        
          toast.error(error.response.data.errMessage)
        
      });

  };
  return (
    <>
      <ToastContainer/>
      <section className=" layout_padding">
        <div className="container">

          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="full">
                <form >
                  <fieldset>

                    email: <input className="text-lowercase" type="email" onChange={(e) => setUser({ ...user, email: e.target.value })} name="password" placeholder="Enter Your Email" required />

                    Password: <input type="password" onChange={(e) => setUser({ ...user, password: e.target.value })} name="password" required  placeholder="Enter Your Password"/>

                    <input className="rounded-pill" type="submit" value="Log In" onClick={(e) => { loginFn(e) }} />
                    <br />
                    <Link to="/signin">
                      <input className="rounded-pill" type="submit" value="Create Account" />
                    </Link>
                  </fieldset>

                </form>

              </div>


            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;

