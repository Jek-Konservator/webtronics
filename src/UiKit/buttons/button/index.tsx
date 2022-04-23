import React, { FC } from "react";
import { ButtonKitStyled } from "./style";
import { TButtonKit } from "./types";

export const ButtonKit: FC<TButtonKit> = (props) => {
  return <ButtonKitStyled {...props} />;
};
