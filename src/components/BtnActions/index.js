import React from "react";
import Button from "@mui/material/Button";
import { Tooltip } from "@mui/material";

const index = ({ title, variant, endIcon, click, type, color, children }) => {
  return (
    <>
      <Tooltip title={title}>
        <Button
          variant={variant}
          startIcon={endIcon}
          onClick={click}
          type={type}
          color={color}
          style={{ minWidth: "300px", height: "50px", width: "60%" }}
        >
          {children}
        </Button>
      </Tooltip>
    </>
  );
};

export default index;
