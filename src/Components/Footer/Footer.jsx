import React from 'react';
import profile from '../../assets/image.svg'
import { Link } from 'react-router-dom';

const link1 = "https://www.facebook.com/manpasandinc"; 
const link2 = "https://www.instagram.com/manpasand_inc/?hl=en";
const link3 = "https://www.linkedin.com/company/manpasand-inc/about/";

function Handler3() {
    event.preventDefault();
    window.open(link1);
}

function Handler4() {
    event.preventDefault();
    window.open(link2);
}

function Handler5() {
    event.preventDefault();
    window.open(link3);
}

const Footer = () => {
    return (
        <footer className="bg-[#3d2c2c] text-white  w-full box-border py-1">
            <div className="container mx-auto px-4 flex flex-col">
                <div className='flex flex-col items-center'>
                    <img src={profile} alt="" className="w-52 h-52 mb-5" />

                    <div className="flex justify-center space-x-6 mb-8">
                        <a href="#" className="text-white">
                            <i onClick={Handler3}className="fab fa-facebook text-2xl"></i>
                        </a>
                        <a href="#"onClick={Handler4}className="text-white">
                            <i className="fab fa-instagram text-2xl"></i>
                        </a>
                        <a href="#" onClick={Handler5}className="text-white">
                            <i class="fa-brands fa-linkedin text-2xl"></i>
                        </a>
                    </div>
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
