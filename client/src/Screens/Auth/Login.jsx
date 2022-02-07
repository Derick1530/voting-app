import React from "react";
import StepProgressBar from "react-step-progress";
import "react-step-progress/dist/index.css";
import Form from "../Entity/Form";
import List from "../Entity/List";
import "../Home";
import "./Style.css";

export default function App() {
  const title = "Login With Credentials";

  const step1Content = (
    <div className="lg:px-48 text-white">
      <Form />
    </div>
  );
 
  const step2Content = (
    <div className="lg:px-48 text-white">
      <List/>
    </div>
  );

  const step3Content = (
    <div className="lg:px-48">
      
    </div>
  );
  const step4Content = (
    <div className="lg:px-48">
      
    </div>
  );

  // setup step validators, will be called before proceeding to the next step

  function step1Validator() {
    return true;
  }
  function step2Validator() {
    return true;
  }
  function step3Validator() {
    return true;
  }
  return (
    <div className=" flex flex-col justify-center  items-center mx-w-full ">
      <h2 class="lg:text-2xl text-white font-bold text-3xl">{title}</h2>
      <StepProgressBar
        startingStep={0}
        steps={[
          {
            label: "Login",
            name: "Login",
            content: step1Content,
            validator: step1Validator,
          },
          {
            label: "Candidates",
            name: "Candidates",
            content: step2Content,
          },
          {
            label: "Role",
            name: "Role",
            content: step3Content,
            validator: step2Validator,
          },
          {
            label: "Finish",
            name: "Finish",
            content: step4Content,
            validator: step3Validator,
          },
        ]}
      />
    </div>
  );
}
