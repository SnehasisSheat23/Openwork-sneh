import React from 'react';
import profile from '../../assets/ManpasandLogo.svg'

const Footer = () => {
    return (
        <footer className="bg-[#3d2c2c] text-white  w-full box-border py-5">
            <div className="container mx-auto px-4 flex flex-col">
                <div className='flex flex-col items-center'>
                    <img src={profile} alt="" className="w-52 h-52" />

                    <div className="flex justify-center space-x-6 mb-8">
                        <a href="#" className="text-white">
                            <i className="fab fa-facebook text-2xl"></i>
                        </a>
                        <a href="#" className="text-white">
                            <i className="fab fa-instagram text-2xl"></i>
                        </a>
                        <a href="#" className="text-white">
                            <i class="fa-brands fa-linkedin text-2xl"></i>
                        </a>
                    </div>
                </div>
                <hr className="border-gray-600 mb-8" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Manpasand Belgium</h3>
                        <ul>
                            <li><a href="#" className="hover:underline">About</a></li>
                            <li><a href="#" className="hover:underline">Line-up</a></li>
                            <li><a href="#" className="hover:underline">Tickets</a></li>
                            <li><a href="#" className="hover:underline">FAQ</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Media</h3>
                        <ul>
                            <li><a href="#" className="hover:underline">Photos</a></li>
                            <li><a href="#" className="hover:underline">Videos</a></li>
                            <li><a href="#" className="hover:underline">Live Streams</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Legal</h3>
                        <ul>
                            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                            <li><a href="#" className="hover:underline">Terms of Service</a></li>
                            <li><a href="#" className="hover:underline">Cookies</a></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 text-center">
                    <p>&copy; {new Date().getFullYear()} Tomorrowland. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
