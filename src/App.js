import "./App.css";
import ReduxMain from "./components";
import HomeContainer from "./container/homeContainer";
import Header from "./components/header";
function App() {
  return (
    <div className="App">
      Cart Redux Example:
      <ReduxMain data={{ name: "Welcome In Cart", lastn: "Moonlight " }} />

      {/*============================== Home container ===========================*/}
      <Header/>
      <HomeContainer />
    </div>
  );
}

export default App;
