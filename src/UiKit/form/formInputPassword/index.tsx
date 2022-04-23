import React, { FC } from "react";
import { TFormInputKit } from "./types";
import {FormInputPasswordKitStyled} from "./style";

export const FormInputPasswordKit: FC<TFormInputKit> = ({ value = "", ...props }) => {
  return <FormInputPasswordKitStyled value={value} {...props} />;
};

