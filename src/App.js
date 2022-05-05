import React from "react";
import "./App.css";

import { Route, Routes} from "react-router-dom";
import {Header, Footer, Play, GameInstructions} from './components/common';


function App() {
  

  return (
    <div className="App">
      {/* -------Header--------- */}
      <Header/>

        {/* -------Routes to compontents--------- */}
        <Routes>
            <Route  path="/" element={<Play/>}>
            </Route>

            <Route path="/statistics">
            </Route>

            <Route path="/gameinstructions" element={<GameInstructions/>}>
            </Route>

            <Route path="/techbackground">
            </Route>

            <Route path="/aboutus">
            </Route>

        </Routes>  

      {/* -------Footer--------- */}
      <Footer/>
    </div>
  );
}

export default App;
