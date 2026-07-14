import { Component } from "react";
import StudentItem from "./StudentItem";

class StudentList extends Component {
  render() {
    const { students, onRemove, onUpdateGrade } = this.props;

    if (students.length === 0) {
      return <p className="empty-message">No students to show</p>;
    }

    return (
      <ul className="student-list">
        {students.map((student) => (
          <StudentItem
            key={student.id}
            student={student}
            onRemove={onRemove}
            onUpdateGrade={onUpdateGrade}
          />
        ))}
      </ul>
    );
  }
}

export default StudentList;