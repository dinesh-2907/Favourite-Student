import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";

function StudentCard({ student, isFavouritePage = false }) {
  const { favourites, addToFavourite, removeFromFavourite } =
    useContext(StudentContext);

  const alreadyFavourite = favourites.some(
    (item) => item.id === student.id
  );

  return (
    <div className="student-card">
      <div className="student-info">
        <h3>{student.name}</h3>
        <p>Roll Number: {student.rollNumber}</p>
        <p>Student ID: {student.id}</p>
      </div>

      {!isFavouritePage ? (
        <button
          className={
            alreadyFavourite
              ? "button disabled"
              : "button favourite"
          }
          onClick={() => addToFavourite(student)}
          disabled={alreadyFavourite}
        >
          {alreadyFavourite
            ? "Already Favourite"
            : "Add to Favourite"}
        </button>
      ) : (
        <button
          className="button remove"
          onClick={() => removeFromFavourite(student.id)}
        >
          Remove
        </button>
      )}
    </div>
  );
}

export default StudentCard;