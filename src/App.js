
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Slider from "./components/Slider";

function App() {
  return (
    <div>
    <Header/>
    <div className="position-relative">
    <Slider/>
    <Feature/>
    </div>
  
    <Footer/>
    </div>
  );
}

export default App;
