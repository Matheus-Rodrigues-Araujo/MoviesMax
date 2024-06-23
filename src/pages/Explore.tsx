import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Explore = () => {
  return (
    <div className="bg-blue-gradient h-screen relative">
      <Navbar/>
      <main>
        <Outlet/>
      </main>
    </div>
  );
};

export default Explore;
