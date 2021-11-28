import React from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

export const AddForm = () => {
  return (
    <div>
      <TextField label="Domain name" placeholder="example.com" />
      <Button>Add domain</Button>
    </div>
  );
};
