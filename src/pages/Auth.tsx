import { Outlet } from "react-router-dom";
const Auth = () => {
  return (
    <main className="bg-blue-gradient flex min-h-screen w-full justify-between font-inter">
      <Outlet />
      <div className="hidden xl:flex ">
      {/* <div className="auth-banner"> */}
        <img
          src="banner.avif"
          alt="movies banner"
          className=" h-100 w-auto object-cover"
        />
      </div>
    </main>
  );
};

export default Auth;
