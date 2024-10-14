import P1 from "../assets/products/P4.png"
import P2 from "../assets/products/P3.png"
import P3 from "../assets/products/P1.png"
import P4 from "../assets/products/P2.png"
import phone1 from "../assets/phoneCarousel/1.png"
import phone2 from "../assets/phoneCarousel/4.png"
import phone3 from "../assets/phoneCarousel/7.png"
import map from "../assets/map.png"

import { FaArrowRight } from "react-icons/fa6"
const Accesories = () => {
    return (
        <div className="md:p-20 p-10 bg-[#0a0c08] flex flex-col gap-5">
            <div className="flex flex-col gap-6">
                <p className='text-[32px]'>Level Up Your Experience with Accessories!</p>

                <div className="flex gap2 justify-between flex-wrap space-y-2">
                    <div className='p-4 flex flex-col gap-2 items-center justify-center rounded-lg bg-[#232323]'>
                        <img src={P1} alt="" />
                        <span>Earbuds T1Pro</span>
                        <span>₹849.00</span>
                        <div className="flex items-center gap-2 cursor-pointer">  BUY NOW <FaArrowRight className='text-red-500' /></div>

                    </div>
                    <div className='p-4 flex flex-col gap-2 items-center justify-center rounded-lg bg-[#232323]'>
                        <img src={P2} alt="" />
                        <span>Earbuds T1Pro</span>
                        <span>₹849.00</span>
                        <div className="flex items-center gap-2 cursor-pointer">  BUY NOW <FaArrowRight className='text-red-500' /></div>

                    </div>
                    <div className='p-4 flex flex-col gap-2 items-center justify-center rounded-lg bg-[#232323]'>
                        <img src={P3} alt="" />
                        <span>Earbuds T1Pro</span>
                        <span>₹849.00</span>
                        <div className="flex items-center gap-2 cursor-pointer">  BUY NOW <FaArrowRight className='text-red-500' /></div>

                    </div>
                    <div className='p-4 flex flex-col gap-2 items-center justify-center rounded-lg bg-[#232323]'>
                        <img src={P4} alt="" />
                        <span>Earbuds T1Pro</span>
                        <span>₹849.00</span>
                        <div className="flex items-center gap-2 cursor-pointer">  BUY NOW <FaArrowRight className='text-red-500' /></div>

                    </div>

                </div>

            </div>
            <div className="flex flex-col gap-6 mt-16">
                <div className="flex justify-between">
                    <p className='text-[32px]'>Compare Models</p>
                    <p>Compare other models</p>

                </div>

                <div className="md:flex gap2 justify-between flex-wrap  space-y-2">
                    <div className='p-4 flex flex-col gap-2  items-center justify-center rounded-lg bg-[#232323]'>
                        <img src={phone1} alt="" className="md:w-[360px] w-[132px] h-[130px] md:h-[360px]" />
                        <div className="flex justify-between md:w-[362px] w-[290px]">
                            <p>S23+</p>
                            <p className="text-red-300">₹12,999.00</p>
                        </div>
                        <div className="flex justify-between md:w-[362px] w-[290px]">
                            <p>Camera</p>
                            <p>50MP AI Dual Rear Camera</p>
                        </div>
                        <div className="flex justify-between md:w-[362px] w-[290px]">
                            <p>Memory</p>
                            <p>Up to 32+4(2+2)GB*</p>
                        </div>
                        <div className="flex justify-between md:w-[362px] w-[290px]">
                            <p>Battery</p>
                            <p>4000mAh</p>
                        </div>


                    </div>
                    <div className='p-4 flex flex-col gap-2 items-center justify-center rounded-lg bg-[#232323]'>
                        <img src={phone2} alt="" className="md:w-[360px] w-[132px] h-[130px] md:h-[360px]" />

                        <div className="flex justify-between md:w-[362px] w-[290px]">
                            <p>S23+</p>
                            <p className="text-red-300">₹12,999.00</p>
                        </div>
                        <div className="flex justify-between md:w-[362px] w-[290px]">
                            <p>Camera</p>
                            <p>50MP AI Dual Rear Camera</p>
                        </div>
                        <div className="flex justify-between md:w-[362px] w-[290px]">
                            <p>Memory</p>
                            <p>Up to 32+4(2+2)GB*</p>
                        </div>
                        <div className="flex justify-between md:w-[362px] w-[290px]">
                            <p>Battery</p>
                            <p>4000mAh</p>
                        </div>
                    </div>
                    <div className='p-4 hidden  md:flex flex-col gap-2 items-center justify-center rounded-lg bg-[#232323]'>
                        <img src={phone3} alt="" className="md:w-[360px] w-[132px] h-[130px] md:h-[360px]" />

                        <div className="flex justify-between md:w-[362px] w-[290px]">
                            <p>S23+</p>
                            <p className="text-red-300">₹12,999.00</p>
                        </div>
                        <div className="flex justify-between md:w-[362px] w-[290px]">
                            <p>Camera</p>
                            <p>50MP AI Dual Rear Camera</p>
                        </div>
                        <div className="flex justify-between md:w-[362px] w-[290px]">
                            <p>Memory</p>
                            <p>Up to 32+4(2+2)GB*</p>
                        </div>
                        <div className="flex justify-between md:w-[362px] w-[290px]">
                            <p>Battery</p>
                            <p>4000mAh</p>
                        </div>
                    </div>


                </div>

            </div>


            <img src={map} alt="" />



        </div>
    )
}

export default Accesories
