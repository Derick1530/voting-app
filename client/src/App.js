import React from "react";
import Home from "./Screens/Home";
import Login from "./Screens/Auth/Login";
import Form from "./Screens/Entity/Form";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import List from "./Screens/Entity/List";

function App() {
  return (
    <Router>
      <div className="flex flex-col  justify-center items-center min-h-screen py-20 bg-blue-500">
          <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route exact path="/login" element={<Login/>}/>
              <Route exact path="/form" element={<Form/>}/>
              <Route exact path="/list" element={<List/>}/>

          </Routes>
      </div>
    </Router>
  );
}

export default App;
