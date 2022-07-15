import React, { useEffect, useState } from "react";
import { AdminNavbar } from "./AdminNavbar";
import "../styles/admin.css";
import axios from "axios";
import { getLectures, postLecture } from "../routes/routes";
import { CircularProgress } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AdminLecture = () => {
  const [lectureData, setLectureData] = useState({
    title: null,
    author: null,
    date: null,
    time: null,
    lectureType: null,
  });
  const [loading, setLoading] = useState(false);
  const [lectures, setLectures] = useState([]);

  const toastOptions = {
    position: "bottom-right",
    autoClose: 5000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const allLect = () => {
    axios.get(getLectures).then(({ data }) => {
      setLectures(data);
    });
  };

  useEffect(() => {
    allLect();
  }, []);

  const handleInput = (e) => {
    setLoading(false);
    setLectureData({ ...lectureData, [e.target.className]: e.target.value });
  };

  const postLectureData = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { title, author, date, time, lectureType } = lectureData;

    if (title && author && date && time && lectureType) {
      try {
        let res = await axios.post(postLecture, lectureData);
        setLoading(false);
        allLect();
        toast.success("Lecture added", toastOptions);
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
            <h2>Add Lecture ({lectures.length}) </h2>
          </section>
        </div>
        <section className="lectures">
          <div className="form__upload">
            <form action="" onSubmit={postLectureData}>
              <label htmlFor="">Title of Lecture</label>
              <input type="text" onChange={handleInput} className="title" />
              <label htmlFor="">Name of lecturer</label>
              <input type="text" onChange={handleInput} className="author" />
              <label htmlFor="">Date of lecture</label>
              <input type="date" onChange={handleInput} className="date" />
              <label htmlFor="">Time of lecture</label>
              <input type="time" onChange={handleInput} className="time" />
              <select
                name=""
                id=""
                onChange={handleInput}
                className="lectureType"
              >
                <option value="">Select leture type</option>
                <option value="LIVE">Live</option>
                <option value="REC">Recorded</option>
              </select>

              <button disabled={loading}>
                {loading ? <CircularProgress /> : "Add Lecture"}
              </button>
            </form>
          </div>
        </section>
      </div>
      <ToastContainer />
    </>
  );
};
