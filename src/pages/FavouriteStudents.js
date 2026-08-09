import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";
import StudentCard from "../components/StudentCard";

function FavouriteStudents() {
  const { favourites } = useContext(StudentContext);

  return (
    <div className="page">
      <h1>Favourite Students</h1>

      {favourites.length === 0 ? (
        <div className="empty-message">
          <h2>No favourite students added yet</h2>
          <p>
            Go to the Student List and add your favourite students.
          </p>
        </div>
      ) : (
        <div className="student-container">
          {favourites.map((student) => (
            <StudentCard
              key={student.id}
              student={student}
              isFavouritePage={true}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default FavouriteStudents;