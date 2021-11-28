import { Divider } from "@mui/material";
import React, { useState } from "react";
import { AddForm } from "../../Components/AddForm/AddForm";
import { CompanyList } from "../../Components/CompanyList/CompanyList";
import companyServices from "../../Services/companyServices";

export const Main = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleAdd = domain => {
    setLoading(true);
    companyServices
      .getCompanyInfo(domain)
      .then(data => {
        setList(prev => [...prev, data]);
      })
      .catch(err => console.log(err))
      .finally(() => setLoading(false));
  };

  return (
    <div>
      <AddForm handleAdd={handleAdd} loading={loading} />
      <Divider />
      <CompanyList list={list} />
    </div>
  );
};
