import React from "react";
import { Link } from "react-router-dom";
import SurveysList from "./surveys/SurveysList";
export default function Dashboard() {
  return (
    <div>
      <SurveysList />
      <div className="fixed-action-btn">
        <Link className="btn-floating btn-large red" to="/surveys/new">
          <i className="material-icons">add</i>
        </Link>
      </div>
    </div>
  );
}
