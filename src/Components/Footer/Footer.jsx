import React from 'react';
import profile from '../../assets/image.svg'
import { Link } from 'react-router-dom';


const link1 = "https://www.facebook.com/manpasandinc"; 
const link2 = "https://www.instagram.com/manpasand_inc/?hl=en";
const link3 = "https://www.linkedin.com/company/manpasand-inc/about/";

function Handler3(event) {
    event.preventDefault();
    window.open(link1);
}

function Handler4(event) {
    event.preventDefault();
    window.open(link2);
}

function Handler5(event) {
    event.preventDefault();
    window.open(link3);
}

const Footer = () => {
    return (
        <footer className="bg-transparent text-white w-full box-border py-1 relative overflow-hidden">
            <div className="container mx-auto px-4 flex flex-col">
                <div className='flex flex-col items-center relative'>
                    <div className="firecracker-container">
                        <div className="firecracker"></div>
                        <div className="firecracker"></div>
                        <div className="firecracker"></div>
                    </div>
                    <img src={profile} alt="" className="w-52 h-52 mb-5 relative z-10" />

                    <div className="flex justify-center space-x-8 mb-8">
                        <a href="#" className="text-white" onClick={Handler3}>
                            <i className="fab fa-facebook text-2xl"></i>
                        </a>
                        <a href="#" className="text-white" onClick={Handler4}>
                            <i className="fab fa-instagram text-2xl"></i>
                        </a>

                    </div>
                </div>
                <hr className="border-gray-600 mb-8" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Manpasand US</h3>
                        <ul>
                            <li><Link to="/about" className="hover:underline font-light">About</Link></li>
                            <li><Link to="/ContactUs" className="hover:underline font-light">Contact Us</Link></li>
                            <li><Link to="/FAQ" className="hover:underline font-light">FAQ</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Media</h3>
                        <ul>
                            <li><Link to="/Gallery" className="hover:underline font-light">Photos</Link></li>
                            <li><Link to="/Gallery" className="hover:underline font-light">Videos</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Legal</h3>
                        <ul>
                            <li><Link to="/Cookies" className="hover:underline font-light">Cookies</Link></li>
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
