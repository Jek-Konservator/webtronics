import React, { FC } from "react";
import { TFormInputKit } from "./types";
import {FormInputKitStyled} from "./style";

export const FormInputKit: FC<TFormInputKit> = ({ value = "", ...props }) => {
  return <FormInputKitStyled value={value} {...props} />;
};

