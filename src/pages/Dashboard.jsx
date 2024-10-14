import img1 from '../assets/img1.svg';
import img2 from '../assets/bgimg.jpeg';
import { AiFillThunderbolt } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa6";


const Dashboard = () => {
    return (
        <div
            // className="relative" // Make sure the container has a size
            style={{
                background: 'linear-gradient(95.43deg, rgba(33, 47, 29, 0) 38.18%, rgba(33, 47, 29, 0.9) 61.66%), url(' + img2 + ')',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                zIndex: -1,
                transform: 'scaleX(-1)',

            }}
        >
            <div className="flex flex-col md:flex-row md:justify-between px-10 md:px-20"
                style={{
                    transform: 'scaleX(-1)',
                }}

            >

                <div className='flex flex-col gap-8 justify-center items-start'>
                    <div className='flex flex-col mt-8 md:mt-0'>
                        <div className='flex gap-2 text-[14px] w-[152px] font-bold items-center border-2 border-[#AEC68F] text-[#AEC68F] px-2 rounded-2xl font-bricolage'>
                            POWER SERIES <AiFillThunderbolt />
                        </div>

                        <p className='text-[36px] md:text-[136px] font-semibold bg-gradient-to-b from-[#ACC887] to-[#3E9C6F] bg-clip-text text-transparent'>
                            P55+
                        </p>
                        <p>45W super Charging | 16GB* (8GB+8GB*) RAM & 256GB ROM | 50MP AI Camera </p>

                    </div>
                    <div className='flex flex-col gap-4'>
                        <p>Available at <span className='text-[28px]'>₹9,499/-</span> </p>
                        <div className='items-center justify-center hidden md:flex'>
                            <div className="bg-white h-[25px] w-[6px] rounded-sm "></div>
                            <div className="bg-white h-[34px] w-[6px] rounded-sm "></div>
                            <button className='flex gap-2 items-center bg-white rounded-sm px-4 py-2 font-bold text-black border  shadow-lg '>
                                BUY NOW <FaArrowRight className='text-red-500' />
                            </button>
                            <div className="bg-white h-[34px] w-[6px] rounded-sm "></div>
                            <div className="bg-white h-[25px] w-[6px] rounded-sm "></div>
                        </div>

                    </div>


                </div>
                <div className='relative '><img src={img1} alt="" className='w-[614px] md:p-10 relative left-[78px] md:top-10' /></div>
            </div>
        </div>
    );
}

export default Dashboard;
