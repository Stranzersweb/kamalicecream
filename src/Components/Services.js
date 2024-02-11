import React from 'react';
import Image from 'next/image';



const containerStyle = {
    position: 'relative',
    textAlign: 'center',
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/Images/Background-3.jpeg")`,
    backgroundSize: 'cover',
    height: '100vh',
    display: 'flex',
  
    flexDirection: 'column',
    justifyContent: 'center',
    color: 'white',
    animation: 'zoomInOut 10s infinite alternate',
    
    transition: 'transform 0.5s ease-in-out',
  };

const Services = () => {
  const servicesData = [
    {
      title: 'Water Supply',
      description: 'Get clean and refreshing water delivered to your door with our ozonized and R.O purified water services. Enjoy the convenience of quality hydration at your fingertips. Stay refreshed effortlessly!',
      image: '/Images/Water/water-delivery.jpeg',
    },
    {
      title: 'Wedding and Birthday Events',
      description: 'Quench the celebration with Kamal Ice Cream! We provide top-notch water supply and dispensers to keep your guests refreshed. Plus, sweeten the occasion with our premium ice-cream services. Let us handle the essentials while you create unforgettable moments!',
      image: '/Images/PartyStuff/weddings.jpeg',
    },
    {
      title: 'Customized Ice Cream & Cakes',
      description: 'Create your own signature flavor or design a custom cake for your special event. Our team will work with you to bring your vision to life. Enjoy a unique and delicious treat that reflects your style and taste!',
      image: '/Images/PartyStuff/weddings.jpeg',
    },
    // Add more services as needed
  ];

  return (


    
    <div className="bg-gray-100 p-10 py-8" style={containerStyle}>
      <h1 className=" p-5 text-3xl font-bold text-center mt-10">Our Services</h1>
      <div className="bg-white m-10 flex flex-col md:flex-row ">
        {servicesData.map((service, index) => (
          <div key={index} className="bg-white p-4 rounded shadow-md overflow-hidden hover:shadow-lg transition-shadow transform hover:scale-105">
            <h2 className="text-xl text-black justify-center p-4 text-center font-bold mb-2">{service.title}</h2>
            <Image
              src={service.image}
              alt={service.title}
              width={300} // Set the width of the image
              height={200} // Set the height of the image
              className="w-full h-50 object-contain mb-2 rounded transition-transform transform hover:scale-105"
            />
            <p className="p-5 text-black text-left">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
