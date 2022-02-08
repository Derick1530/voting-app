import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-white text-center">
      <h1 className="text-3xl font-bold">Voters</h1>
      <p class="capitalize text-2xl pb-5"> online voting made easy</p>

      <Link to="/login">
        <span className="p-2 bg-orange-500 font-bold text-white">
          Get started
        </span>
      </Link>
    </div>
  );
};

export default Home;
// text-white p-10 mb-10 bg-black bg-opacity-10 rounded-lg
