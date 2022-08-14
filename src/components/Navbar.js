import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {

  render() {
    return (
      <div>
         <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" style={{color: "aqua"}} to="/"><h2>News-For-You</h2></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item"><Link className="nav-link" style={{color: "#f7a1f4"}} to="/">Home</Link></li>
                    <li className="nav-item"><Link className="nav-link" style={{color: "#f7a1f4"}} to="/business">Business</Link></li>
                    <li className="nav-item"><Link className="nav-link" style={{color: "#f7a1f4"}} to="/entertainment">Entertainment</Link></li>
                    <li className="nav-item"><Link className="nav-link" style={{color: "#f7a1f4"}} to="/general">General</Link></li>
                    <li className="nav-item"><Link className="nav-link" style={{color: "#f7a1f4"}} to="/health">Health</Link></li>
                    <li className="nav-item"><Link className="nav-link" style={{color: "#f7a1f4"}} to="/science">Science</Link></li>
                    <li className="nav-item"><Link className="nav-link" style={{color: "#f7a1f4"}} to="/sports">Sports</Link></li>
                    <li className="nav-item"><Link className="nav-link" style={{color: "#f7a1f4"}} to="/technology">Technology</Link></li>
                </ul>
                </div>
            </div>
        </nav>
      </div>
    )
  }
}

export default Navbar