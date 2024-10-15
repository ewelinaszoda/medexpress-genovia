import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Consultation from "./pages/Consultation";
import "./App.scss";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Consultation />
      </main>
      <Footer />
    </div>
  );
};

export default App;
