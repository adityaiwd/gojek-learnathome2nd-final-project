import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Content from "./components/Content";
import Download from "./components/Download";
import Footer from "./components/Footer";
import { scroller, Element } from "react-scroll";

function App() {
  const [currentCity, setCurrentCity] = useState("jakarta");
  const onSearchSubmit = async (term) => {
    setCurrentCity(term);
  };
  const scrollDownload = () => {
    scroller.scrollTo("download", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };
  useEffect(() => {
    setCurrentCity(currentCity);
  }, [currentCity]);

  return (
    <div>
      <Navbar scrollToDownload={scrollDownload} />
      <Jumbotron onSubmit={onSearchSubmit} city={currentCity} />
      <Content city={currentCity} />
      <Element name="download">
        <Download />
      </Element>
      <Footer />
    </div>
  );
}

export default App;
