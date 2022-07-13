import React from "react";
import { AssingmentCard } from "../components/AssingmentCard";
import { Navbar } from "../components/Navbar";
import "../styles/assignment.css";

export const Assignments = () => {
  return (
    <div>
      <Navbar />
      <div className="title">
        <section>
          <h2>Assingments</h2>
        </section>
      </div>
      <section className="list">
        <AssingmentCard />
        <AssingmentCard />
        <AssingmentCard />
        <AssingmentCard />
      </section>
      ;
    </div>
  );
};
