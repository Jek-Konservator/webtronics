import styled from "@emotion/styled";
import Form from "rc-field-form";

export const LoginStyled = styled.div`
  min-width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LoginInputsStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2{
    text-align: center;
  }
`;

export const LoginFormStyled = styled(Form)`
  width: 310px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
