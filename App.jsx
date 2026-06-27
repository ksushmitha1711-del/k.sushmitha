import { useState } from "react";
import "./App.css";
function App() {
  const [students, setStudents] = useState([]);
  const [rollNo, setRollNo] = useState("");
  const [name, setName] = useState("");
  const [marks, setMarks] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!rollNo || !name || !marks) {
      setError("Please fill all fields");
      return;
    }
    const newStudent = { rollNo, name, marks };
    setStudents([...students, newStudent]);
    setRollNo("");
    setName("");
    setMarks("");
    setError("");
  };
  const deleteStudent = (rollNo) => {
    setStudents(
      students.filter((student) => student.rollNo !== rollNo)
    );
  };
  return (
    <div className="container">
      <h1>Student Management System</h1>
      <form onSubmit={handleSubmit}>
        <label>Roll Number</label>
        <input
          type="text"
          value={rollNo}
          onChange={(e) => setRollNo(e.target.value)}
        />
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Marks</label>
        <input
          type="number"
          value={marks}
          onChange={(e) => setMarks(e.target.value)}
        />
        <button type="submit">Add Student</button>
      </form>
      {error && <p className="error">{error}</p>}
      <h2>Student Records</h2>
      {students.length === 0 ? (
        <p>No Records Available</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Roll No</th>
              <th>Name</th>
              <th>Marks</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.rollNo}>
                <td>{student.rollNo}</td>
                <td>{student.name}</td>
                <td>{student.marks}</td>
                <td>
                  <button
                    className="delete-btn"
                    onClick={() => deleteStudent(student.rollNo)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;