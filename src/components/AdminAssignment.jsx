import React, { useEffect, useState } from "react";
import { AdminNavbar } from "./AdminNavbar";
import "../styles/admin.css";
import axios from "axios";
import { getAssignments, postAssignment } from "../routes/routes";
import { CircularProgress } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AdminAssignment = () => {
  const [lectureData, setLectureData] = useState({
    title: null,
    author: null,
    date: null,
    time: null,
    assignmentType: null,
    problemType: null,
    assignmentProblems: [],
  });
  const [assignments, setAssignments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [problemText, setProblemText] = useState("");

  const toastOptions = {
    position: "bottom-right",
    autoClose: 5000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const allAss = () => {
    axios.get(getAssignments).then(({ data }) => {
      setAssignments(data);
    });
  };

  useEffect(() => {
    allAss();
  }, []);

  const addProb = () => {
    if (problemText.length > 0) {
      setLectureData({
        ...lectureData,
        assignmentProblems: [...lectureData.assignmentProblems, problemText],
      });
      toast.success("Problem added", toastOptions);

      setProblemText("");
    }
  };

  const handleInput = (e) => {
    setLoading(false);
    setLectureData({ ...lectureData, [e.target.className]: e.target.value });
  };

  const postLectureData = async (e) => {
    e.preventDefault();
    setLoading(true);

    const {
      title,
      author,
      date,
      time,
      assignmentType,
      problemType,
      assignmentProblems,
    } = lectureData;

    if (
      title &&
      author &&
      date &&
      time &&
      assignmentType &&
      problemType &&
      assignmentProblems.length > 0
    ) {
      try {
        await axios.post(postAssignment, lectureData);
        setLoading(false);
        allAss();
        toast.success("Assignment added", toastOptions);
      } catch (error) {
        toast.error(error.message, toastOptions);
        setLoading(false);
      }
    } else {
      toast.error("Please add all details", toastOptions);
      setLoading(false);
    }
  };

  return (
    <>
      <div>
        <AdminNavbar />

        <div className="title">
          <section>
            <h2>Add Assignment ({assignments?.length})</h2>
          </section>
        </div>
        <section className="lectures">
          <div className="form__upload">
            <form action="" onSubmit={postLectureData}>
              <label htmlFor="">Title of Assignment</label>
              <input type="text" onChange={handleInput} className="title" />
              <label htmlFor="">Name of lecturer</label>
              <input type="text" onChange={handleInput} className="author" />
              <label htmlFor="">Assignment Date</label>
              <input type="date" onChange={handleInput} className="date" />
              <label htmlFor="">Assignment time</label>
              <input type="time" onChange={handleInput} className="time" />
              <select
                name=""
                id=""
                onChange={handleInput}
                className="assignmentType"
              >
                <option value="">Select assignment type</option>
                <option value="FRONTEND">Frontend</option>
                <option value="OJ">OJ</option>
                <option value="FULL STACK">FULL STACK</option>
                <option value="BACKEND">Backend</option>
              </select>

              <select
                name=""
                id=""
                onChange={handleInput}
                className="problemType"
              >
                <option value="">Select Problem type</option>
                <option value="Evaluation Problem's">Evaluation</option>
                <option value="Assignment Problem's">Assignment</option>
                <option value="Cdoing Problem's">Coding</option>
              </select>

              <div className="probelms">
                <label htmlFor="">Add Assignment Problems (Mandatory) </label>

                <div className="add">
                  <input
                    type="text"
                    className="probIn"
                    value={problemText}
                    onChange={(e) => setProblemText(e.target.value)}
                  />
                  <button type="button" className="prob" onClick={addProb}>
                    Add Problems
                  </button>
                </div>
              </div>

              <button disabled={loading}>
                {loading ? <CircularProgress /> : "Add Assignment"}
              </button>
            </form>
          </div>
        </section>
      </div>
      <ToastContainer />
    </>
  );
};
