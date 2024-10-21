import React from "react";

export const Navbar = () => {
    return ( 
    <div className="d-flex">
    <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-dark bg-dark w-100">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Start Bootstrap</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        ><span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          </ul>
          <div className="d-flex justify-content-end">
            <button className="btn btn-dark me-2" type="submit">Home</button>
            <button className="btn btn-dark text-secondary me-2" type="submit">About</button>
            <button className="btn btn-dark text-secondary me-2" type="submit">Services</button>
            <button className="btn btn-dark text-secondary" type="submit">Contact</button>
          </div>
        </div>
      </div>
    </nav>
  </div>
    )
}