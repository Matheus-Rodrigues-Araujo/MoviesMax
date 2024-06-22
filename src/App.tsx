// import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <>
      <header className="w-full">
        <nav className="flex items-center justify-between bg-gray-950 w-full h-20 px-4 md:px-20">
          <Link to="/" className="text-white font-bold text-4xl mb-1">
            M★viesMax
          </Link>

          <div className="flex items-center gap-4">
            <Link
              to="/sign-in"
              className="text-white text-md rounded-md font-medium hidden md:inline"
            >
              Sign In
            </Link>
            <Link
              to="/sign-up"
              className="bg-blue-500 p-2 text-md text-white rounded-md font-medium hidden md:inline"
            >
              Sign up
            </Link>
          </div>
        </nav>
      </header>
      <main>
        <section className="relative promo px-2 flex gap-4 flex-col justify-center items-center min-h-screen">
          <div className="flex flex-col gap-4">
            <h1 className="text-6xl font-bold text-center text-white">
              M★viesMax | <span className="text-cyan">Join us</span>{" "}
            </h1>
            <div className="h-1 w-full bg-white"></div>
          </div>
          <p className="text-6xl font-bold text-center text-white">
            Discover the best movies and series of the moment!
          </p>
          <Link
            to="/sign-up"
            className="px-10 py-2 text-lg font-medium text-black rounded-full bg-cyan"
          >
            Sign up now
          </Link>

          <div className="h-10 w-full absolute bottom-0"></div>
        </section>
        <section></section>
      </main>
    </>
  );
}

export default App;
