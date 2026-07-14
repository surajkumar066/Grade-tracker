import { Component } from "react";

class AddStudentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      grade: "",
      error: "",
    };
  }

  handleNameChange = (e) => {
    this.setState({ name: e.target.value });
  };

  handleGradeChange = (e) => {
    this.setState({ grade: e.target.value });
  };

  handleSubmit = () => {
    const { name, grade } = this.state;

    if (name.trim() === "") {
      this.setState({ error: "Name cannot be empty" });
      return;
    }

    const gradeNum = Number(grade);
    if (isNaN(gradeNum) || gradeNum < 0 || gradeNum > 100) {
      this.setState({ error: "Grade must be a number between 0 and 100" });
      return;
    }

    this.props.onAdd(name, gradeNum);
    this.setState({ name: "", grade: "", error: "" });
  };

  render() {
    return (
      <div className="add-student-form">
        <input
          type="text"
          placeholder="Student name"
          value={this.state.name}
          onChange={this.handleNameChange}
        />
        <input
          type="number"
          placeholder="Grade (0-100)"
          value={this.state.grade}
          onChange={this.handleGradeChange}
        />
        <button onClick={this.handleSubmit}>Add Student</button>
        {this.state.error && <p className="form-error">{this.state.error}</p>}
      </div>
    );
  }
}

export default AddStudentForm;