// App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./componets/navbar";
import Assign1 from "./pages/Assign1";
import About from "./pages/About"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Assignments from "./pages/Assignments";
import Login from "./pages/Login";
import Assign2 from "./pages/Assign2";
import Assign3 from "./pages/Assign3";
import Assign4 from "./pages/Assign4";
import Assign5 from "./pages/Assign5";
import Assign6 from "./pages/Assign6";
import Assign7 from "./pages/Assign7";
import Assign8 from "./pages/Assign8";
import Assign9 from "./pages/Assign9";
import Assign10 from "./pages/Assign10";
import Assign11 from "./pages/Assign11";
import Assign12 from "./pages/Assign12";

function App() {
    return (
        <BrowserRouter>
             <Navbar/>
             
            <Routes>
              <Route exact path="/" element={<Home />}/>
              <Route exact path="/about" element={<About />}/>
              <Route exact path="/contact" element={<Contact/>}/>
              <Route path="/assignments" element={<Assignments />} />
              <Route exact path="/login" element={<Login/>}/>
              <Route exact path="/assignment1" element={<Assign1/>}/>
              <Route exact path="/assignment2" element={<Assign2/>}/>
              <Route exact path="/assignment3" element={<Assign3/>}/>
              <Route exact path="/assignment4" element={<Assign4/>}/>
              <Route exact path="/assignment5" element={<Assign5/>}/>
              <Route exact path="/assignment6" element={<Assign6/>}/>
              <Route exact path="/assignment7" element={<Assign7/>}/>
              <Route exact path="/assignment8" element={<Assign8/>}/>
              <Route exact path="/assignment8" element={<Assign9/>}/>
              <Route exact path="/assignment8" element={<Assign10/>}/>
              <Route exact path="/assignment8" element={<Assign11/>}/>
              <Route exact path="/assignment8" element={<Assign12/>}/>
              
              
              
          

                
              
                
              
            </Routes>
            
        </BrowserRouter>
    );
}

export default App;
