import React from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function Bootstrap() {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          {/* <a href="#" className="navbar-brand">My Website</a> */}
        </div>
      </nav>
      <div className="container mt-4">
        <h1 className="text-center">Welcome to Bootstrap</h1>
        <p className="text-center">This page is created using React + Bootstrap</p>
        <div className="text-center">
          <button className="btn btn-primary">Click Me</button>
        </div>
      </div>
    </>
  );
}

export default Bootstrap;
