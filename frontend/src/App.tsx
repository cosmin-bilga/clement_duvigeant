import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/index.tsx";
import Header from "./components/Header/index.tsx";
import Footer from "./components/Footer/index.tsx";

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
