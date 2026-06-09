import { Outlet } from "react-router";
import NavBar from "./Navbar";
import Footer from "./Footer";

const AuthLayout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default AuthLayout;
