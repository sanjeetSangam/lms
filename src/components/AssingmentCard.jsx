import React, { useEffect, useState } from "react";
import { compareDate } from "../logic/date";

export const AssingmentCard = ({
  title,
  time,
  date,
  author,
  assignmentType,
  problemType,
}) => {
  const [assignmentStatus, setAssignmentStatus] = useState(undefined);

  useEffect(() => {
    if (compareDate(date) === true) {
      setAssignmentStatus("COMPLETED");
      return;
    }

    setAssignmentStatus(compareDate(date));
  }, []);

  return (
    <div className="assingmentCard">
      <div className="__info">
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
                  ? "#032727"
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

      <div className="__status">
        <button
          style={{
            background:
              assignmentStatus === "UPCOMING"
                ? "gray"
                : assignmentStatus === "LIVE"
                ? "GREEN"
                : "#024cac",
          }}
        >
          {assignmentStatus}
        </button>
      </div>
    </div>
  );
};
