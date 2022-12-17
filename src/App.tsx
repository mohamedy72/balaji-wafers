import "./App.css";
import Button from "./components/Button";
import Counter from "./components/Counter";
import Footer from "./components/Footer";
import { Header } from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />
      {/* Main */}
      <Main />
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
