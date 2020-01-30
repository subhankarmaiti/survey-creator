import React from "react";
import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div>
      Dashboard
      <div className="fixed-action-btn">
        <Link className="btn-floating btn-large red" to="/surveys/new">
          <i className="material-icons">add</i>
        </Link>
      </div>
    </div>
  );
}
