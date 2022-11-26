import React from 'react';
import car1 from '../Picture/car1.jpg';
import car2 from '../Picture/car2.jpg';
import car3 from '../Picture/car3.jpg';

const ExtraSection = () => {
    return (
        <div className='mb-10'>
        <h1 className=' my-10 underline lg:text-4xl md:text-3xl sm:text-2xl font-bold text-red-700 text-center'>Why Choose Us</h1>
        <div className='w-11/12 grid gird-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-auto my-5 '>
           <div>
                <div className="card bg-base-100 shadow-xl">
                
                <div className="card-body">
                    <h2 className="card-title">Why we are the best</h2>
                    <p>The best part about the car market in Bangladesh is that reconditioned and used cars are available at low prices. Secondhandcar.com can be your right destination as you will find the best prices and models for your choice of new and used cars in Bangladesh. Search category-wise to find the best car for you. SecondhandCar.com has a list of the top cars in the automobile market, from Toyota to Audi and everything in between, and a variety of services near you.<br/>
                    </p>
                    <p className='mt-3'><span className='font-bold text-blue-500'>Common Of Every Car</span><br/>
                    <span className='font-bold'>Transmission:</span> 4-Speed Automatic<br/>
                    <span className='font-bold'>Brake System:</span> ABS+EBD+BA<br/>
                    <span className='font-bold'>Engine Type:</span> 16 Valves, DOHC, VVT-i<br/>
                    <span className='font-bold'>Maximum Power:</span> 143ps / 6000 rpm<br/>
                    </p>
                    <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
                </div>
            </div>





            <div>
            <div className="carousel w-full h-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={car1} alt="" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a> 
                    <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={car2} alt="" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a> 
                    <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={car3} alt="" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a> 
                    <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                
                </div>
            </div> 
        </div>
        </div>
    );
};

export default ExtraSection;