import React, { FC } from "react";
import { LoadingButtonKitStyled } from "./style";
import { TLoadingButtonKit } from "./types";

export const LoadingButtonKit: FC<TLoadingButtonKit> = (props) => {
  return <LoadingButtonKitStyled {...props} />;
};
