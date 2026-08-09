import students from "../data/students";
import StudentCard from "../components/StudentCard";

function StudentList() {
  return (
    <div className="page">
      <h1>Student List</h1>

      <p className="description">
        Select your favourite students from the list below.
      </p>

      <div className="student-container">
        {students.map((student) => (
          <StudentCard
            key={student.id}
            student={student}
          />
        ))}
      </div>
    </div>
  );
}

export default StudentList;