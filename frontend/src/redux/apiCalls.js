import { loginFailure, loginStart, loginSuccess } from "./customerRedux";
import { publicRequest } from "../requestMethods";
import axios from "axios";

// export const login = async (dispatch, customer) => {
//   dispatch(loginStart());
//   try {
//     const res = await axios.post(
//       "http://localhost:8070/api/auth/login",
//       customer
//     );
//     dispatch(loginSuccess(res.data));
//   } catch (err) {
//     dispatch(loginFailure());
//   }
// };

export const login = async (dispatch, customer) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", customer);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};
