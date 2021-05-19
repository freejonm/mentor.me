import React from "react";
import "./index.scss"

export const PotentialConnections = ({ children }) => {
  return (
    <div className="list-overflow-container">
        <h3>Mentor Suggestions</h3>
      <ul className="list-group">
        {children}
      </ul>
    </div>
  );
};