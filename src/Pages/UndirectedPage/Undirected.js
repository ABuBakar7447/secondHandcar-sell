import React from 'react';
import { Link } from 'react-router-dom';
import pic from '../Picture/404-not-found.png'

const Undirected = () => {
    return (
        <div>
            <div className="hero w-4/5 mx-auto h-4/5 my-20 " style={{ backgroundImage: `url(${pic})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                <p className="mb-5 text-yellow-400 font-bold text-2xl">You Are Trying For An Undirected Route,Please</p>
                <Link to='/'><button className="btn btn-primary">Go Back</button></Link>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Undirected;