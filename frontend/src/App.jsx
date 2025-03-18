import React from "react";
import Layout from "./Layout";
import { Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Dash from "./Dash";
import CreateNotes from "./pages/CreateNotes";
import MyNotes from "./pages/MyNotes";
import UploadImage from "./pages/UploadImage";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="signup" element={<Signup />} />
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
      <Routes>
        <Route path="dash" element={<Dash />}>
          <Route index element={<CreateNotes />} />
          <Route path="create" element={<CreateNotes />} />
          <Route path="mynotes" element={<MyNotes />} />
          <Route path="uploadimages" element = {<UploadImage/>}/>
        </Route>
      </Routes>
    </>
  );
};

export default App;
