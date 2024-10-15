import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Consultation from "./pages/Consultation";
import { ConsultationProvider } from "./context/ConsultationContext";

import "./App.scss";

const App: React.FC = () => {
  return (
    <Router>
      <ConsultationProvider>
        <div className="App">
          <Header />
          <main>
            <Routes>
              <Route path="/consultation" element={<Consultation />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </ConsultationProvider>
    </Router>
  );
};

export default App;
