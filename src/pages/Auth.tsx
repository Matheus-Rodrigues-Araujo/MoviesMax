import { Outlet } from "react-router-dom";
const Auth = () => {
  return (
    <main className="auth flex min-h-screen w-full justify-between font-inter">
      <Outlet />
      <div className="hidden lg:flex ">
      {/* <div className="auth-banner"> */}
        <img
          src="./src/assets/banner.jpeg"
          alt="movies banner"
          className=" h-100 w-auto object-cover"
        />
      </div>
    </main>
  );
};

export default Auth;
