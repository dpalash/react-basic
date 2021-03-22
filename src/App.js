import "./App.css";
import Home from "./components/home/home";
import Navbar from "./components/nav";

function App() {
 
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="content">
        <Home></Home>
      </div>
    </div>
  );
}

export default App;
