import { Outlet, useNavigate } from "react-router";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import axios from "axios";
import { BASE_URL } from "./utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "./utils/userSlice";
import { useEffect } from "react";

// ✅ Force cookies globally on Axios right here
axios.defaults.withCredentials = true;

const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(BASE_URL + "/profile/view", {
          withCredentials: true,
        });
        dispatch(addUser(res.data));
      } catch (err) {
        if (err.response?.status === 401) {
          navigate("/login");
        } else {
          console.error("API Error", err.message);
        }
      }
    };

    fetchUser();
  }, []);

  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
