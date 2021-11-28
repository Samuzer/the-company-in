import React from "react";
import "./CompanyList.css";
import { Grid } from "@mui/material";
import { CompanyCard } from "../CompanyCard/CompanyCard";

export const CompanyList = ({ list }) => {
  return (
    <Grid className="container" container spacing={8} justify="center">
      {list.map(company => (
        <Grid item key={company.id}>
          <CompanyCard info={company} />
        </Grid>
      ))}
    </Grid>
  );
};
