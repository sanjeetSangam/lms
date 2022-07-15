import React, { useEffect, useState } from "react";
import "../styles/lecture.css";
import { LectureCard } from "../components/LectureCard";
import { Navbar } from "../components/Navbar";
import axios from "axios";
import { getLectures } from "../routes/routes";
import { CircularProgress } from "@mui/material";

export const Lectures = () => {
  const [lectures, setLectures] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(getLectures).then(({ data }) => {
      setLectures(data);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="title">
        <section>
          <h2>Lectures</h2>
        </section>
      </div>
      <section className="list">
        {loading ? (
          <div className="loading__status">
            <CircularProgress />
          </div>
        ) : (
          lectures.length > 0 &&
          lectures.map(({ _id, author, date, time, lectureType, title }) => (
            <div key={_id}>
              <LectureCard
                author={author}
                date={date}
                time={time}
                lectureType={lectureType}
                title={title}
              />
            </div>
          ))
        )}

        {}
      </section>
      ;
    </div>
  );
};
