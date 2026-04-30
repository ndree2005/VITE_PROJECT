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
      <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-size-[20px_20px]"></div>
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
