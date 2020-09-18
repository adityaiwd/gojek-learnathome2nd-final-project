import React,{useState,useEffect} from 'react';
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Content from "./components/Content";
import Download from "./components/Download";
import Footer from "./components/Footer";

function App() {
  const [currentCity,setCurrentCity] = useState("jakarta");
  const onSearchSubmit = async (term) => {
    setCurrentCity(term);
  };
  useEffect(() => {
      setCurrentCity(currentCity);
  }, [currentCity])
  
  return (
    <div >
      <Navbar />
      <Jumbotron onSubmit={onSearchSubmit} city={currentCity}/>
      <Content city={currentCity}/>
      <Download />
      <Footer />
    </div>
  );
}

export default App;
