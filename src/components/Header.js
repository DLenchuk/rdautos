import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../images/logo.png';

const Header = () => {
    return (
        <div className="ui inverted menu" >

            <Link to="/" className="item" style={{ backgroundColor: "silver" }}>
                <img src={logo} style={{ width: "100px" }} />
            </Link>
        
            <div className="right menu">
                <div className="ui inverted compact menu">
                    <div className="ui simple dropdown item">
                        <Link to="/services" className="item">
                            Services
                        </Link>
                        <i class="dropdown icon"></i>
                        <div class="menu">
                            <Link to="/services/dealer-service" className="item">Dealer Service</Link>
                            <Link to="/services/detailing" className="item">Detailing</Link>
                            <Link to="/services/odor-remediation" className="item">Odor Remediation</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="right menu">
                <Link to="/about" className="item">
                    About
                </Link>
            </div>

           

        </div>
    );
};

export default Header;