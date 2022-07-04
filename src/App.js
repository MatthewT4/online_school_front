import Header from "./components/Header/Header";
import LeftCoursesMenu from "./components/LeftCorsesMenu/LeftCoursesMenu";
import MainMenu from "./components/MainMenu/MainMenu";
import CourseMenu from "./components/CourseMenu/CourseMenu";
import { Routes, Route, Link } from "react-router-dom"
import StartMenu from "./components/CourseMenu/StartMenu/StartMenu";
import React from "react";

function App() {
  return (
      <div>
          <Header/>
          <div className={"start"}>
              <LeftCoursesMenu/>
              <Routes>
                  <Route path="/" element={<MainMenu/>}/>
                  <Route path="/course/:id/" element={<CourseMenu/>}>
                      <Route path="start" element={<StartMenu/>}></Route>
                      <Route path="web" element={<p>web</p>}></Route>
                  </Route>
              </Routes>
              <div className={"pysto"}></div>
          </div>
      </div>
  );
}

export default App;
