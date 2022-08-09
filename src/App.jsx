import "./App.scss";
import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonails from "./components/testimonails/Testimonails";
import Contacts from "./components/contacts/Contacts";
import Works from "./components/works/Works";
import { useState } from "react";
import Menu from "./components/menu/Menu";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className='app'>
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className='section'>
        <Intro />
        <Portfolio />
        <Works />
        <Testimonails />
        <Contacts />
      </div>
    </div>
  );
}

export default App;
