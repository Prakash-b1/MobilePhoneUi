import { useState } from 'react';
import carousel1 from "../assets/phoneCarousel/1.png";
import carousel2 from "../assets/phoneCarousel/2.png";
import carousel3 from "../assets/phoneCarousel/3.png";
import carousel4 from "../assets/phoneCarousel/4.png";
import carousel5 from "../assets/phoneCarousel/5.png";
import carousel6 from "../assets/phoneCarousel/6.png";
import carousel7 from "../assets/phoneCarousel/7.png";
import carousel8 from "../assets/phoneCarousel/8.png";
import carousel9 from "../assets/phoneCarousel/9.png";

import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

const MobileCarousel = () => {
    const [activeTab, setActiveTab] = useState('royalGreen');
    const [currentIndex, setCurrentIndex] = useState(0);

    const Images = {
        royalGreen: [carousel1, carousel2, carousel3],
        purple: [carousel4, carousel5, carousel6],
        black: [carousel7, carousel8, carousel9],
    };

    const backgroundColors = {
        royalGreen: '#b7dc94',
        purple: '#dbd5f4',
        black: '#d5d5d5',
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === Images[activeTab].length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? Images[activeTab].length - 1 : prevIndex - 1
        );
    };

    const renderCarousel = () => {
        const currentImage = Images[activeTab][currentIndex];
        return (
            <div className="carousel flex justify-between items-center rounded-2xl w-[1280px]" style={{ backgroundColor: backgroundColors[activeTab] }}>
                <div className="carousel-controls">
                    <button onClick={handlePrev} className='p-2 rounded-full border border-black'>
                        <GrFormPrevious className='text-black text-[45px]' />
                    </button>
                </div>

                <div className='p-6'>
                    <img src={currentImage} alt={`carousel ${currentIndex + 1}`} className='md:h-[600px] md:w-[638px]' />
                </div>

                <div className="carousel-controls">
                    <button onClick={handleNext} className='p-2 rounded-full border border-black'>
                        <MdOutlineNavigateNext className='text-black text-[45px]' />
                    </button>
                </div>
            </div>
        );
    };

    const colorNames = {
        royalGreen: 'Royal Green',
        purple: 'Purple',
        black: 'Black',
    };

    return (
        <div className='bg-[#131c0e]'>
            <div className='flex justify-center items-center p-10'>
                {renderCarousel()}
            </div>
            <div className="tabs flex justify-center md:flex-row flex-col items-center gap-5">
                COLOR
                <div className='flex  cursor-pointer gap-4 items-start sm:w-[150px]'>
                    <button className="w-8 h-8 rounded-full" style={{ backgroundColor: backgroundColors.royalGreen }} onClick={() => { setActiveTab('royalGreen'); setCurrentIndex(0); }}></button>
                    {activeTab === 'royalGreen' && <span className="ml-2 hidden md:block text-lg text-white">{colorNames.royalGreen}</span>}
                    <span className='md:hidden capitalize'>royalGreen</span>
                </div>
                <div className='flex cursor-pointer gap-4 items-start sm:w-[150px]'>

                    <button className="w-8 h-8 rounded-full" style={{ backgroundColor: backgroundColors.purple }} onClick={() => { setActiveTab('purple'); setCurrentIndex(0); }}></button>
                    {activeTab === 'purple' && <span className="ml-2 hidden md:block  text-lg text-white">{colorNames.purple}</span>}
                    <span className='md:hidden capitalize'>purple</span>
                </div>

                <div className='flex cursor-pointer gap-4 items-start sm:w-[150px]'>
                    <button className="w-8 h-8 rounded-full" style={{ backgroundColor: backgroundColors.black }} onClick={() => { setActiveTab('black'); setCurrentIndex(0); }}></button>
                    {activeTab === 'black' && <span className="ml-2 hidden md:block  text-lg text-white">{colorNames.black}</span>}
                    <span className='md:hidden capitalize'>black</span>
                </div>
            </div>

        </div>
    );
};

export default MobileCarousel;
