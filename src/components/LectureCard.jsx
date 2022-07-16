import React, { useEffect, useState } from "react";
import { compareDate } from "../logic/date";

export const LectureCard = ({ author, date, time, lectureType, title }) => {
  const [status, setStatus] = useState(undefined);

  useEffect(() => {
    // console.log(compareDate(date));

    if (compareDate(date) === true) {
      setStatus("PRESENT");
      return;
    }

    setStatus(compareDate(date));
  }, []);

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
        <button
          style={{
            background:
              status === "UPCOMING"
                ? "gray"
                : status === "LIVE"
                ? "GREEN"
                : "#ac2102",
          }}
        >
          {status}
        </button>
      </div>
    </div>
  );
};
