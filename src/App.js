import React from "react";
import Body from "./components/Body";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="text-gray-400 bg-gradient-to-t from-gray-800 to-gray-900 body-font">
      <Navbar />
      <Body />
      <Footer />
    </main>
  );
}

export default App;
