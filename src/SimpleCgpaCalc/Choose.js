import React from "react";
import style from "./style.css";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
} from "@mui/material";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
// import Data from "./Data.json";
// import GradeTypes from "./GradeTypes.json";
function Choose(props) {
  const navigate = useNavigate();

  const handleYes = () => {
    navigate("/gradesc");
  };
  const handleNo = () => {
    navigate("/grades");
  };

  return (
    <>
      <div className="container">
        <div className="grades-wrapper">
          <div className="student_info">
            <p>
              <strong>Name : </strong>
              {localStorage.getItem("username")}
            </p>
            <p>
              <strong>Roll No : </strong>
              {localStorage.getItem("eid")}
            </p>
          </div>
        </div>
        <div className="options_wrapper">
          <p> Have You Take Cloud Computing ?</p>
          <div className="button_group">
            <Button variant="contained" onClick={handleYes}>
              YES
            </Button>
            <Button variant="contained" onClick={handleNo}>
              NO
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Choose;

{
  /* <h3>{result.branch_name}</h3>
                                <h4 key={elem.semid}>SEMESTER {elem.semno}</h4> */
}

{
  /* <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                           <MenuItem value={30}>Thirty</MenuItem> */
}

{
  /* {branch === "Computer Science and Engineering" && sem === "I" && (
          <div className="select_grades">
            <h3>{branch}</h3>
            <h4>{`SEMESTER ${sem}`}</h4>

            <div className="enter_grades">
              <div style={{ height: 400, width: "100%" }}></div>
            </div>
          </div>
        )} */
}

// {
//   Data.map((data) => {
//     return <div> {data.title}</div>;
//   });
// }

//branch menue item
{
  /* <MenuItem value={"Computer Science and Engineering"}>
                    Computer Science and Engineering
                  </MenuItem>
                  <MenuItem value={"Information Technology"}>
                    Information Technology
                  </MenuItem>
                  <MenuItem value={"Electronic and Telecummunication"}>
                    Electronic and Telecummunication
                  </MenuItem>
                  <MenuItem value={"Electrical Engineering"}>
                    Electrical Engineering
                  </MenuItem>
                  <MenuItem value={"Mechanical Engineering"}>
                    Mechanical Engineering
                  </MenuItem> */
}

//sem menue item

{
  /* <MenuItem value={"I"}>I</MenuItem>
                  <MenuItem value={"II"}>II</MenuItem>
                  <MenuItem value={"III"}>III</MenuItem>
                  <MenuItem value={"IV"}>IV</MenuItem>
                  <MenuItem value={"V"}>V</MenuItem>
                  <MenuItem value={"VI"}>VI</MenuItem>
                  <MenuItem value={"VII"}>VII</MenuItem>
                  <MenuItem value={"VIII"}>VIII</MenuItem> */
}
