import { Component } from "react";

class StudentItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      editGrade: props.student.grade,
    };
  }

  handleGradeChange = (e) => {
    this.setState({ editGrade: e.target.value });
  };

  handleSave = () => {
    const grade = Number(this.state.editGrade);

    if (isNaN(grade) || grade < 0 || grade > 100) {
      alert("Grade must be a number between 0 and 100");
      return;
    }

    this.props.onUpdateGrade(this.props.student.id, grade);
    this.setState({ isEditing: false });
  };

  render() {
    const { student, onRemove } = this.props;
    const passed = student.grade >= 40;

    return (
      <li className={`student-item ${passed ? "passed" : "failed"}`}>
        <span className="student-name">{student.name}</span>

        {this.state.isEditing ? (
          <input
            type="number"
            className="grade-input"
            value={this.state.editGrade}
            onChange={this.handleGradeChange}
          />
        ) : (
          <span className="student-grade">{student.grade}</span>
        )}

        <span className="student-status">
          {passed ? "Passed" : "Failed"}
        </span>

        <div className="student-buttons">
          {this.state.isEditing ? (
            <button onClick={this.handleSave}>Save</button>
          ) : (
            <button onClick={() => this.setState({ isEditing: true })}>
              Edit Grade
            </button>
          )}
          <button className="remove-btn" onClick={() => onRemove(student.id)}>
            Remove
          </button>
        </div>
      </li>
    );
  }
}

export default StudentItem;