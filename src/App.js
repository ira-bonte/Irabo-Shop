import React from "react";
import Header from "./components/Header";
import './styles/main.css';
import Footer from "./components/Footer";
import Home from "./components/Home";
function App() {
  return (
      <React.Fragment>
        <Header />
        <Home />
        <Footer />
      </React.Fragment>
  );
}

export default App;
