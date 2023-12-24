import "./App.css";
import { BrowserRouter , Route , Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import CreateAds from "./components/CreateAds";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/adds" element = {<CreateAds/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
