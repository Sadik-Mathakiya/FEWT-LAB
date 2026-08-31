import P1 from "./Lab-14/P1";
import P2 from "./Lab-14/P2";
import WithClass from "./Lab-15/WithClass";
import WithFunct from "./Lab-15/WithFunct";
import Faculties from "./Lab-17/Faculties";
import MapMethod from "./Lab-17/MapMethod";
import Student from "./Lab-17/Student";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Lab-20/Home";
import About from "./Lab-20/About";
import Contact from "./Lab-20/Contact";
import Layout from "./Lab-20/Layout";
import UseState from "./Lab-21/UseState";
import UseEffect from "./Lab-21/UseEffect";
import A1 from "./Lab-18/P1/A1";
import { useState } from "react";

function App() {
  const [name,SetName]=useState("hello")
  return (
    <>
      {/* <P1/> */}
      {/* <P2/> */}
      {/* <WithClass/> */}
      {/* <WithFunct/> */}
      {/* <MapMethod/> */}
      {/* <Faculties/> */}
      {/* <Student/> */}
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/Home" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter> */}
      {/* <UseState/>
      <UseEffect/> */}
      <A1 name={name} SetName={SetName}/>
    </>
  );
}

export default App;
