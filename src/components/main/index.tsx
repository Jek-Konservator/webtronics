import React from "react";
import { MainButtonsStyled, MainStyled } from "./style";
import { ButtonKit } from "../../UiKit/buttons/button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearUserKeys } from "../../reduxToolKit/toolKitSlice";

export const Main = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <MainStyled>
      HELLO WORLD
      <MainButtonsStyled>
        <ButtonKit
          onClick={() => {
            dispatch(clearUserKeys());
            navigate(`/login`);
          }}
        >
          Вход в систему
        </ButtonKit>
        <ButtonKit
          onClick={() => {
            dispatch(clearUserKeys());
            navigate(`/registration`);
          }}
        >
          Регистрация
        </ButtonKit>
      </MainButtonsStyled>
    </MainStyled>
  );
};
