import "./App.css";
import { BrowserRouter , Route , Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import CreateAds from "./components/CreateAds";
import TextMediaForm from "./components/TextMediaForm";
import AdMedia from "./components/AdMedia";
import 'bootstrap/dist/css/bootstrap.min.css'
import ColorSchemesExample from "./components/BootNav.jsx"
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Navbar /> */}
        <ColorSchemesExample/>
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/adds" element = {<CreateAds/>} />
          <Route path="/adds/textMedia" element = {<TextMediaForm/>} />
          <Route path = "/adds/adMedia" element = {<AdMedia/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
