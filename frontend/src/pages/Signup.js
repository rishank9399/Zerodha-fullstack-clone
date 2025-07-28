import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Signup = () => {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });
  const { email, password, username } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_AUTH_BACKEND}/signup`,
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          window.location.href = process.env.REACT_APP_DASHBOARD_URL; 
        }, 500); 
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
      username: "",
    });
  };

  return (
    <div className="container mt-5 p-5 col-4 text-center">
      <h2 className="fw-bold mb-5">Signup Account</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email" className="fs-5 mt-3">Email&nbsp;</label>
          <input
            type="email"
            name="email"
            value={email}
            className="p-2 border rounded"
            placeholder="Enter your email"
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label htmlFor="username" className="fs-5 mt-4">Username&nbsp;</label>
          <input
            type="text"
            name="username"
            value={username}
            className="p-2 border rounded"
            placeholder="Enter your username"
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label htmlFor="password" className="fs-5 mt-3">Password&nbsp;</label>
          <input
            type="password"
            name="password"
            value={password}
            className="p-2 border rounded"
            placeholder="Enter your password"
            onChange={handleOnChange}
          />
        </div>
        <div className="d-flex justify-content-center mt-4">
          <button type="submit" className="btn btn-primary" style={{width: "80%"}}>Submit</button>
        </div>
        <div className="text-muted mt-2 text-end mt-4">
          <i>Already have an account? <Link to={"/login"}>Login</Link></i>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Signup;