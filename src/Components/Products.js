'use client'
import React from 'react';
import Image from 'next/image'; // Import the Image component from Next.js
const BestSellers = () => {
    // Sample data representing best-selling flavors
    const bestSellers = [
        { id: 1, name: 'Vanilla', image: 'Vanilla.jpeg' },
        { id: 2, name: 'ChocoBar', image: 'chocobar.jpeg' },
        { id: 3, name: 'Pista', image: 'pista.jpeg' },
        { id: 4, name: 'Mint Chocolate Chip', image: 'mint-chocolate-chip.jpeg' },
        // Add more flavors as needed
    ];

    return (
        <div className='p-50'>
            <h1 className="text-3xl font-bold text-center mt-10">Best Sellers</h1>
        <div className=" m-10 p-10 flex flex-wrap gap-4 justify-center ">
           
            {bestSellers.map((flavor) => (
                <div key={flavor.id} className="bg-white p-4 rounded shadow-md overflow-hidden transition-transform transform hover:scale-110">
                    <Image
                        src={`/Images/flavours/${flavor.image}`}  // Updated image source
                        alt={flavor.name}
                        className="w-full h-55 object-contain mb-4 rounded"
                        width={300}  // Set the width of the image
                        height={200} // Set the height of the image
                    />
                    <h3 className=" p-4 justify-center text-xl text-center font-semibold mb-2">{flavor.name}</h3>
                   
                </div>
            ))}
        </div>
        </div>
    );
};

export default BestSellers;
