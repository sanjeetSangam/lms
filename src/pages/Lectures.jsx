import React from "react";
import "../styles/lecture.css";
import { LectureCard } from "../components/LectureCard";
import { Navbar } from "../components/Navbar";

export const Lectures = () => {
  return (
    <div>
      <Navbar />
      <div className="title">
        <section>
          <h2>Lectures</h2>
        </section>
      </div>
      <section className="list">
        <LectureCard />
        <LectureCard />
        <LectureCard />
        <LectureCard />
      </section>
      ;
    </div>
  );
};
