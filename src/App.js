import Nav from "./components/Nav";
import Header from "./components/Header";
import Employees from "./components/Employees";
import Services from "./components/Services";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Employees />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
