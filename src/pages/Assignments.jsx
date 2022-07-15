import { CircularProgress } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { AssingmentCard } from "../components/AssingmentCard";
import { Navbar } from "../components/Navbar";
import { getAssignments } from "../routes/routes";
import "../styles/assignment.css";

export const Assignments = () => {
  const [assignments, setAssignments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(getAssignments).then(({ data }) => {
      setAssignments(data);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="title">
        <section>
          <h2>Assingments</h2>
        </section>
      </div>
      <section className="list">
        {loading ? (
          <div className="loading__status">
            <CircularProgress />
          </div>
        ) : (
          assignments.length > 0 &&
          assignments.map(
            ({
              _id,
              title,
              time,
              date,
              author,
              assignmentType,
              problemType,
            }) => (
              <div key={_id}>
                <AssingmentCard
                  title={title}
                  time={time}
                  date={date}
                  author={author}
                  assignmentType={assignmentType}
                  problemType={problemType}
                />
              </div>
            )
          )
        )}
      </section>
      ;
    </div>
  );
};
