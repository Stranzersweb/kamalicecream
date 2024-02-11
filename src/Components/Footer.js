import React from 'react';


const containerStyle = {
    
    background: 'linear-gradient(90deg, rgba(175,148,79,1) 0%, rgba(172,83,42,1) 45%, rgba(52,34,19,1) 89%)',
    backgroundSize: 'cover',
  };


const Footer = () => {
  return (
    <div className="flex flex-column md:flex-row p-10 justify-center h-full" style={containerStyle}>

      {/* Left Side: Contact Details */}
      <div className="w-full md:w-1/2 p-4">
        <h2 className="text-4xl m-4 text-white font-bold mb-2">Find Us On</h2>
        <div className='flex text-white justify-center items-center space-x-4'>
          <ul className="list-none p-10 m-0 flex">
            <li className="mr-4">Facebook</li>
            <li>Instagram</li>
          </ul>
        </div>
        <h2 className="text-4xl m-4 text-white font-bold mb-2">Contact Us</h2>
        <div className='flex flex-col text-white justify-center items-center space-y-2'>
          <ul className="list-none p-10 m-0 text-center">
            <li className='p-2'>Phone: 123-456-7890</li>
            <li className='p-2'>Email: <a href="mailto:kamalicecream@gmail.com">kamalicecream@gmail.com</a></li>
          </ul>
        </div>
      </div>

      {/* Right Side: Google Maps Embed */}
      <div className="w-full h-55 md:w-1/2 p-4 border-black-500">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3717.1561393941925!2d76.2193722528908!3d21.304845827906046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd833208ff80b19%3A0x85350776c5ebede!2sKamal%20Ice%20Factory!5e0!3m2!1sen!2sus!4v1707622799609!5m2!1sen!2sus"
          width="100%"
          height="400"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Footer;
