import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header></Header>
      <Routes>
        {/* <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} /> */}
        <Route path={"/"} element={<Home />} />
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
