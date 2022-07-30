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
import HomeworkMenu from "./components/MainMenu/HomeworkMenu/HomeworkMenu";
import HwMenu from "./components/CourseMenu/HwMenu/HwMenu";
import Homework from "./components/Homework/Homework";
import Temp from "./components/Temp/Temp";
import Auth from "./components/Auth/Auth";
import Ant from "./components/Auth/Ant";
import Payment from "./components/Payment/Payment";
import PayError from "./components/Payment/PayError/PayError";
import NoPayForm from "./components/Payment/NoPayForm/NoPayForm";

function App() {
  return (
    <div>
        <Routes>
              <Route path="/auth" element={<Auth/>}/>
              <Route path="/ant" element={<Ant/>}/>
              <Route path="/payment" element={<Payment/>}/>
              <Route path="/pay_error" element={<PayError/>}/>
              <Route path="/no_pay_info" element={<NoPayForm/>}/>
              <Route path="/" element={<Temp/>}>
                  <Route index element={<MainMenu/>}/>
                  <Route path="course/:id/" element={<CourseMenu/>}>
                      <Route index element={<Navigate to="start" replace/>}/>
                      <Route path="start" element={<StartMenu/>}></Route>
                      <Route path="web/" element={<WebinarMenu/>}>
                          <Route index element={<Navigate to="past" replace/>}/>
                          <Route path="past" element={<PastWebs/>}/>
                          <Route path="next" element={<NextWebs/>}/>
                      </Route>
                      <Route path="homeworks"  element={<HwMenu/>}/>
                  </Route>
                  <Route path="homework/:id/" element={<Homework/>}/>
              </Route>
          </Routes>
      </div>
  );
}

export default App;
