import "./App.css";
import React, { useState } from "react";
import Header from "./components/Layout/Header";
import ViewMap from "./components/Layout/ViewMap";
import SideBar from "./components/Layout/Sidebar";
import ViewPage from "./components/ViewPage/ViewPage";

import classes from './App.module.css';

function App() {
  const [view, setView] = useState(true);
  const [add, setAdd] = useState(false);
  const [about, setAbout] = useState(false);
  const [login, setLogin] = useState(false);



  return (
    <React.Fragment>
      <Header />
      {view && <ViewPage />}
    </React.Fragment>
  );
}

export default App;
