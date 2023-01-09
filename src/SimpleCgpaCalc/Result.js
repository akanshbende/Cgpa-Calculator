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
// import { useState } from "react";
// import { DataGrid } from "@mui/x-data-grid";
// import { border } from "@mui/system";
import Table from "react-bootstrap/Table";
import { toast } from "react-toastify";
import logout from "./logout.png";
import { Link, useNavigate } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Data from "./Data.json";
// import GradeTypes from "./GradeTypes.json";
function Result(props) {
  const navigate = useNavigate();
  //   const [branch, setBranch] = useState("");
  //   const [sem, setSem] = useState("");
  //   const [grade, setGrade] = useState();
  //   const [addgrade, setAddgrade] = useState([]);
  const handleLogout = () => {
    // username("");
    // eid("");
    localStorage.clear();
    toast.success("Logout Successfully");
    console.log("Logout Sucessful");

    navigate("/");
  };
  return (
    <>
      <div className="result-container">
        <div className="result-wrapper">
          <div className="logout" onClick={handleLogout}>
            <img src={logout} width="30px" alt="logout" />
          </div>
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

          <div className="selection">
            <div className="branch_sem_title">
              <p className="branch_name">
                <strong>Computer Science and Engineering</strong>
              </p>
              <p className="sem_name">
                <strong> SEMESTER V</strong>
              </p>
            </div>
            <div>
              {/* {localStorage.getItem("daa")}
              {localStorage.getItem("os")}
              {localStorage.getItem("toc")}
              {localStorage.getItem("se")}
              {localStorage.getItem("dmw")}
              {localStorage.getItem("ldaa")}
              {localStorage.getItem("los")}
              {localStorage.getItem("ldmw")} */}
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Course Code</th>
                    <th>Course</th>
                    <th>Credit</th>
                    <th>Grade</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>CS3001</td>
                    <td>Design & Analysis of Algorithm</td>
                    <td
                      style={{
                        textAlign: "center",
                      }}
                    >
                      4
                    </td>
                    <td>{localStorage.getItem("daa")}</td>
                  </tr>
                  <tr>
                    <td>CS3002</td>
                    <td>Operating System</td>
                    <td
                      style={{
                        textAlign: "center",
                      }}
                    >
                      3
                    </td>
                    <td>{localStorage.getItem("os")}</td>
                  </tr>
                  <tr>
                    <td>CS3003</td>
                    <td>Theory of Computation</td>
                    <td
                      style={{
                        textAlign: "center",
                      }}
                    >
                      4
                    </td>
                    <td>{localStorage.getItem("toc")}</td>
                  </tr>
                  <tr>
                    <td>CS3004</td>
                    <td>Software Engineering</td>
                    <td
                      style={{
                        textAlign: "center",
                      }}
                    >
                      4
                    </td>
                    <td>{localStorage.getItem("se")}</td>
                  </tr>
                  <tr>
                    <td>CS3005</td>
                    <td>Data Mining & Warehousing</td>
                    <td
                      style={{
                        textAlign: "center",
                      }}
                    >
                      3
                    </td>
                    <td>{localStorage.getItem("dmw")}</td>
                  </tr>
                  <tr>
                    <td>CS3006</td>
                    <td>Lab Design & Analysis of Algorithm</td>
                    <td
                      style={{
                        textAlign: "center",
                      }}
                    >
                      1
                    </td>
                    <td>{localStorage.getItem("ldaa")}</td>
                  </tr>
                  <tr>
                    <td>CS3007</td>
                    <td>Lab Operating System</td>
                    <td
                      style={{
                        textAlign: "center",
                      }}
                    >
                      1
                    </td>
                    <td>{localStorage.getItem("los")}</td>
                  </tr>

                  <tr>
                    <td>CS3008</td>
                    <td>Lab Data Mining & Warehousing</td>
                    <td
                      style={{
                        textAlign: "center",
                      }}
                    >
                      1
                    </td>
                    <td>{localStorage.getItem("ldmw")}</td>
                  </tr>
                  <tr>
                    <td>CS3009</td>
                    <td>Mini Project</td>
                    <td
                      style={{
                        textAlign: "center",
                      }}
                    >
                      2
                    </td>
                    <td>{localStorage.getItem("mp")}</td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <strong>Total Credits :</strong>
                    </td>

                    <td
                      colSpan={1}
                      style={{
                        textAlign: "center",
                      }}
                    >
                      {localStorage.getItem("creditsSum")}
                    </td>
                  </tr>
                  {/* <tr>
                    <td>CS4008</td>
                    <td>Cloud Computing</td>
                    <td
                      style={{
                        textAlign: "center",
                      }}
                    >
                      4
                    </td>
                    <td>{localStorage.getItem("cc")}</td>
                  </tr> */}
                </tbody>
              </Table>
              <div
                className="result"
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "end",
                }}
              >
                <Button
                  variant="outlined"
                  style={{
                    margin: "0.5rem",
                    fontWeight: "600",
                  }}
                  size="large"
                >
                  {localStorage.getItem("finalResult")} CGPA
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Result;

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

/* <MenuItem value={"I"}>I</MenuItem>
                  <MenuItem value={"II"}>II</MenuItem>
                  <MenuItem value={"III"}>III</MenuItem>
                  <MenuItem value={"IV"}>IV</MenuItem>
                  <MenuItem value={"V"}>V</MenuItem>
                  <MenuItem value={"VI"}>VI</MenuItem>
                  <MenuItem value={"VII"}>VII</MenuItem>
                  <MenuItem value={"VIII"}>VIII</MenuItem> */
