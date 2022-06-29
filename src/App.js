import Header from "./components/Header/Header";
import CoursesMenu from "./components/CorsesMenu/CoursesMenu";
import MainMenu from "./components/MainMenu/MainMenu";

function App() {
  return (
      <div>
          <Header/>
          <div className={"start"}>
              <CoursesMenu/>
              <MainMenu/>
          </div>
      </div>
  );
}

export default App;
