import React from "react";
import HomePages from "./layout/HomePages.jsx";
import ProfilePages from "./features/ProfilePages.jsx";
import CalendarPage from "./layout/CalendarPage.jsx";
import SignIn from "./features/auth/sign_in.jsx";
import CoursePage from "./layout/CoursePage.jsx";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="relative h-full w-full text-white">
      <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      <Routes className="">
        <Route path="/" element={<HomePages />} />
        <Route path="/course" element={<CoursePage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/profile" element={<ProfilePages />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </div>
  );
};

export default App;