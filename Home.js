import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Assignments from "./Assignments";

function Home() {

    return (
            <>
             
          
            <div className="text-box">
                <h1>Data Structure virtual lab</h1>
                <p>DSA is defined as a combination of two separate yet interrelated topics – Data Structure and Algorithms. DSA is one of the most important skills that every computer science student must have. It is often seen that people with good knowledge of these technologies are better programmers than others and thus, crack the interviews of almost every tech giant. Understanding and selecting the appropriate data structure is essential for developing efficient algorithms and solving complex problems in software development. Different data structures have different time and space complexities for various operations, so choosing the right one is crucial for optimizing performance and resource usage in software systems.</p>
                <Link to="/assignments" className="hero-btn">Let's Get Started</Link>
              
               
            </div>
            
           
            <section id="about" className="about">
        <h2>About Us</h2>
        <p>A data structure is defined as a particular way of storing and organizing data in our devices to use the data efficiently and effectively. The main idea behind using data structures is to minimize the time and space complexities. An efficient data structure takes minimum memory space and requires minimum time to execute the data. Algorithm is defined as a process or set of well-defined instructions that are typically used to solve a particular group of problems or perform a specific type of calculation. To explain in simpler terms, it is a set of operations performed in a step-by-step manner to execute a task. Data structure refers to a particular way of organizing and storing data in a computer so that it can be accessed and manipulated efficiently. It's a fundamental concept in computer science and software engineering.</p>
      </section>
      <section className="cards">
        <div className="card" style={{ width: '18rem' }}>
          <img src="complex.gif" className="card-img-top" alt="Complex"></img>
          <div className="card-body">
            <h5 className="card-title">Time Complexities</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Let's Get started</a>
          </div>
        </div>
        <div className="card" style={{ width: '18rem' }}>
          <img src="array.gif" className="card-img-top" alt="Array"></img>
          <div className="card-body">
            <h5 className="card-title">Array</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Let's Get started</a>
          </div>
        </div>
        <div className="card" style={{ width: '18rem' }}>
          <img src="extra.gif" className="card-img-top" alt="Dynamic Programming"></img>
          <div className="card-body">
            <h5 className="card-title">Dynamic Programming</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Let's Get started</a>
          </div>
          
        </div>
     
          
    
        
      </section>
      <div className="icons">
        {/* Add font awesome icons */}
        <div className="footer">
          <img src="logo.png" alt="Logo"></img>
          <p>Pune Institute Of Computer Technology, Katraj, Pune</p>
          <div className="symbol">
            <div className="icon">
              <a href="#" className="fa fa-facebook"></a>
            </div>
            <div className="icon">
              <a href="#" className="fa fa-twitter"></a>
            </div>
            <div className="icon">
              <a href="#" className="fa fa-google"></a>
            </div>
            <div className="icon">
              <a href="#" className="fa fa-linkedin"></a>
            </div>
          </div>
          <p>© 2023 Company, Inc. All rights reserved.</p>
        </div>
        <div className="immediate-links2">
          <ul>
            <li><a href="#">HOME</a></li>
            <li><a href="#">ABOUT</a></li>
            <li><a href="#">COURSE</a></li>
            <li><a href="#">BLOG</a></li>
            <li><a href="#">CONTACT</a></li>
          </ul>
        </div>
        <div className="immediate-links">
          <ul>
            <li><a href="#">HOME</a></li>
            <li><a href="#">ABOUT</a></li>
            <li><a href="#">COURSE</a></li>
            <li><a href="#">BLOG</a></li>
            <li><a href="#">CONTACT</a></li>
          </ul>
        </div>
        <div className="immediate-links1">
          <ul>
            <li><a href="#">HOME</a></li>
            <li><a href="#">ABOUT</a></li>
            <li><a href="#">COURSE</a></li>
            <li><a href="#">BLOG</a></li>
            <li><a href="#">CONTACT</a></li>
          </ul>
        </div>
      </div>
           </>
    
    );
}

export default Home;
