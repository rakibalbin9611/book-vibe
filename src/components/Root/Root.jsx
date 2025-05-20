import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
const Root = () => {
  return (
    <div className="max-w-6xl mx-auto work-sans">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
