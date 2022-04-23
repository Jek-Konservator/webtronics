import { useCallback, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";

export const RegisterVerify = () => {
  const [searchParams] = useSearchParams();
  let navigate = useNavigate();

  const regVerify = useCallback(async () => {
    try {
      const { data } = await axios.post(
        `http://188.166.119.86:8080/api/user/register/verify`,
        {
          key: searchParams.get("key"),
        }
      );
      if (data) {
        navigate(`/login`);
      }
    } catch (err) {}
  }, [searchParams, navigate]);

  useEffect(() => {
    regVerify();
  }, [regVerify]);

  return null;
};
