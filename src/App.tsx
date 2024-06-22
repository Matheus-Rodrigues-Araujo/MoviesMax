import { Link } from "react-router-dom";
import { terms, footerCategories } from "./constants";
import "./index.css";

function App() {
  return (
    <>
      <header className="w-full">
        <nav className="flex items-center justify-between bg-gray-950 w-full h-20 px-4 md:px-20">
          <Link
            to="/"
            className="text-white font-bold text-3xl md:text-4xl mb-1"
          >
            M★viesMax
          </Link>

          <div className="flex items-center gap-4">
            <Link
              to="/auth/sign-in"
              className="text-white ease-out duration-300 text-md rounded-md font-medium md:inline hover:bg-gray-700 py-1 px-2"
            >
              Sign In
            </Link>
            <Link
              to="/auth/sign-up"
              className="bg-blue-500 ease-out duration-300 py-1 px-2 text-md text-white rounded-md font-medium md:inline hover:bg-blue-600"
            >
              Sign up
            </Link>
          </div>
        </nav>
      </header>
      <main>
        <section
          className="relative promo px-2 flex gap-4 flex-col justify-center items-center min-h-screen"
          style={{ backgroundImage: "url(banner.avif)" }}
        >
          <div className="flex flex-col gap-2">
            <p className="text-cyan font-bold text-center text-2xl">Join us</p>
            <h1 className="text-4xl md:text-7xl font-bold text-center text-white">
              M★viesMax
            </h1>
            <div className="h-1 w-full bg-white"></div>
          </div>
          <p className="text-3xl md:text-4xl font-bold text-center text-white">
            Discover the best movies and series of the moment!
          </p>
          <Link
            to="/auth/sign-up"
            className="px-10 py-2 text-lg font-medium text-black rounded-full bg-cyan ease-out duration-300 hover:bg-blue-600 hover:text-white"
          >
            Sign up now
          </Link>

          <div className="h-10 w-full absolute bottom-0"></div>
        </section>
      </main>
      <footer className="px-4 bg-gray-950 flex flex-col items-center py-5 md:gap-2">
        <ul className="flex flex-wrap gap-4 text-white justify-evenly items-center">
          {footerCategories.map((item) => (
            <Link
              to={item.route}
              key={item.label}
              className="text-sm md:text-md uppercase font-bold ease-out duration-300 rounded-md hover:bg-gray-700 py-1 px-2"
            >
              {item.label}
            </Link>
          ))}
        </ul>
        <ul className="flex flex-wrap gap-4 text-white text-md justify-evenly items-center md:gap-2">
          {terms.map((item) => (
            <Link to={item.route} key={item.label} className="uppercase text-sm font-light ease-out duration-300 rounded-md hover:bg-gray-700 py-1 px-2">
              {item.label}
            </Link>
          ))}
        </ul>
        <p className="text-white text-[12px] text-center">
          ©2024 MoviesMax Direct Latin America, LLC. All right reserved. MoviesMax is used under license.
        </p>
      </footer>
    </>
  );
}

export default App;
