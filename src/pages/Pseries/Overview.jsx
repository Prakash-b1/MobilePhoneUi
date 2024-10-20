/* eslint-disable react/no-unknown-property */
import { FaArrowRight } from "react-icons/fa6"
import logo2 from "../../assets/logo2.svg"
import { useState } from "react";
import img2 from '../../assets/bgimg.jpeg';
import chargingPhone from '../../assets/battery-charging.svg'
import size from '../../assets/size.svg'
import slider from '../../assets/slider.svg'
import { AiFillThunderbolt } from "react-icons/ai";


const Overview = () => {
    const [activeTab, setActiveTab] = useState('overview');

    return (
        <div className="flex flex-col">
            <div className="bg-[#aec68f] flex justify-between items-center px-10 md:px-20 py-4">
                <div>
                    <img src={logo2} alt="" />
                </div>
                <div className="space-x-4 hidden md:flex">
                    <button
                        onClick={() => setActiveTab('overview')}
                        className={`${activeTab === 'overview' ? 'text-lg ' : 'bg-transparent'} text-black rounded-lg px-4 py-2 font-semibold`}
                    >
                        Overview
                    </button>
                    <button
                        onClick={() => setActiveTab('specifications')}
                        className={`${activeTab === 'specifications' ? 'text-lg ' : 'bg-transparent'} text-black rounded-lg px-4 py-2 font-semibold`}
                    >
                        Specifications
                    </button>
                </div>
                <button className="bg-black rounded-full text-white font-bold gap-2 flex items-center px-4 py-2">
                    BUY NOW <FaArrowRight className="text-red-500" />
                </button>
            </div>


            <div
                // className="relative" // Make sure the container has a size
                style={{
                    background: 'linear-gradient(176.29deg, #212F1D 3.69%, rgba(33, 47, 29, 0.50748) 36.43%, rgba(33, 47, 29, 0.9) 78.23%), url(' + img2 + ')',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',

                }}
            >
                <div className="flex flex-col gap-10 px-10 md:px-20 py-4">
                    <div className="flex flex-col md:flex-row md:justify-between gap-4 p-4">
                        <p className='text-[28px] md:text-[36px] lg:text-[48px] font-semibold bg-gradient-to-b from-[#ACC887] to-[#3E9C6F] bg-clip-text text-transparent md:w-1/2'>
                            Get a 45W Super Charge Smartphone for Under 10k
                        </p>
                        <p className="text-[16px] md:text-[18px] lg:text-[20px] md:w-1/2">
                            Get Ready for Power: Meet the itel P55+, a smartphone under 10K with 45W charging. It is your performance companion with 8GB RAM, expandable up to 16GB* with Memory Fusion, and 256GB ROM.
                            Experience every detail on the 6.6 HD+ punch-hole display, complete with a smooth 90Hz refresh rate for seamless viewing. The sleek vegan leather finish exudes unparalleled elegance.
                        </p>
                    </div>


                    <div className="flex md:flex-row flex-col gap-10">

                        <div className="flex flex-col gap-2 items-start">
                            <img src={chargingPhone} alt="" className="w-[50p] h-[50px]" />

                            <p className='text-[18px] md:text-[24px]  font-semibold bg-gradient-to-b from-[#ACC887] to-[#3E9C6F] bg-clip-text text-transparent '>
                                45 W Ultra Super  Charging Phone
                            </p>
                            <p>Stay juiced up all day with a 45W ultra-fast charging smartphone under 10K. Say goodbye to low battery anxiety!</p>
                        </div>
                        <div className="flex flex-col gap-2 items-start">
                            <img src={size} alt="" className="w-[50p] h-[50px]" />

                            <p className='text-[18px] md:text-[24px]  font-semibold bg-gradient-to-b from-[#ACC887] to-[#3E9C6F] bg-clip-text text-transparent '>
                                Memory Marvel: 8GB RAM, expandable up to 16GB* with Memory Fusion
                            </p>
                            <p>Unleash multitasking prowess and store your world – from apps to shows to memories – all in one powerhouse device.</p>
                        </div>
                        <div className="flex flex-col gap-2 items-start">
                            <img src={slider} alt="" className="w-[50p] h-[50px]" />
                            <p className='text-[18px] md:text-[24px]  font-semibold bg-gradient-to-b from-[#ACC887] to-[#3E9C6F] bg-clip-text text-transparent '>
                                Vegan Leather Finish
                            </p>

                            <p>Flaunt your grace with the luxurious vegan leather finish, adding an extra touch of sophistication to your device!
                            </p>
                        </div>

                    </div>

                </div>
            </div>
            <marquee behavior="scroll" direction="left" className="text-[#AEC68F] bg-black p-4 text-lg font-bold whitespace-nowrap">
                <div className="flex items-center gap-4">
                    INTENSIVELY POWERFUL
                    <span className="rounded-full px-2 py-1 bg-[#aec68f97] flex items-center">
                        <AiFillThunderbolt className="text-[#9dc26d]" />
                    </span>
                    POWER SERIES
                    <span className="rounded-full px-2 py-1 bg-[#aec68f97] flex items-center">
                        <AiFillThunderbolt className="text-[#9dc26d]" />
                    </span>
                    INTENSIVELY POWERFUL
                    <span className="rounded-full px-2 py-1 bg-[#aec68f97] flex items-center">
                        <AiFillThunderbolt className="text-[#9dc26d]" />
                    </span>
                    POWER SERIES
                    <span className="rounded-full px-2 py-1 bg-[#aec68f97] flex items-center">
                        <AiFillThunderbolt className="text-[#9dc26d]" />
                    </span>
                    INTENSIVELY POWERFUL
                    <span className="rounded-full px-2 py-1 bg-[#aec68f97] flex items-center">
                        <AiFillThunderbolt className="text-[#9dc26d]" />
                    </span>
                    POWER SERIES
                    <span className="rounded-full px-2 py-1 bg-[#aec68f97] flex items-center">
                        <AiFillThunderbolt className="text-[#9dc26d]" />
                    </span>
                    INTENSIVELY POWERFUL
                    <span className="rounded-full px-2 py-1 bg-[#aec68f97] flex items-center">
                        <AiFillThunderbolt className="text-[#9dc26d]" />
                    </span>
                    POWER SERIES
                    <span className="rounded-full px-2 py-1 bg-[#aec68f97] flex items-center">
                        <AiFillThunderbolt className="text-[#9dc26d]" />
                    </span>
                    INTENSIVELY POWERFUL
                    <span className="rounded-full px-2 py-1 bg-[#aec68f97] flex items-center">
                        <AiFillThunderbolt className="text-[#9dc26d]" />
                    </span>
                    POWER SERIES
                    <span className="rounded-full px-2 py-1 bg-[#aec68f97] flex items-center">
                        <AiFillThunderbolt className="text-[#9dc26d]" />
                    </span>
                </div>
            </marquee>



        </div >


    )
}

export default Overview
