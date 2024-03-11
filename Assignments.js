import React from "react";
import { Link } from "react-router-dom";
import "./assignments.css";

function Assignments() {
    return (
        <>
         
        <section className="cards1">
        <div className="card" style={{ width: '18rem' }}>
          <img src="searching.gif" className="card-img-top" alt="Complex"style={{ height: '200px' }}></img>
          <div className="card-body">
            <h5 className="card-title">Searching</h5>
           
            <Link to="/assignment1" className="btn btn-primary">ASSIGNMENT 1</Link>
          </div>
        </div>
        <div className="card" style={{ width: '18rem' }}>
          <img src="sorting.gif" className="card-img-top" alt="Array"style={{ height: '200px' }}></img>
          <div className="card-body">
            <h5 className="card-title">Sorting</h5>
            
            <Link to="/assignment2" className="btn btn-primary">ASSIGNMENT 2</Link>
            
          </div>
        </div>
        <div className="card" style={{ width: '18rem' }}>
          <img src="stack.gif" className="card-img-top" alt="Dynamic Programming"style={{ height: '200px' }}></img>
          <div className="card-body">
            <h5 className="card-title">Stack</h5>
            
            <Link to="/assignment3" className="btn btn-primary">ASSIGNMENT 3</Link>
          </div>

          
        </div>
      
      </section>
      <section className="cards1">
        <div className="card" style={{ width: '18rem' }}>
          <img src="queue.gif" className="card-img-top" alt="Complex"style={{ height: '200px' }}></img>
          <div className="card-body">
            <h5 className="card-title">Queue</h5>
            <Link to="/assignment4" className="btn btn-primary">ASSIGNMENT 4</Link>
            
                     </div>
        </div>
        <div className="card" style={{ width: '18rem' }}>
          <img src="applnstack.gif" className="card-img-top" alt="Array"style={{ height: '200px' }}></img>
          <div className="card-body">
            <h5 className="card-title">Application of Stack</h5>
           
            <Link to="/assignment5" className="btn btn-primary">ASSIGNMENT 5</Link>
          </div>
        </div>
        <div className="card" style={{ width: '18rem' }}>
          <img src="extra.gif" className="card-img-top" alt="Dynamic Programming"style={{ height: '200px' }}></img>
          <div className="card-body">
            <h5 className="card-title">Application of Queue</h5>
            
            <Link to="/assignment6" className="btn btn-primary">ASSIGNMENT 6</Link>
          </div>

          
        </div>
     
          
    
        
      </section>
      <section className="cards1">
        <div className="card" style={{ width: '18rem' }}>
          <img src="linkedlist.gif" className="card-img-top" alt="Complex"style={{ height: '200px' }}></img>
          <div className="card-body">
            <h5 className="card-title">Linked list</h5>
            
            <Link to="/assignment7" className="btn btn-primary">ASSIGNMENT 7</Link>
          </div>
        </div>
        <div className="card" style={{ width: '18rem' }}>
          <img src="binary-tree.gif" className="card-img-top" alt="Array"style={{ height: '200px' }}></img>
          <div className="card-body">
            <h5 className="card-title">Binary Tree</h5>
            <Link to="/assignment8" className="btn btn-primary">ASSIGNMENT 8</Link>
          </div>
        </div>
        <div className="card" style={{ width: '18rem' }}>
          <img src="Binary_Search_tree.gif" className="card-img-top" alt="Dynamic Programming"style={{ height: '200px' }}></img>
          <div className="card-body">
            <h5 className="card-title"> Binary Search Tree</h5>
       
            <Link to="/assignment9" className="btn btn-primary">ASSIGNMENT 9</Link>
          </div>

          
        </div>
     
          
    
        
      </section>
      <section className="cards1">
        <div className="card" style={{ width: '18rem' }}>
          <img src="right_tbst_insert.gif" className="card-img-top" alt="Complex"style={{ height: '200px' }}></img>
          <div className="card-body">
            <h5 className="card-title">Threaded Binary Tree</h5>
           
            <Link to="/assignment10" className="btn btn-primary">ASSIGNMENT 10</Link>
          </div>
        </div>
        <div className="card" style={{ width: '18rem' }}>
          <img src="minimumspanning.gif" className="card-img-top" alt="Array"style={{ height: '200px' }}></img>
          <div className="card-body">
            <h5 className="card-title">Minimum Spanning Tree </h5>
          
            <Link to="/assignment11" className="btn btn-primary">ASSIGNMENT 11</Link>
          </div>
        </div>
        <div className="card" style={{ width: '18rem' }}>
          <img src="Shortest_path_Dijkstra.gif" className="card-img-top" alt="Dynamic Programming"style={{ height: '200px' }}></img>
          <div className="card-body">
            <h5 className="card-title">Shortest Path Using Dijikstra's Algorithm</h5>
            
            <Link to="/assignment12" className="btn btn-primary">ASSIGNMENT 12</Link>
          </div>

          
        </div>
     
          
    
        
      </section>
      
        </>
    );
}

export default Assignments;
