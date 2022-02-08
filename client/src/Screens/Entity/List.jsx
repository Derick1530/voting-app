import React from "react";

const List = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full text-center">
      <h1 className="lg:text-5xl text-white font-bold text-3xl">Candidates</h1>

      <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
        <a href="cesko.com" className=" p-4 mt-6 text-left border w-96 bg-white rounded-xl">
          <img className=" h-64 w-96 " src="../../image/cesko.jpg" alt="fr" />
          <h3 className="text-2xl font-bold ">Francois-Xavier ;</h3>
          <p className="mt-4 text-l ">web developer, I would love to work with a team that is truly passionate and motivate about what they create.
I pride myself for being a B </p>
        </a>

        <a href="https://derickzr.com" className=" p-4 mt-6 text-left border w-96 bg-white rounded-xl">
          <img className=" h-64 w-96 " src="../../image/derick.jpg" alt="fr" />
          <h3 className="text-2xl font-bold ">Derrick Zihalirwa </h3>
          <p className="mt-4 text-l ">Full stack web developer,I'm a versatile engineer in the sense that I'm comfortable working on a large array of stacks and technologies. I have worked as Frontend Engineer on webs with hundred of users.</p>
        </a>
      </div>
    </div>
  );
};

export default List;
