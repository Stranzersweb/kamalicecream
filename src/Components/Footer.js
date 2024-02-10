import React from 'react';

const Footer = () => {
    return (
        <div className="flex m-11 justify-center bg-white h-45">
            <div className="w-1/2">
                <h2 className="text-3xl font-bold">Find Us On</h2>
                <div>
                    <p>Kamal Ice Cream</p>
                    {/* Contact details and social media links */}
                </div>
            </div>
            <div className="w-1/2">
                <p>Location</p>
                {/* Map location */}

            </div>
        </div>
    );
};

export default Footer;
