import React from "react";

export const LectureCard = ({ author, date, time, lectureType, title }) => {
  return (
    <div className="lectureCard">
      <div className="lecture__info">
        <h3>{title}</h3>
        <button>{lectureType}</button>
      </div>

      <small>
        <strong>{author}</strong> Scheduled <strong>{title}</strong> at {date} -{" "}
        {time}
      </small>
    </div>
  );
};
