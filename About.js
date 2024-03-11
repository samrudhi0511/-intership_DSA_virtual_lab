import React from "react";
import "./about.css"

function About() {
    return (
        <>
        <section id="aboutpage" className="aboutpage">
        <h2>About Us</h2>
        <p>A data structure is defined as a particular way of storing and organizing data in our devices to use the data efficiently and effectively. The main idea behind using data structures is to minimize the time and space complexities. An efficient data structure takes minimum memory space and requires minimum time to execute the data. Algorithm is defined as a process or set of well-defined instructions that are typically used to solve a particular group of problems or perform a specific type of calculation. To explain in simpler terms, it is a set of operations performed in a step-by-step manner to execute a task. Data structure refers to a particular way of organizing and storing data in a computer so that it can be accessed and manipulated efficiently. It's a fundamental concept in computer science and software engineering.</p>

      </section>
      <h2>Team</h2>
      <section className="cards1">
        
      <div className="card" style={{ width: '18rem' }}>
          <img src="complex.gif" className="card-img-top" alt="Complex"></img>
          <div className="card-body">
            <h5 className="card-title">Samrudhi Pustole</h5>
            
            <a href="#" className="btn btn-primary">Linktin</a>
          </div>
        </div>
        <div className="card" style={{ width: '18rem' }}>
          <img src="array.gif" className="card-img-top" alt="Array"></img>
          <div className="card-body">
            <h5 className="card-title">Arya Yelure</h5>
           
            <a href="#" className="btn btn-primary">Linktin</a>
          </div>
        </div>
        <div className="card" style={{ width: '18rem' }}>
          <img src="extra.gif" className="card-img-top" alt="Dynamic Programming"></img>
          <div className="card-body">
            <h5 className="card-title">Hemal Rajput</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Linktin</a>
          </div>
          
        </div>
     
      </section>
    
      </>
    );
}

export default About;