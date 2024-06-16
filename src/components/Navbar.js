 






import React, { Component } from 'react'
export class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="Navbar Navbar-expand-lg Navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="Navbar-brand" href="/">NewsMonkey</a>
                        <button className="Navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#NavbarSupportedContent" aria-controls="NavbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="Navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse Navbar-collapse" id="NavbarSupportedContent">
                        <ul className="Navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item"><a className="nav-link" href="/about">About</a> </li>
                            <li className="nav-item"><a className="nav-link" href="/about">business</a></li>
                            <li className="nav-item"><a className="nav-link" href="/about">entertainment</a></li>
                            <li className="nav-item"><a className="nav-link" href="/about">general</a></li>
                            <li className="nav-item"><a className="nav-link" href="/about">health</a></li>
                            <li className="nav-item"><a className="nav-link" href="/about">science</a></li>
                            <li className="nav-item"><a className="nav-link" href="/about">sports</a></li>
                            <li className="nav-item"><a className="nav-link" href="/about">technology</a></li>


                        </ul>
                        </div>
                    </div>
                    </nav>
            </div>
        )
    }
}
export default Navbar