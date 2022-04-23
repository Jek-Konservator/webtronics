import React, { useState } from "react";
import { LoginFormStyled, LoginInputsStyled, LoginStyled } from "./style";
import { Field } from "rc-field-form";
import { FormInputKit } from "../../UiKit/form/formInput";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUserKeys } from "../../reduxToolKit/toolKitSlice";
import { useNavigate } from "react-router-dom";
import { IFormLoginValues } from "./type";
import { TextButtonKit } from "../../UiKit/buttons/text";
import { FormInputPasswordKit } from "../../UiKit/form/formInputPassword";
import { LoadingButtonKit } from "../../UiKit/buttons/loadingButton";

const initialFormValues: IFormLoginValues = {
  email: "",
  emailKey: undefined,
  password: "",
};

export const Login = () => {
  const [awaitEmailKey, setAwaitEmailKey] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);


  let navigate = useNavigate();
  const dispatch = useDispatch();

  const checkLoginErrors = (errors: any) => {
    switch (errors.response.data.Error[0]) {
      case "The credentials is invalid": {
        return "loginError";
      }
      case "The user is not active": {
        return "userNotActive";
      }
      case "The code is invalid": {
        return "emailKeyError";
      }
      default: {
        return "undefinedError";
      }
    }
  };

  const userLogin = async (values: IFormLoginValues) => {
    setLoading(true);
    try {
      const { data } = await axios.post(
        `http://188.166.119.86:8080/api/user/login/`,
        {
          email: values.email,
          code: values.emailKey,
        }
      );
      if (data.access) {
        setAwaitEmailKey(false);
        setError("");
        setLoading(false);
        dispatch(setUserKeys({ refresh: data.refresh, access: data.access }));
        navigate(`/`);
      }
    } catch (error: any) {
      setError(checkLoginErrors(error));
      setLoading(false);
    }
  };

  const userPreLogin = async (values: IFormLoginValues) => {
    setLoading(true);
    try {
      const { data } = await axios.post(
        `http://188.166.119.86:8080/api/user/pre-login/`,
        {
          login: values.email,
          password: values.password,
        }
      );
      if (data.detail) {
        setAwaitEmailKey(true);
        setError("");
        setLoading(false);
      }
    } catch (errors: any) {
      setError(checkLoginErrors(errors));
      setLoading(false);
    }
  };

  return (
    <LoginStyled>
      <h1>Вход в систему</h1>
      {error === "loginError" && <h3>Неверный логин или пароль</h3>}
      {error === "userNotActive" && <h3>Подтвердите электронную почту</h3>}
      <LoginFormStyled
        initialValues={initialFormValues}
        onFinish={(values) => {
          !awaitEmailKey
            ? userPreLogin(values as IFormLoginValues)
            : userLogin(values as IFormLoginValues);
        }}
      >
        <LoginInputsStyled>
          <Field name="email">
            <FormInputKit
              type="email"
              label="E-mail"
              error={
                error === "userNotActive" ||
                error === "loginError" ||
                error === "undefinedError"
              }
              inputProps={
                awaitEmailKey
                  ? {
                      readOnly: true,
                      disableUnderline: true,
                    }
                  : undefined
              }
              required={true}
              style={{ width: "300px" }}
            />
          </Field>
          {!awaitEmailKey && (
            <Field name="password">
              <FormInputPasswordKit
                type="password"
                label="Пароль"
                error={
                  error === "userNotActive" ||
                  error === "loginError" ||
                  error === "undefinedError"
                }
                inputProps={{
                  minLength: 8,
                }}
                required={true}
                style={{ width: "300px" }}
              />
            </Field>
          )}
          {awaitEmailKey && (
            <>
              <span>
                <b>Код подтверждения, полученный по e-mail</b>
              </span>
              <Field name="emailKey">
                <FormInputKit
                  type="number"
                  label="Код"
                  error={
                    error === "emailKeyError" || error === "undefinedError"
                  }
                  onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                    e.target.value = Math.max(0, parseInt(e.target?.value))
                      .toString()
                      .slice(0, 4);
                  }}
                  required={true}
                  style={{ width: "200px", marginTop: "12px" }}
                />
              </Field>
            </>
          )}
        </LoginInputsStyled>
        <LoadingButtonKit
          loading={loading}
          style={{ width: "200px", height: "60px", marginTop: "30px" }}
          type="submit"
        >
          Войти
        </LoadingButtonKit>
      </LoginFormStyled>
      {awaitEmailKey && (
        <TextButtonKit
          onClick={() => {
            setAwaitEmailKey(false);
          }}
        >
          Вернуться к авторизации
        </TextButtonKit>
      )}

      <TextButtonKit
        onClick={() => {
          navigate(`/registration`);
        }}
      >
        Регистрация
      </TextButtonKit>
    </LoginStyled>
  );
};
//Todo swicth
