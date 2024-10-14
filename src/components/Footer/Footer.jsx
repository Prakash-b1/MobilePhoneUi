import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPaperPlane } from 'react-icons/fa'; // Importing the email sent icon
import logos from "../../assets/logo.svg";

const Footer = () => {
    return (
        <footer className="bg-[#171717] text-white py-10 px-4 md:px-20">
            <div className="container mx-auto flex flex-col md:flex-row justify-between">
                {/* Left Side: Logo and Social Media Icons */}
                <div className="flex flex-col items-start mb-8 md:mb-0">
                    <img src={logos} alt="Company Logo" className="h-12 mb-4" />
                    <div className="flex space-x-4 mb-4">
                        <a href="#" aria-label="Facebook"><FaFacebook className="text-xl hover:text-blue-500" /></a>
                        <a href="#" aria-label="Twitter"><FaTwitter className="text-xl hover:text-blue-400" /></a>
                        <a href="#" aria-label="Instagram"><FaInstagram className="text-xl hover:text-pink-500" /></a>
                        <a href="#" aria-label="LinkedIn"><FaLinkedin className="text-xl hover:text-blue-700" /></a>
                    </div>

                    <div className="text-center">
                        <h3 className="text-sm mt-2 font-thin">Join our newsletter to stay up to date on features and releases</h3>
                        <div className="flex mt-2 border rounded-sm w-[250px] items-center justify-between">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="p-2 bg-[#171717] border-none focus:outline-none"
                            />
                            <div className='px-2 cursor-pointer'>
                                <FaPaperPlane /> {/* Email sent icon */}

                            </div>

                        </div>
                    </div>
                </div>

                {/* Middle: Product Support, Media, and Additional Section */}
                <div className="flex flex-col md:flex-row gap-10 mb-8 md:mb-0">
                    {/* Product Support */}
                    <div className="flex flex-col items-center text-start">
                        <h4 className="font-bold text-lg">Product Support</h4>
                        <ul className="space-y-1">
                            <li><a href="#" className="hover:text-gray-400">Help Center</a></li>
                            <li><a href="#" className="hover:text-gray-400">Documentation</a></li>
                            <li><a href="#" className="hover:text-gray-400">Community</a></li>
                        </ul>
                    </div>

                    {/* Media */}
                    <div className="flex flex-col items-center text-start">
                        <h4 className="font-bold text-lg">Media</h4>
                        <ul className="space-y-1">
                            <li><a href="#" className="hover:text-gray-400">Blog</a></li>
                            <li><a href="#" className="hover:text-gray-400">Press Releases</a></li>
                            <li><a href="#" className="hover:text-gray-400">Media Kit</a></li>
                        </ul>
                    </div>

                    {/* Additional Links */}
                    <div className="flex flex-col items-center text-start">
                        <h4 className="font-bold text-lg">Additional Links</h4>
                        <ul className="space-y-1">
                            <li><a href="#" className="hover:text-gray-400">Careers</a></li>
                            <li><a href="#" className="hover:text-gray-400">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-gray-400">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>

                {/* Right Side: Contact Email and Phone Number */}
                <div className="flex flex-col items-end">
                    <h4 className="font-bold text-lg">Contact Us</h4>
                    <p>Email: <a href="mailto:info@example.com" className="hover:text-gray-400">info@example.com</a></p>
                    <p>Phone: <a href="tel:+123456789" className="hover:text-gray-400">+123 456 789</a></p>
                </div>
            </div>

            {/* Copyright Stamp */}
            <div className="mt-10 text-center text-sm">
                <p>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
