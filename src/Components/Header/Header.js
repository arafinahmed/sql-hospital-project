import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    
    return (
        <div className="header-section">
            <h1 className="text-center">‪Manan Binth Taj Noor Specialized Hospital‬</h1>
            <p className="text-center">Motijheel, Dhaka, Bangladesh, 1000.</p>
            <div className="button-container d-flex justify-content-center">
                
                <Link to="/admit"><button className="btn btn-outline-primary">Admit</button></Link>
                <Link to="/discharge"><button className="btn btn-outline-danger">Discharge</button></Link>
                <Link to="/allPatients"><button className="btn btn-outline-primary">Show All Patient</button></Link>
                
                <button className="btn btn-outline-primary">Search</button>
            </div>
        </div>
    );
};

export default Header;