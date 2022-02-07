import React, { useState } from "react";

const Form = () => {
  const users = {
    email: "cesko@gmail",
    regno: 12,
  };
  const [user, setUser] = useState({ email: "", regno: "" });


  return (
    <form className="flex flex-col text-white  font-2xl justify-center  text-left bg-blue-600 p-8 ">
      <h1 className="capitalize font-4xl text-center font-bold mb-4">Login</h1>
      <label>Name:</label>
      <input type="text" name="name" />

      <label className=" py-2">Email: </label>
      <input type="text" name="email" />

      <label>RegNo:</label>
      <input type="number" name="reg" />

      <div className="flex justify-end">
        <input
          className="p-2 rounded-lg bg-orange-500 font-bold text-white mt-8 cursor-pointer"
          type="submit"
          id="submit"
          value="Login"
        />
      </div>
    </form>
  );
};

export default Form;
