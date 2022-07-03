import Header from "./components/Header";
import Home from "./pages/Home";
import Detail from "./components/Detail"
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Api from "./components/Api"
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="container">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/detail/:id" element={<Detail/>}/>
          <Route path="/Api" element={<Api/>}/>
        </Routes>
       
      </BrowserRouter>
    </div>
  );
}

export default App;
