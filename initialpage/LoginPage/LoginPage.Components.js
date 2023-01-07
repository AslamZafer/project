import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Applogo } from "../../Entryfile/imagepath.jsx";
import { useForm, Controller, set } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
import { emailrgx } from "../../constant";
import { setTempEmailId, clearTempEmailId } from "../../handlers/tempEmailIdUtils";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { getEmail,getPassword, getIsLoading, getError, getUserData, loginAction } from "../../redux/reducers/login.js";


const Loginpage = ({emailId, password, error, loading, login}) => {

  const navigate = useNavigate(); 

// const LoginPage = (props) => {
  // const [inputValues, setInputValues] = useState({
  //   email: "",
  //   password: "",
  // });

  // const [emailId, setEmailId] = useState("");
  // const [password, setPassword] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const {
    control,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (emailId) {
      setTempEmailId(emailId);
    }
  }, [emailId]);

  // async function loginApi() {
  //   const url = "http://localhost:3000/login";
  //   const inputs = JSON.stringify({ emailId, password });
  //   const options = {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //     body: inputs,
  //   };
  //   try {
  //     const req = await fetch(url, options);
  //     const res = await req.json();
  //     console.log(req);
  //     return res;
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  const login = async (e) => {
    e.preventDefault();
    if (emailId === "" || password === "") {
      return setError("error", {
        message: "The required field is empty",
      });
    }

    if (!emailrgx.test(emailId)) {
      setError("email", {
        message: "Invalid email",
      });
    }

    // const loginRequest = await loginApi();
    // if (loginRequest.times === 2) {
    //   setSuccessMsg("Logged in successfull");
    //   clearErrors(["email", "password", "error"]);
    //   setTimeout(() => {
    //     props.history.push("/app/administrator/jobs-dashboard");
    //   }, 500);
    //   clearTempEmailId(emailId);
    // } else if (loginRequest.times === 1 && emailrgx.test(emailId)) {
    //   props.history.push("/createpassword");
    // } else {
    //   setError("error", {
    //     message: loginRequest.msg,
    //   });
    //   return props.history.push("/login");
    // }
  };

  const onEyeClick = () => {
    seteye(!eye);
  };

  return (

    <>
      <Helmet>
        <title>Login - qBotica</title>
        <meta name="description" content="Login page" />
      </Helmet>
      <div className="account-content">
        <div className="container">
          {/* Account Logo */}
          <div className="account-logo">
            <Link to="/login">
              <img src={Applogo} alt="Qbotica" />
            </Link>
          </div>
          {/* /Account Logo */}
          <div className="account-box">
            <div className="account-wrapper">
              <h3 className="account-title">Login</h3>
              <p className="account-subtitle"></p>
              {/* Account Form */}
              <div>
                <form onSubmit={()=>login()}>
                  {successMsg && (
                    <div className="task-success">{successMsg}</div>
                  )}
                  <small>{errors?.error?.message}</small>
                  <div className="form-group">
                    <label>Email Address</label>
                    <Controller
                      name="email"
                      control={control}
                      render={({ field: { value, onChange } }) => (
                        <input
                          className={`form-control  ${
                            errors?.email ? "error-input" : ""
                          }`}
                          type="text"
                          value={value}
                          onChange={(e) => setEmailId(e.target.value)}
                        />
                      )}
                    />
                    <small>{errors?.email?.message}</small>
                  </div>
                  <div className="form-group">
                    <div className="row">
                      <div className="col">
                        <label>Password</label>
                      </div>
                      <div className="col-auto">
                        <Link className="text-muted" to="/forgotpassword">
                          Forgot password?
                        </Link>
                      </div>
                    </div>
                    <Controller
                      name="password"
                      control={control}
                      render={({ field: { value, onChange } }) => (
                        <div className="pass-group">
                          <input
                            type={eye ? "password" : "text"}
                            className={`form-control  ${
                              errors?.password ? "error-input" : ""
                            }`}
                            value={value}
                            onChange={(e) => setPassword(e.target.value)}
                            autoComplete="false"
                          />
                          <span
                            onClick={onEyeClick}
                            className={`fa toggle-password" ${
                              eye ? "fa-eye-slash" : "fa-eye"
                            }`}
                          />
                        </div>
                      )}
                    />
                    <small>{errors?.password?.message}</small>
                  </div>
                  <div className="form-group text-center">
                    <button
                      className="btn btn-primary account-btn"
                      type="submit"
                    >
                      Login
                    </button>
                  </div>
                </form>
                <div className="account-footer">
                  <p>
                    Don't have an account yet?{" "}
                    <Link to="/register">Register</Link>
                  </p>
                </div>
              </div>
              {/* /Account Form */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loginpage;