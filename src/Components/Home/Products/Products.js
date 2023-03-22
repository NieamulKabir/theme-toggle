import React from 'react';

const Products = () => {
    return (
        <div className='pb-16 dark:bg-gray-500'>
            <h1 className='text-lg md:text-4xl font-bold pt-10 dark:text-white'>Our Products</h1>
            <div className='max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 dark:text-white text-start'>
                <div className="card bg-base-100 dark:bg-gray-800 shadow-xl">
                    <figure><img src="https://img.freepik.com/free-vector/gradient-api-infographic_23-2149379657.jpg?w=996&t=st=1679505585~exp=1679506185~hmac=8afc00af44cc8940ff0c92e15be3b2e5a7358d038de9ed4b49daf75996ff3399" alt="api" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">API </h2>
                        <p>Localized Location API for developer</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary bg-green-500 border-0">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card  bg-base-100 dark:bg-gray-800 shadow-xl">
                    <figure><img src="https://www.urban-engine.com/images/features/isochrones.png" alt="urban" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Urban Engine</h2>
                        <p>Operating System for cities</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary bg-green-500 border-0">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 dark:bg-gray-800 shadow-xl">
                    <figure><img src="https://img.freepik.com/free-vector/man-rides-bicycle-with-gps-tracking-mobile-phone-smartphone-navigation-illustration_126523-3081.jpg?w=996&t=st=1679506270~exp=1679506870~hmac=098e3ed34b25618bff9368d05926aee697c856a5a401ec37560c10206d2b53b3" alt="trace" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Trace</h2>
                        <p>Real time tracking platform</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary bg-green-500 border-0">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;