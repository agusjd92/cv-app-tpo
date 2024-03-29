import CardCv from "./CardCv/CardCv";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Login from "./Login/Login";
import Dashboard from "./Dashboard/Dashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<CardCv />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <Footer />
      </div>
    
    </Router>
  );
}

export default App;
