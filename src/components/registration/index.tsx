import React, { useState } from "react";
import {
  RegistrationFormStyled,
  RegistrationInputsStyled,
  RegistrationStyled,
} from "./style";
import { Field } from "rc-field-form";
import { FormInputKit } from "../../UiKit/form/formInput";
import axios from "axios";
import { IFormRegValues } from "./type";
import { useNavigate } from "react-router-dom";
import { TextButtonKit } from "../../UiKit/buttons/text";
import { LoadingButtonKit } from "../../UiKit/buttons/loadingButton";

const initialFormValues: IFormRegValues = {
  username: "",
  email: "",
  password1: "",
  password2: "",
  keyword: "",
};

export const Registration = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  let navigate = useNavigate();

  const checkRegistrationErrors = (error: any) => {
    switch (Object.keys(error.response.data)[0]) {
      case "username": {
        return "username";
      }
      case "email": {
        return "email";
      }
      case "password1": {
        return "password1";
      }
      case "password2": {
        return "password2";
      }
      default: {
        return "undefinedError";
      }
    }
  };

  const userRegistration = async (values: IFormRegValues) => {
    setLoading(true);
    try {
      const { data } = await axios.post(
        `http://188.166.119.86:8080/api/user/register/`,
        { ...values }
      );
      if (data) {
        setError("");
        navigate(`/login`);
        setLoading(false);
      }
    } catch (error: any) {
      setError(checkRegistrationErrors(error));
      setLoading(false);
    }
  };
  return (
    <RegistrationStyled>
      <h1>Регистрация</h1>
      <RegistrationFormStyled
        initialValues={initialFormValues}
        onFinish={(values) => {
          userRegistration(values as IFormRegValues);
        }}
      >
        <RegistrationInputsStyled>
          <Field name="username">
            <FormInputKit
              type="text"
              label="Уникальный никнейм"
              error={error === "username" || error === "undefinedError"}
              required={true}
              style={{ width: "300px" }}
            />
          </Field>
          <Field name="email">
            <FormInputKit
              type="email"
              label="E-mail"
              error={error === "email" || error === "undefinedError"}
              required={true}
              style={{ width: "300px" }}
            />
          </Field>
          <Field name="password1">
            <FormInputKit
              type="text"
              label="Пароль"
              error={error === "password1" || error === "undefinedError"}
              inputProps={{
                minLength: 8,
              }}
              required={true}
              style={{ width: "300px" }}
            />
          </Field>
          <Field name="password2">
            <FormInputKit
              type="text"
              label="Подтверждение пароля"
              error={error === "password2" || error === "undefinedError"}
              inputProps={{
                minLength: 8,
              }}
              required={true}
              style={{ width: "300px" }}
            />
          </Field>
          <Field name="keyword">
            <FormInputKit
              type="text"
              label="Контрольное слово"
              error={error === "regError" || error === "undefinedError"}
              required={true}
              style={{ width: "300px" }}
            />
          </Field>
        </RegistrationInputsStyled>
        <LoadingButtonKit
          type="submit"
          loading={loading}
          style={{ width: "200px", height: "60px", marginTop: "30px" }}
        >
          Зарегистрироваться
        </LoadingButtonKit>
      </RegistrationFormStyled>
      <TextButtonKit
        onClick={() => {
          navigate(`/login`);
        }}
      >
        Вход в систему
      </TextButtonKit>
    </RegistrationStyled>
  );
};
