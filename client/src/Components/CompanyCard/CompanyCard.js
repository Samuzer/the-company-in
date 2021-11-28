import React from "react";
import "./CompanyCard.css";
import { Card } from "@mui/material";

export const CompanyCard = ({ info }) => {
  return (
    <Card className="card">
      <img alt="logo" src={info.logo} />
      <h2>{info.name}</h2>
      <div>{info.type}</div>
    </Card>
  );
};
