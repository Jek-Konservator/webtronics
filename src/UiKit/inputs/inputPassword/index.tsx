import React, { FC, useState } from "react";
import {InputPasswordKitStyled} from "./style";
import {TInputPasswordKit} from "./types";
import { InputAdornment, IconButton } from "@mui/material";
import { VisibilityOff, Visibility } from "@mui/icons-material";

export const InputPasswordKit: FC<TInputPasswordKit> = (props) => {
  const [showPassword, setShowPassword] = useState(true);
  return (
    <InputPasswordKitStyled
      {...props}
      type={
        props.type === "password"
          ? showPassword
            ? props.type
            : "text"
          : props.type
      }
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            {props.type === "password" && (
              <IconButton
                onClick={() => setShowPassword(!showPassword)}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            )}
          </InputAdornment>
        ),
      }}
    />
  );
};
