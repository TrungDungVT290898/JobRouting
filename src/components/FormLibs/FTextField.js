import * as React from "react";

import TextField from "@mui/material/TextField";
import { Controller, useFormContext } from "react-hook-form";

export default function FTextField({ name, ...other }) {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        return (
          <TextField
            {...field}
            fullWidth
            error={!!error}
            helperText={error?.message}
            {...other}
          />
        );
      }}
    />
  );
}
