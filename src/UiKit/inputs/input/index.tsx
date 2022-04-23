import React, { FC } from "react";
import { InputKitStyled } from "./style";
import { TInputKit } from "./types";

export const InputKit: FC<TInputKit> = (props) => {
  return <InputKitStyled {...props} />;
};
