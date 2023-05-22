import Navbar from "./components/Navbar";
import Mainbody from "./components/Mainbody";
import FAQs from "./components/FAQs";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App max-w-8xl mx-auto font-roboto">
      <Navbar/>
      <Mainbody/>
      <FAQs/>
      <Footer/>
    </div>
  );
}

export default App;
