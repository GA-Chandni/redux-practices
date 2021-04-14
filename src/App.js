import "./App.css";
import ReduxMain from "./components";
import HomeContainer from "./container/homeContainer";
import HeaderContainer from "./container/haederConatiner"

function App() {
  return (
    <div className="App">
      Cart Redux Example:
      <ReduxMain data={{ name: "Welcome In Cart", lastn: "Moonlight " }} />

      {/*============================== Home container/header ===========================*/}
      <HeaderContainer/>
      <HomeContainer />
    </div>
  );
}

export default App;
