import { Component } from "react";
import StudentList from "./components/StudentList";
import AddStudentForm from "./components/AddStudentForm";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      filter: "all",
      sortOrder: null,
    };
  }

  componentDidMount() {
    console.log("App mounted - loading sample students");
    const sampleStudents = [
      { id: 1, name: "Aman Sharma", grade: 78 },
      { id: 2, name: "Priya Singh", grade: 35 },
      { id: 3, name: "Rohit Verma", grade: 92 },
    ];
    this.setState({ students: sampleStudents });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.students.length !== this.state.students.length) {
      console.log("Student list changed - new count:", this.state.students.length);
    }
  }

  componentWillUnmount() {
    console.log("App unmounting - cleanup here if needed");
  }

  addStudent = (name, grade) => {
    const newStudent = {
      id: Date.now(),
      name,
      grade,
    };
    this.setState((prevState) => ({
      students: [...prevState.students, newStudent],
    }));
  };

  removeStudent = (id) => {
    this.setState((prevState) => ({
      students: prevState.students.filter((s) => s.id !== id),
    }));
  };

  updateGrade = (id, newGrade) => {
    this.setState((prevState) => ({
      students: prevState.students.map((s) =>
        s.id === id ? { ...s, grade: newGrade } : s
      ),
    }));
  };

  setFilter = (filter) => {
    this.setState({ filter });
  };

  toggleSort = () => {
    this.setState((prevState) => ({
      sortOrder: prevState.sortOrder === "asc" ? "desc" : "asc",
    }));
  };

  getVisibleStudents() {
    let list = [...this.state.students];

    if (this.state.filter === "passed") {
      list = list.filter((s) => s.grade >= 40);
    } else if (this.state.filter === "failed") {
      list = list.filter((s) => s.grade < 40);
    }

    if (this.state.sortOrder === "asc") {
      list.sort((a, b) => a.grade - b.grade);
    } else if (this.state.sortOrder === "desc") {
      list.sort((a, b) => b.grade - a.grade);
    }

    return list;
  }

  render() {
    const visibleStudents = this.getVisibleStudents();

    return (
      <div className="app">
        <h1>Student Grade Tracker</h1>

        <AddStudentForm onAdd={this.addStudent} />

        <div className="controls">
          <div className="filter-buttons">
            <button onClick={() => this.setFilter("all")}>All</button>
            <button onClick={() => this.setFilter("passed")}>Passed</button>
            <button onClick={() => this.setFilter("failed")}>Failed</button>
          </div>
          <button onClick={this.toggleSort}>
            Sort by Grade ({this.state.sortOrder || "none"})
          </button>
        </div>

        <StudentList
          students={visibleStudents}
          onRemove={this.removeStudent}
          onUpdateGrade={this.updateGrade}
        />
      </div>
    );
  }
}

export default App;