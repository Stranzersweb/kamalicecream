import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div className="bg-gray-100 py-8 flex">
      <div className="container mx-auto px-4 flex-1">
        <div>
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-lg mb-4">
            Welcome to our ice cream shop! We are passionate about creating delicious and
            unique flavors that will satisfy your sweet tooth. Whether you're a fan of classic
            flavors or adventurous combinations, we have something for everyone.
          </p>
          <p className="text-lg mb-4">
            Our ice cream is made with the finest ingredients and crafted with love. We source
            locally whenever possible to support our community and ensure the freshest flavors.
            Each scoop is carefully handcrafted to deliver the perfect balance of taste and
            texture.
          </p>
          <p className="text-lg mb-4">
            Visit us today and indulge in a delightful ice cream experience. We can't wait to
            serve you!
          </p>
        </div>
      </div>
      <div className="flex-1">
        {/* Replace the image source and styles with your actual image */}
        <Image
          src="/path-to-your-image.jpg"
          alt="About Us Image"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default About;
