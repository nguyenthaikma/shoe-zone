import { notification } from "antd";
import { useMutation } from "react-query";
import { clearStoredAuth, setStoredAuth } from "../../libs/localStorage";
import { singIn } from "../apis";

export const useMutationLogin = () => {
  return useMutation(singIn, {
    onSuccess: async (data) => {
      if (data.statusCode === 200) {
        setStoredAuth(data.data);
        notification.success({ message: data.message || "Login Success!" });
      }
    },
    onError: (error) => {
      clearStoredAuth();
      notification.error({ message: error.message || "Login failure!" });
    },
  });
};
