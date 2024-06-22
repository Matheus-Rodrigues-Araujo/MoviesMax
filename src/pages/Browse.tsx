import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Browse = async () => {
  return (
    <div className="bg-blue-gradient h-screen" >
      <Navbar/>
      <main>
        <Outlet/>
      </main>
    </div>
  );
};

export default Browse;
