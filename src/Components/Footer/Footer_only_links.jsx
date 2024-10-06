import React from 'react';

import { Link } from 'react-router-dom';



const Footer = () => {
    return (
        <footer className="bg-[#3d2c2c] text-white  w-full box-border py-1">
            <div className="container mx-auto px-4 flex flex-col">
                <div className='flex flex-col items-center'>
                    

                    
                </div>
                <hr className="border-gray-600 mb-8" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Manpasand US</h3>
                        <ul>
                            <li><Link to="/about" className="hover:underline font-light">About</Link></li>
                            <li><a href="#" className="hover:underline font-light">Line-up</a></li>
                            <li><a href="#" className="hover:underline font-light">Contact Us</a></li>
                            <li><a href="#" className="hover:underline font-light">FAQ</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Media</h3>
                        <ul>
                            <li><Link to="/Gallery" className="hover:underline font-light">Photos</Link></li>
                            <li><a href="#" className="hover:underline font-light">Videos</a></li>
                            
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Legal</h3>
                        <ul>
                            <li><a href="#" className="hover:underline font-light">Privacy Policy</a></li>
                            <li><a href="#" className="hover:underline font-light">Terms of Service</a></li>
                            <li><a href="#" className="hover:underline font-light">Cookies</a></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 text-center">
                    {/* <p>&copy; {new Date().getFullYear()} Manpasand. All rights reserved.</p> */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
