// import Rout from "./components/Router";
import NavHeader from "./components/Navbar";
import Home from "./components/Home";
import Foot from "./components/Foot";
function App() {
  return (
    <div className="App mx-4">
      {/* <Rout /> */}
      <NavHeader />
      <Home />
      <div className="footer mt-8">
        <Foot />
      </div>
    </div>
  );
}

export default App;
