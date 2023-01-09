import React from "react";
import style from "./style.css";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  IconButton,
} from "@mui/material";

import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { border } from "@mui/system";
import ReactTable from "react-table";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import logout from "./logout.png";
// import Data from "./Data.json";
// import GradeTypes from "./GradeTypes.json";
function Grades(props) {
  const [daa, setDaa] = useState("");
  const [os, setOs] = useState("");
  const [toc, setToc] = useState("");
  const [se, setSe] = useState("");
  const [dmw, setDmw] = useState("");
  const [ldaa, setLdaa] = useState("");
  const [los, setLos] = useState("");
  const [ldmw, setLdmw] = useState("");
  const [mp, setMp] = useState("");
  const [cc, setCc] = useState("");

  const [addgrade, setAddgrade] = useState([]);
  const navigate = useNavigate();
  const element = <FontAwesomeIcon icon={faCoffee} />;

  const handleLogout = () => {
    // username("");
    // eid("");
    localStorage.clear();
    toast.success("Logout Successfully");
    console.log("Logout Sucessful");

    navigate("/");
  };
  // const grades = [
  //   "A++",
  //   "A+",
  //   "A",
  //   "B+",
  //   "B",
  //   "C+",
  //   "C",
  //   "D",
  //   "D1",
  //   "D2",
  //   "D3",
  // ];

  const gradeArray = [daa, os, toc, se, dmw, ldaa, los, ldmw, mp, cc];

  const gradeData = [
    {
      cid: " CS3001",
      name: daa,
      credit: 4,
    },
    {
      cid: " CS3002",
      name: os,
      credit: 3,
    },
    {
      cid: " CS3003",
      name: toc,
      credit: 4,
    },
    {
      cid: " CS3004",
      name: se,
      credit: 3,
    },
    {
      cid: " CS3005",
      name: dmw,
      credit: 3,
    },
    {
      cid: " CS3006",
      name: ldaa,
      credit: 1,
    },
    {
      cid: " CS3007",
      name: los,
      credit: 1,
    },
    {
      cid: " CS3008",
      name: ldmw,
      credit: 1,
    },
    {
      cid: " CS3009",
      name: mp,
      credit: 2,
    },
    // {
    //   cid: " CS4008",
    //   name: cc,
    //   credit: 4,
    // },
  ];

  const handleCalculate = (e) => {
    e.preventDefault(); //prevent refresh of page

    navigate("/result");

    const gpa = [];
    const creditsArray = [];

    gradeData.map((element, index) => {
      creditsArray.push(element.credit);
    });

    let creditsSum = 0;
    creditsArray.forEach((credit) => {
      creditsSum += credit;
    });

    // console.log("creditsSum : " + creditsSum);

    localStorage.setItem("creditsSum", creditsSum);

    gradeArray.forEach((element) => {
      switch (element) {
        case "A++":
          gpa.push(10);

          break;

        case "A+":
          gpa.push(9);

          break;

        case "A":
          gpa.push(8);

          break;

        case "B":
          gpa.push(7);

          break;

        case "B+":
          gpa.push(6);

          break;

        case "C+":
          gpa.push(5);

          break;

        case "C":
          gpa.push(4);

          break;

        case "D":
          gpa.push(0);

          break;
        default:
          break;
      }
    });

    const sum = [];
    // console.log("gradeArray : " + gradeArray);
    // console.log("creditsArray : " + creditsArray);
    // console.log("gpa array : " + gpa);

    for (var i = 0; i < creditsArray.length; i++) {
      sum.push(gpa[i] * creditsArray[i]);
    }

    let cipi = 0;
    sum.forEach((i) => (cipi += i));

    // console.log("cipi : " + cipi);

    const Result = parseFloat(cipi / creditsSum);
    const finalResult = Result.toFixed(3);

    // console.log("finalResult : " + finalResult);
    localStorage.setItem("finalResult", finalResult);

    console.log("Calculate Clicked");
    localStorage.setItem("daa", daa);
    localStorage.setItem("os", os);
    localStorage.setItem("toc", toc);
    localStorage.setItem("se", se);
    localStorage.setItem("dmw", dmw);
    localStorage.setItem("ldaa", ldaa);
    localStorage.setItem("los", los);
    localStorage.setItem("ldmw", ldmw);
    localStorage.setItem("mp", mp);
    localStorage.setItem("cc", cc);

    // setAddgrade([...addgrade, daa, os]);

    navigate("/result");
  };
  return (
    <>
      <div className="grades-container">
        <div className="grades-wrapper">
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
            <p>
              <strong>Class :</strong> Third Year
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

            {/*========================================== GRADES SELECTION++++++++++++++++++++++++++++++ */}
            <div className="selection_table">
              <div className="subject">
                <p>
                  <strong>Design And Analysis of Algorithm</strong>
                </p>

                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                  <InputLabel id="demo-select-small">Grades</InputLabel>
                  <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={daa}
                    label="Grade"
                    defaultValue=""
                    onChange={(e) => {
                      // console.log("initial :" + daa);
                      setDaa(e.target.value);
                      // console.log("final :" + e.target.value);
                      // console.log("daa :" + e.target.value);
                      // setAddgrade([...addgrade, e.target.value]);
                      // onclick(() => setAddgrade([...addgrade, daa]));
                      // daa === e.target.value;
                      // addgrade.pop();
                      // daa !== e.target.value
                      //   ? setAddgrade([...addgrade]) &&
                      //     addgrade.pop() &&
                      //     setAddgrade([...addgrade, e.target.value])
                      //   : setAddgrade([...addgrade.e.target.value]);
                    }}
                  >
                    <MenuItem value={"A++"}>{"A++"}</MenuItem>
                    <MenuItem value={"A+"}>{"A+"}</MenuItem>
                    <MenuItem value={"A"}>{"A"}</MenuItem>
                    <MenuItem value={"B+"}>{"B+"}</MenuItem>
                    <MenuItem value={"B"}>{"B"}</MenuItem>
                    <MenuItem value={"C+"}>{"C+"}</MenuItem>
                    <MenuItem value={"C"}>{"C"}</MenuItem>
                    <MenuItem value={"D"}>{"D"}</MenuItem>
                    <MenuItem value={"D1"}>{"D1"}</MenuItem>
                    <MenuItem value={"D2"}>{"D2"}</MenuItem>
                    <MenuItem value={"D3"}>{"D3"}</MenuItem>

                    {/* {grades.map((item, index) => (
                      <MenuItem value={item} key={index}>
                        {item}
                      </MenuItem>
                    ))} */}
                  </Select>
                  {/* {console.log("daa : " + daa)} */}
                </FormControl>
              </div>
              <div className="subject">
                <p>
                  <strong>Operating Systems</strong>
                </p>

                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                  <InputLabel id="demo-select-small">Grades</InputLabel>
                  <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={os}
                    label="Grade"
                    defaultValue=""
                    onChange={(e) => {
                      setOs(e.target.value);
                      // addgrade.pop();
                      setAddgrade([...addgrade, e.target.value]);
                    }}
                  >
                    <MenuItem value={"A++"}>{"A++"}</MenuItem>
                    <MenuItem value={"A+"}>{"A+"}</MenuItem>
                    <MenuItem value={"A"}>{"A"}</MenuItem>
                    <MenuItem value={"B+"}>{"B+"}</MenuItem>
                    <MenuItem value={"B"}>{"B"}</MenuItem>
                    <MenuItem value={"C+"}>{"C+"}</MenuItem>
                    <MenuItem value={"C"}>{"C"}</MenuItem>
                    <MenuItem value={"D"}>{"D"}</MenuItem>
                    <MenuItem value={"D1"}>{"D1"}</MenuItem>
                    <MenuItem value={"D2"}>{"D2"}</MenuItem>
                    <MenuItem value={"D3"}>{"D3"}</MenuItem>
                  </Select>
                  {/* {console.log("os : " + os)} */}
                </FormControl>
              </div>
              <div className="subject">
                <p>
                  <strong>Theory Of Computation</strong>
                </p>

                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                  <InputLabel id="demo-select-small">Grades</InputLabel>
                  <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={toc}
                    label="Grade"
                    defaultValue=""
                    onChange={(e) => {
                      setToc(e.target.value);
                      // addgrade.pop();
                      setAddgrade([...addgrade, e.target.value]);
                    }}
                  >
                    <MenuItem value={"A++"}>{"A++"}</MenuItem>
                    <MenuItem value={"A+"}>{"A+"}</MenuItem>
                    <MenuItem value={"A"}>{"A"}</MenuItem>
                    <MenuItem value={"B+"}>{"B+"}</MenuItem>
                    <MenuItem value={"B"}>{"B"}</MenuItem>
                    <MenuItem value={"C+"}>{"C+"}</MenuItem>
                    <MenuItem value={"C"}>{"C"}</MenuItem>
                    <MenuItem value={"D"}>{"D"}</MenuItem>
                    <MenuItem value={"D1"}>{"D1"}</MenuItem>
                    <MenuItem value={"D2"}>{"D2"}</MenuItem>
                    <MenuItem value={"D3"}>{"D3"}</MenuItem>
                  </Select>
                  {/* {console.log("toc : " + toc)} */}
                </FormControl>
              </div>
              <div className="subject">
                <p>
                  <strong>Software Engineering</strong>
                </p>

                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                  <InputLabel id="demo-select-small">Grades</InputLabel>
                  <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={se}
                    label="Grade"
                    defaultValue=""
                    onChange={(e) => {
                      setSe(e.target.value);
                      // addgrade.pop();
                      setAddgrade([...addgrade, e.target.value]);
                    }}
                  >
                    <MenuItem value={"A++"}>{"A++"}</MenuItem>
                    <MenuItem value={"A+"}>{"A+"}</MenuItem>
                    <MenuItem value={"A"}>{"A"}</MenuItem>
                    <MenuItem value={"B+"}>{"B+"}</MenuItem>
                    <MenuItem value={"B"}>{"B"}</MenuItem>
                    <MenuItem value={"C+"}>{"C+"}</MenuItem>
                    <MenuItem value={"C"}>{"C"}</MenuItem>
                    <MenuItem value={"D"}>{"D"}</MenuItem>
                    <MenuItem value={"D1"}>{"D1"}</MenuItem>
                    <MenuItem value={"D2"}>{"D2"}</MenuItem>
                    <MenuItem value={"D3"}>{"D3"}</MenuItem>
                  </Select>
                  {/* {console.log("se : " + se)} */}
                </FormControl>
              </div>

              <div className="subject">
                <p>
                  <strong>Data Mining and Warehousing</strong>
                </p>

                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                  <InputLabel id="demo-select-small">Grades</InputLabel>
                  <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={dmw}
                    label="Grade"
                    defaultValue=""
                    onChange={(e) => {
                      setDmw(e.target.value);
                      // addgrade.pop();
                      setAddgrade([...addgrade, e.target.value]);
                    }}
                  >
                    <MenuItem value={"A++"}>{"A++"}</MenuItem>
                    <MenuItem value={"A+"}>{"A+"}</MenuItem>
                    <MenuItem value={"A"}>{"A"}</MenuItem>
                    <MenuItem value={"B+"}>{"B+"}</MenuItem>
                    <MenuItem value={"B"}>{"B"}</MenuItem>
                    <MenuItem value={"C+"}>{"C+"}</MenuItem>
                    <MenuItem value={"C"}>{"C"}</MenuItem>
                    <MenuItem value={"D"}>{"D"}</MenuItem>
                    <MenuItem value={"D1"}>{"D1"}</MenuItem>
                    <MenuItem value={"D2"}>{"D2"}</MenuItem>
                    <MenuItem value={"D3"}>{"D3"}</MenuItem>
                  </Select>
                  {/* {console.log("dmw : " + dmw)} */}
                </FormControl>
              </div>
              <div className="subject">
                <p>
                  <strong>LAB - Operating Systems</strong>
                </p>

                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                  <InputLabel id="demo-select-small">Grades</InputLabel>
                  <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    defaultValue=""
                    value={los}
                    label="Grade"
                    onChange={(e) => {
                      setLos(e.target.value);
                      // addgrade.pop();
                      setAddgrade([...addgrade, e.target.value]);
                    }}
                  >
                    <MenuItem value={"A++"}>{"A++"}</MenuItem>
                    <MenuItem value={"A+"}>{"A+"}</MenuItem>
                    <MenuItem value={"A"}>{"A"}</MenuItem>
                    <MenuItem value={"B+"}>{"B+"}</MenuItem>
                    <MenuItem value={"B"}>{"B"}</MenuItem>
                    <MenuItem value={"C+"}>{"C+"}</MenuItem>
                    <MenuItem value={"C"}>{"C"}</MenuItem>
                    <MenuItem value={"D"}>{"D"}</MenuItem>
                    <MenuItem value={"D1"}>{"D1"}</MenuItem>
                    <MenuItem value={"D2"}>{"D2"}</MenuItem>
                    <MenuItem value={"D3"}>{"D3"}</MenuItem>
                  </Select>
                  {/* {console.log("los : " + los)} */}
                </FormControl>
              </div>
              <div className="subject">
                <p>
                  <strong>LAB - Design and Analysis of Algorithms</strong>
                </p>

                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                  <InputLabel id="demo-select-small">Grades</InputLabel>
                  <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={ldaa}
                    label="Grade"
                    defaultValue=""
                    onChange={(e) => {
                      setLdaa(e.target.value);
                      // addgrade.pop();
                      setAddgrade([...addgrade, e.target.value]);
                    }}
                  >
                    <MenuItem value={"A++"}>{"A++"}</MenuItem>
                    <MenuItem value={"A+"}>{"A+"}</MenuItem>
                    <MenuItem value={"A"}>{"A"}</MenuItem>
                    <MenuItem value={"B+"}>{"B+"}</MenuItem>
                    <MenuItem value={"B"}>{"B"}</MenuItem>
                    <MenuItem value={"C+"}>{"C+"}</MenuItem>
                    <MenuItem value={"C"}>{"C"}</MenuItem>
                    <MenuItem value={"D"}>{"D"}</MenuItem>
                    <MenuItem value={"D1"}>{"D1"}</MenuItem>
                    <MenuItem value={"D2"}>{"D2"}</MenuItem>
                    <MenuItem value={"D3"}>{"D3"}</MenuItem>
                  </Select>
                  {/* {console.log("ldaa : " + ldaa)} */}
                </FormControl>
              </div>
              <div className="subject">
                <p>
                  <strong>LAB - Data Mining and Warehousing</strong>
                </p>

                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                  <InputLabel id="demo-select-small">Grades</InputLabel>
                  <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={ldmw}
                    label="Grade"
                    defaultValue=""
                    onChange={(e) => {
                      setLdmw(e.target.value);
                      // addgrade.pop();
                      setAddgrade([...addgrade, e.target.value]);
                    }}
                  >
                    <MenuItem value={"A++"}>{"A++"}</MenuItem>
                    <MenuItem value={"A+"}>{"A+"}</MenuItem>
                    <MenuItem value={"A"}>{"A"}</MenuItem>
                    <MenuItem value={"B+"}>{"B+"}</MenuItem>
                    <MenuItem value={"B"}>{"B"}</MenuItem>
                    <MenuItem value={"C+"}>{"C+"}</MenuItem>
                    <MenuItem value={"C"}>{"C"}</MenuItem>
                    <MenuItem value={"D"}>{"D"}</MenuItem>
                    <MenuItem value={"D1"}>{"D1"}</MenuItem>
                    <MenuItem value={"D2"}>{"D2"}</MenuItem>
                    <MenuItem value={"D3"}>{"D3"}</MenuItem>
                  </Select>
                  {/* {console.log("ldmw : " + ldmw)} */}
                </FormControl>
              </div>
              <div className="subject">
                <p>
                  <strong>Mini Project</strong>
                </p>

                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                  <InputLabel id="demo-select-small">Grades</InputLabel>
                  <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={mp}
                    label="Grade"
                    defaultValue=""
                    onChange={(e) => {
                      setMp(e.target.value);
                      // addgrade.pop();
                      setAddgrade([...addgrade, e.target.value]);
                    }}
                  >
                    <MenuItem value={"A++"}>{"A++"}</MenuItem>
                    <MenuItem value={"A+"}>{"A+"}</MenuItem>
                    <MenuItem value={"A"}>{"A"}</MenuItem>
                    <MenuItem value={"B+"}>{"B+"}</MenuItem>
                    <MenuItem value={"B"}>{"B"}</MenuItem>
                    <MenuItem value={"C+"}>{"C+"}</MenuItem>
                    <MenuItem value={"C"}>{"C"}</MenuItem>
                    <MenuItem value={"D"}>{"D"}</MenuItem>
                    <MenuItem value={"D1"}>{"D1"}</MenuItem>
                    <MenuItem value={"D2"}>{"D2"}</MenuItem>
                    <MenuItem value={"D3"}>{"D3"}</MenuItem>
                  </Select>
                  {/* {console.log("mp : " + mp)} */}
                </FormControl>
              </div>

              {/* <div
                style={{
                  opacity: 0.5,
                  alignSelf: "center",
                }}
              >
                --------------- Extra --------------
              </div>
              <div className="subject">
                <p>
                  <strong>Cloud Computing</strong>
                </p>

                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                  <InputLabel id="demo-select-small">Grades</InputLabel>
                  <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={cc}
                    label="Grade"
                    defaultValue=""
                    onChange={(e) => {
                      setCc(e.target.value);
                      // addgrade.pop();
                      setAddgrade([...addgrade, e.target.value]);
                    }}
                  >
                    <MenuItem value={"A++"}>{"A++"}</MenuItem>
                    <MenuItem value={"A+"}>{"A+"}</MenuItem>
                    <MenuItem value={"A"}>{"A"}</MenuItem>
                    <MenuItem value={"B+"}>{"B+"}</MenuItem>
                    <MenuItem value={"B"}>{"B"}</MenuItem>
                    <MenuItem value={"C+"}>{"C+"}</MenuItem>
                    <MenuItem value={"C"}>{"C"}</MenuItem>
                    <MenuItem value={"D"}>{"D"}</MenuItem>
                    <MenuItem value={"D1"}>{"D1"}</MenuItem>
                    <MenuItem value={"D2"}>{"D2"}</MenuItem>
                    <MenuItem value={"D3"}>{"D3"}</MenuItem>
                  </Select>
                  // {console.log("cc : " + cc)}
                </FormControl>
              </div> */}
              <div
                style={{
                  //   height: "1px",
                  width: "95%",
                  border: "0.5px solid grey",
                  margin: "0.5rem",
                }}
              ></div>
              <div className="calculate_button">
                <Button
                  variant="contained"
                  color="success"
                  onClick={handleCalculate}
                >
                  Calculate
                </Button>
              </div>
            </div>
          </div>
        </div>
        {/* =================================  select grades Tables ====================== */}
      </div>
    </>
  );
}
export default Grades;

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
