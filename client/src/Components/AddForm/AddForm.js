import React, { useState } from "react";
import "./AddForm.css";

import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

export const AddForm = ({ handleAdd, loading }) => {
  const [domain, setDomain] = useState("");

  const handleClick = () => {
    handleAdd(domain);
    setDomain("");
  };

  return (
    <div className="form">
      <TextField
        variant="standard"
        label="Domain name"
        placeholder="example.com"
        value={domain}
        onChange={e => setDomain(e.target.value)}
      />
      <Button onClick={handleClick} disabled={loading}>
        Add domain
      </Button>
    </div>
  );
};
