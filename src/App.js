import Header from "./components/Header/Header";
import LeftCoursesMenu from "./components/LeftCorsesMenu/LeftCoursesMenu";
import MainMenu from "./components/MainMenu/MainMenu";
import CourseMenu from "./components/CourseMenu/CourseMenu";
import { Navigate, Routes, Route, Link } from "react-router-dom"
import StartMenu from "./components/CourseMenu/StartMenu/StartMenu";
import React from "react";
import WebinarMenu from "./components/CourseMenu/WebinarMenu/WebinarMenu";
import PastWebs from "./components/CourseMenu/WebinarMenu/PastWebs/PastWebs";
import NextWebs from "./components/CourseMenu/WebinarMenu/NextWebs/NextWebs";

function App() {
  return (
      <div>
          <Header/>
          <div className={"start"}>
              <LeftCoursesMenu/>
              <Routes>
                  <Route path="/" element={<MainMenu/>}/>
                  <Route path="/course/:id/" element={<CourseMenu/>}>
                      <Route index element={<Navigate to="start" replace/>}/>
                      <Route path="start" element={<StartMenu/>}></Route>
                      <Route path="web/" element={<WebinarMenu/>}>
                          <Route index element={<Navigate to="past" replace/>}/>
                          <Route path="past" element={<PastWebs/>}/>
                          <Route path="next" element={<NextWebs/>}/>
                      </Route>
                  </Route>
              </Routes>
              <div className={"pysto"}></div>
          </div>
      </div>
  );
}

export default App;
