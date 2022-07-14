import React from "react";

export const AssingmentCard = ({
  title,
  time,
  date,
  author,
  assignmentType,
  problemType,
}) => {
  return (
    <div className="assingmentCard">
      <div className="assignment__info">
        <h3>{title}</h3>
        <button>{assignmentType}</button>
      </div>

      <small>
        <strong>{author}</strong> Scheduled <strong>{problemType}</strong> at{" "}
        {date} - {time}
      </small>
    </div>
  );
};
