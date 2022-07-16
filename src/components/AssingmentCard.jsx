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
        <button
          style={{
            background:
              assignmentType === "OJ"
                ? "red"
                : assignmentType === "FULL STACK"
                ? "purple"
                : assignmentType === "BACKEND"
                ? "yellow"
                : "#16a34a",
          }}
        >
          {assignmentType}
        </button>
      </div>

      <small>
        <strong>{author}</strong> Scheduled <strong>{problemType}</strong> at{" "}
        {date} - {time}
      </small>
    </div>
  );
};
