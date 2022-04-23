import React, { FC } from "react";
import {TextButtonKitStyled} from "./style";
import {TTextButtonKit} from "./types";

export const TextButtonKit: FC<TTextButtonKit> = (props) => {
  return <TextButtonKitStyled {...props} />;
};
