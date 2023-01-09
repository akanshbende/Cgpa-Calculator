import React from "react";
import { render } from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import { Form, FormGroup, InputGroup, Button, Col, Input } from "reactstrap";

class GradeDropdown extends React.Component {
  onChange(e) {
    this.props.onChange(e.target.value);
  }

  render() {
    return (
      <Input
        type="select"
        name={this.props.name}
        value={this.props.selected}
        onChange={this.onChange.bind(this)}
      >
        <option value="A+">A++</option>
        <option value="A">A+</option>
        <option value="A-">A</option>
        <option value="B+">B+</option>
        <option value="B">B</option>
        <option value="B-">C+</option>
        <option value="C+">C</option>
        <option value="C">D</option>
        <option value="C-">D1</option>
        <option value="D+">D2</option>
        <option value="D">D3</option>
      </Input>
    );
  }
}

const Course = (props) => {
  return (
    <FormGroup row>
      <Col sm={6}>
        <InputGroup>
          <Input
            type="text"
            id={"course" + props.index}
            placeholder="Course Name"
            defaultValue={props.name}
            onChange={(e) => {
              props.onNameChange(e.target.value);
            }}
          />
        </InputGroup>
      </Col>
      <Col sm={6}>
        <GradeDropdown selected={props.score} onChange={props.onScoreChange} />
      </Col>
    </FormGroup>
  );
};

class Application extends React.Component {
  constructor() {
    super();

    this.state = {
      courses: [],
      gpa: -1.0,
      nextKey: 0,
    };
  }

  addCourse() {
    this.setState({
      courses: [
        ...this.state.courses,
        {
          name: "Course",
          score: "A++",
          key: this.state.nextKey,
        },
      ],
      nextKey: this.state.nextKey + 1,
    });
  }

  calculate(e) {
    e.preventDefault();

    let gpa = 0.0;
    for (let course of this.state.courses) {
      switch (course.score) {
        case "A+":
          gpa += 4.0;
          break;

        case "A":
          gpa += 4.0;
          break;

        case "A-":
          gpa += 3.67;
          break;

        case "B+":
          gpa += 3.33;
          break;

        case "B":
          gpa += 3.0;
          break;

        case "B-":
          gpa += 2.67;
          break;

        case "C+":
          gpa += 2.33;
          break;

        case "C":
          gpa += 2.0;
          break;

        case "C-":
          gpa += 1.67;
          break;

        case "D+":
          gpa += 1.33;
          break;

        case "D":
          gpa += 1.0;
          break;

        case "D-":
          gpa += 0.67;
          break;

        case "F":
          gpa += 0.0;
      }
    }

    gpa /= this.state.courses.length;

    this.setState({
      gpa: Math.round(gpa * 100) / 100,
    });
  }

  onNameChange(index, name) {
    let newCourses = this.state.courses.slice();
    newCourses[index].name = name;
    this.setState({
      courses: newCourses,
    });
  }

  onScoreChange(index, score) {
    let newCourses = this.state.courses.slice();
    newCourses[index].score = score;
    this.setState({
      courses: newCourses,
    });
  }

  render() {
    return (
      <div className="application container mt-5">
        <h1>GPA Calculator</h1>
        <Form className="mb-2">
          {this.state.courses.length === 0 ? (
            <p>
              Please press <strong>Add Course</strong> to get started.
            </p>
          ) : (
            ""
          )}
          {this.state.courses.map((course, index) => {
            return (
              <Course
                name={course.name}
                score={course.score}
                index={index}
                key={course.key}
                onNameChange={(name) => {
                  this.onNameChange(index, name);
                }}
                onScoreChange={(score) => {
                  this.onScoreChange(index, score);
                }}
              />
            );
          })}

          <Button
            color="secondary"
            type="button"
            onClick={this.addCourse.bind(this)}
          >
            Add Course
          </Button>
          <Button
            color="primary"
            type="submit"
            className="mr-2"
            onClick={this.calculate.bind(this)}
          >
            Get CGPA
          </Button>
        </Form>
        {this.state.gpa >= 0.0 ? (
          <p>
            Your GPA is <strong>{this.state.gpa}</strong>.
          </p>
        ) : (
          ""
        )}
      </div>
    );
  }
}

render(<Application />, document.getElementById("root"));
