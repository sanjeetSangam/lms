import React from "react";
import { compareDate } from "../logic/date";

export const LectureCard = ({ author, date, time, lectureType, title }) => {
  return (
    <div className="lectureCard">
      <div className="__info">
        <div className="lecture__info">
          <h3>{title}</h3>
          <button style={{ background: lectureType === "REC" && "red" }}>
            {lectureType}
          </button>
        </div>

        <small>
          <strong>{author}</strong> Scheduled <strong>{title}</strong> at {date}{" "}
          - {time}
        </small>
      </div>

      <div className="__status">
        <button>{compareDate(date) ? "Scheduled" : "Present"}</button>
      </div>
    </div>
  );
};
