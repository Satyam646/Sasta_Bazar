import React from "react";
import { FormControl, TextField, FormHelperText } from "@mui/material";
export default function CommonInput({
  variant = "",
  field,
  label = "",
  error = "",
  classes = "",
  type = "text",
  sx = {},
  placeholder = "",
  // onChange,
}) {
  return (
    <FormControl error={error !== ""} fullWidth>
      <TextField
        {...field}
        size="small"
        classes={{
          root: classes,
          input: "hfhgfh",
        }}
        sx={{ backgroundColor: "#ffffff", ...sx }}
        error={error !== ""}
        variant={variant}
        label={label}
        type={type}
        placeholder={placeholder}
        // onChange={onChange}
      />
      {error !== "" && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
}
