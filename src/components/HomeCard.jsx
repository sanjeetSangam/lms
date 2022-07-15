import React from "react";

export const HomeCard = () => {
  return (
    <div className="homeCard">
      <div className="daily__info">
        <div className="card__time">
          <p>09:00 AM</p>
          <p>LECTURE</p>
        </div>
        <div className="card__info">
          <h2>Scrum 15.07.2022</h2>
          <p>
            <strong>Sibin O</strong> Starting at <strong>09:00 AM</strong>
          </p>

          <div className="btns">
            <button className="scrm" >SCRUM</button>
            <button className="live" >LIVE</button>
          </div>
        </div>
      </div>
      <div className="details">
        <p>Details {">"} </p>
      </div>
    </div>
  );
};
