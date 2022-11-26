import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../Picture/car-banner.jpg'

const Banner = () => {
    return (
        <div className="carousel w-11/12 h-36 lg:h-72 md:h-64 my-5 mx-auto rounded">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={banner} alt='' className="w-full" />
                
            </div> 

            <div className="absolute flex justify-start ">
                <h1 className='lg:text-4xl md:text-3xl sm:text-2xl font-bold text-yellow-600 ml-5 lg:mt-10 md:mt-10'>
                    Choose the service <br/>
                    Which Can solve <br/> 
                    Your problem.
                </h1>
                
            </div>
            <div className="absolute flex justify-start w-2/5">
            <Link to='/service'><button className="btn btn-info ml-5 lg:mt-44 md:mt-40 mt-20 font-bold">Start Service</button></Link>
            </div>
  
        </div>
    );
};

export default Banner;