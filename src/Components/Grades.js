import React from "react";
import style from "./style.css";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Data from "./Data.json";
// import GradeTypes from "./GradeTypes.json";
function Grades(props) {
  const [branch, setBranch] = useState("");
  const [sem, setSem] = useState("");
  const [grade, setGrade] = useState();
  const [addgrade, setAddgrade] = useState([]);

  const handleGradeChange = () => {
    // console.log(addgrade);
    // addgrade === [] ? addgrade.pop() : setAddgrade([...addgrade, grade]);
    // useEffect(() => {
    //   return () => {
    //     setAddgrade([...addgrade, grade]);
    //   };
    // }, [grade]);

    setAddgrade([...addgrade, grade]);
    console.log(addgrade);
  };

  const handleBranchChange = (event) => {
    setBranch(event.target.value);
  };
  const handleSemChange = (event) => {
    setSem(event.target.value);
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
          <div className="selection">
            <FormControl sx={{ m: 0.5, minWidth: 100 }} size="small">
              <InputLabel id="demo-select-small">Branch</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={branch}
                label="Branch"
                onChange={handleBranchChange}
              >
                {Data.Branches.map((result, index) => (
                  <MenuItem value={result.branch_name} key={index}>
                    {result.branch_name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl sx={{ m: 0.5, minWidth: 120 }} size="small">
              <InputLabel id="demo-select-small">Semester</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={sem}
                label="Semester"
                onChange={handleSemChange}
              >
                {Data.Branches.map(
                  (result) =>
                    result.semesters &&
                    result.semesters.map((elem, index) => (
                      <MenuItem key={index} value={elem.semno}>
                        {elem.semno}
                      </MenuItem>
                    ))
                )}
              </Select>
            </FormControl>
          </div>
        </div>
        {/* =================================  select grades Tables ====================== */}

        <div className="select_grades">
          {branch && sem && (
            <div className="branch_sem_title">
              <p className="branch_name">
                <strong>{branch}</strong>
              </p>
              <p className="sem_name">
                <strong> SEMESTER {sem}</strong>
              </p>
            </div>
          )}

          <div className="enter_grades">
            {Data.Branches &&
              Data.Branches.map(
                (result) =>
                  result.semesters &&
                  result.semesters.map(
                    (elem) =>
                      elem.sem_subjects &&
                      elem.sem_subjects.map((el, index) => (
                        <div key={index}>
                          {branch === result.branch_name &&
                            sem === elem.semno && (
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                }}
                              >
                                <p>{el.sub}</p>
                                {/* =================================SELECTING GRADE VALUES===================================== */}
                                {el.sub && (
                                  <FormControl
                                    sx={{ m: 0.5, minWidth: 120 }}
                                    size="small"
                                  >
                                    <InputLabel id="demo-select-small">
                                      Grades
                                    </InputLabel>
                                    <Select
                                      labelId="demo-select-small"
                                      id="demo-select-small"
                                      value={grade}
                                      label="Grade"
                                      onChange={(e) => setGrade(e.target.value)}
                                    >
                                      {el.sub &&
                                        el.grades &&
                                        el.grades.map((ele) => (
                                          <MenuItem
                                            key={ele.gid}
                                            value={ele.grade}
                                            onClick={handleGradeChange}
                                          >
                                            {ele.grade}
                                            {/* {console.log(grade)} */}
                                          </MenuItem>
                                        ))}
                                    </Select>

                                    {/* "grades":[{grade:"A++"},"A+","A","B+","B","C+","C","D","D1","D2","D3"] */}
                                  </FormControl>
                                )}
                              </div>
                            )}
                          {/* {branch === result.branch_name &&
                            sem === elem.semno && (
                              <Button variant="contained" color="success">
                                Success
                              </Button>
                            )} */}
                        </div>
                      ))
                  )
              )}
            {/*PREVIEW */}
            {addgrade.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        </div>
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
