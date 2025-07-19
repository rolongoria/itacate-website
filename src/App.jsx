import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Locations from "./pages/Locations";
import Menu from "./pages/Menu";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CustomerReview from "./components/CustomerReview";
import heroImage from "./assets/bg3.jpg";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main
        className="min-h-[85vh] bg-cover bg-center p-6 justify-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <Routes className="p-6 bg-gray-50">
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <CustomerReview />
      </main>

      <Footer />
    </div>
  );
}

export default App;
