import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router";
import { BASE_URL } from "../utils/constants";

const Login = () => {
  const [emailId, setEmailId] = useState("boxonto10@gmail.com");
  const [password, setPassword] = useState("Basanta@Sharma#12345");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/login",
        {
          emailId,
          password,
        },
        {
          withCredentials: true,
        },
      );
      // console.log("User logged in with the data below -", res.data);
      dispatch(addUser(res.data));
      navigate("/profile");
    } catch (err) {
      setError(err?.response?.data || "Something went wrong");
      // console.error(JSON.stringify(err, null, 2));
    }
  };

  return (
    <div className="flex justify-center my-10">
      <div className="card bg-base-300 w-96 shadow-sm">
        <div className="card-body">
          <h2 className="card-title justify-center">Login</h2>
          <div>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Email ID</legend>
              <textarea
                className="textarea-sm border border-gray-400 p-2"
                value={emailId}
                onChange={(e) => setEmailId(e.target.value)}
              ></textarea>
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Password</legend>
              <textarea
                className="textarea-sm border border-gray-400 p-2"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></textarea>
            </fieldset>
          </div>
          {<p className="text-red-500">{error}</p>}
          <div className="card-actions justify-center my-2">
            <button className="btn btn-primary" onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
