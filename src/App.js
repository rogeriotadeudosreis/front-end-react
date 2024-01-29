import "./App.css";
import Header from "./componentes/header/Header.js";
import Sidebar from "./componentes/Sidebar/Sidebar.js";
import Main from "./componentes/Main/Main.js";
import Footer from "./componentes/Footer/Footer.js";

function App() {
  return (
    <div>
      <Sidebar />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
