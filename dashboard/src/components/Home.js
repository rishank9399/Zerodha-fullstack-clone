import React from "react";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");
  const greetedRef = useRef(false);
  console.log(cookies);
  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        // window.location.href = `${process.env.REACT_APP_FRONTEND_URL}/open-account`;
        console.log("No Cookies...");
      }
      // const { data } = await axios.post(
      //   `${process.env.REACT_APP_AUTH_BACKEND}/home`,
      //   {},
      //   { withCredentials: true }
      // );
      // const { status, user } = data;
      // setUsername(user);
      // if (!status) {
      //   removeCookie("token");
      //   window.location.href = `${process.env.REACT_APP_FRONTEND_URL}/open-account`;
      //   return;
      // }
      // if (!greetedRef.current) {
      //     greetedRef.current = true;
      //     toast.success(`Hello ${user}`, { position: "top-right" });
      // }
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);
  const Logout = () => {
    removeCookie("token");
    window.location.href = `${process.env.REACT_APP_FRONTEND_URL}/open-account`;
  };
  return (
    <>
      <TopBar />
      <Dashboard userName={username} />
      <ToastContainer />
      <button onClick={Logout}>Logout</button>
    </>
  );
};

export default Home;
