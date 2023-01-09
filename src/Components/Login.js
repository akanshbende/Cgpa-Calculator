import React from "react";
import ReactDOM from "react-dom";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button, TextField } from "@mui/material";
import style from "./style.css";
import logo from "./geca_logo.png";

import { toast } from "react-toastify";

function Login() {
  const [username, setUsername] = useState("");
  const [eid, setEid] = useState("");

  const navigate = useNavigate();
  // const [user, setUser] = useState();
  localStorage.setItem("username", username);
  localStorage.setItem("eid", eid);
  //getting username and rollno
  const userName = localStorage.getItem("username")
    ? localStorage.getItem("username")
    : "Akansh";
  const userRollno = localStorage.getItem("eid")
    ? localStorage.getItem("eid")
    : "BE20F05F003";

  const handleSubmit = (e) => {
    e.preventDefault(); //prevent refresh of page
    console.log("Submit Clicked");
    console.log(userName);
    console.log(userRollno);
    console.log("---------------------------------");
    console.log(username);
    console.log(eid);
    if (username == userName && eid == userRollno) {
      toast.success("Login Sucess");
      console.log("Login Sucessful");
      // console.log(userName);
      // console.log(userRollno);
      navigate("/grades");
    } else {
      console.log("Login Failed");

      toast.error("Invalid Email OR Password");
    }
  };

  const handleUsername = (event) => {
    console.log("username changed");
    setUsername(event.target.value);
  };

  const handleEid = (event) => {
    console.log("eid changed");

    setEid(event.target.value.toUpperCase());
  };

  // if (user) {
  //   return <div>{user.name} is loggged in</div>;
  // }
  // if (!user) {
  //   {
  //     window.alert("Enter Name And RollNO");
  //   }
  // }
  return (
    <>
      <div className="container">
        <div className="wrapper">
          <form
          // onSubmit={handleSubmit}
          >
            <div className="clg_logo">
              <img src={logo} width="50%" />
            </div>
            <div className="main_title">CGPA CALCULATOR</div>
            <TextField
              sx={{ m: 1 }}
              id="outlined-name"
              label="Name"
              value={username}
              onChange={handleUsername}
            />
            <TextField
              sx={{ m: 1 }}
              id="outlined-basic"
              value={eid}
              onChange={handleEid}
              label="Enrollment No."
              variant="outlined"
            />
            {/* {!username || !eid ? (
              window.alert("Enter Username and password")
            ) : (
              <Link to="/grades">
                <Button
                  sx={{ m: 1 }}
                  variant="contained"
                  color="success"
                  type="submit"
                  // onClick={handleSubmit}
                >
                  GO
                </Button>
              </Link>
            )} */}
            {/* <Link to="/grades"> */}
            <Button
              sx={{ m: 1 }}
              variant="contained"
              color="success"
              type="submit"
              onClick={handleSubmit}
            >
              GO
            </Button>
            {/* </Link> */}
          </form>
          {/* {localStorage.getItem("name")}
          {localStorage.getItem("rollno")} */}
        </div>
      </div>
    </>
  );
}

export default Login;
