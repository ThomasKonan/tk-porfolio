import './App.css'
import { Navbar }from "./components/Navbar";
import { Navbar }from "./components/Hero";
import { Navbar }from "./components/Projects";
import { Navbar }from "./components/Contact";

function App() {
  const [isLoaded, setIsLoaded] = usetate(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  return (
    <div className="app">
      <Navbar />

      <Hero />
      <Projects />
      <Contact />

      <>
        <p> &copy; 2025 TK Tech. All rights reserved.</p>
      </>
    </div>
  );
}

export default App;
