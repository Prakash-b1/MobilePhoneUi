import round from "../../assets/bground.svg";
import powerplay from "../../assets/powerplay.png"
import phone6 from "../../assets//phone6.png"
import { IoCameraOutline } from "react-icons/io5";
import K from "../../assets/K.png"
import phone7 from "../../assets/phone7.png"
import phone9 from "../../assets/phone9.png"
import phone7Vector from "../../assets/phone7Vector.png"
import phone9Vector from "../../assets/phone8vector.png"
import phone7Shadow from "../../assets/phone7shadow.png"
import Rround from "../../assets/rightround.png"
import PhoneBaloon from "../../assets/phoneBaloon.png"
import cutOut from "../../assets/cutVector.svg"
import vectorbg from "../../assets/Vector.png"
import speed from "../../assets/speees.png"

const MobileSpecs = () => {
    return (
        <div className="bg-[#181818] p-20">
            <div className="flex flex-col gap-4 justify-center">
                <div className="flex flex-col sm:flex-col md:flex-row gap-4 justify-center">
                    <div
                        style={{
                            background: `linear-gradient(335.37deg, #222F1C 0%, #3A4527 100%)`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            // overflow: "hidden"
                        }}
                        className="rounded-lg md:w-[522px] md:h-[771px]  "
                    >

                        <div className="absolute">
                            <img src={round} className="top-0 left-0 relative  object-cover" />
                        </div>
                        <div className="flex flex-col gap-10 p-8 pr-0 pb-0">
                            <div className="">
                                <img src={powerplay} alt="" className="w-[141px] h-[22px]" />
                                <p className="text-[#B3D98E] text-[36px]">Every Shot Pixel Perfect </p>

                            </div>
                            <div className="flex gap-2 items-center">
                                <div className="flex flex-col gap-4 text-[22px]">
                                    <div>
                                        <IoCameraOutline />
                                        <p>50MP AI Dual Camera</p>

                                    </div>
                                    <div>
                                        <IoCameraOutline />
                                        <p>50MP AI Dual Camera</p>

                                    </div>
                                    <div>
                                        <IoCameraOutline />
                                        <p>50MP AI Dual Camera</p>

                                    </div>
                                </div>
                                <div className=" w-[562px]">
                                    <img src={phone6} alt="" />
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <div
                            style={{
                                background: 'linear-gradient(283.53deg, #222F1C 1.32%, #3A4527 100%)'

                            }}
                            className="rounded-lg p-5 pb-0 pr-0 md:w-[738px] md:h-[375px] flex overflow-hidden gap-5"
                        >
                            <div className="flex flex-col justify-between h-[100%] md:w-1/3">
                                <div>
                                    <img src={powerplay} alt="" className="w-[141px] h-[22px]" />
                                    <p className="text-[#B3D98E] text-[36px]">Rapid Boost </p>

                                </div>

                                {/* for mobile */}
                                <div className="md:hidden overflow-hidden relative w-full h-full">
                                    <div className="flex absolute">
                                        <img src={K} alt="" className="md:w-[141px]h-[141px] w-[80px] md:h-[248px] object-cover" />
                                        <img src={K} alt="" className="md:w-[141px] h-[141px] w-[80px] md:h-[248px] object-cover" />
                                        <img src={K} alt="" className="md:w-[141px] h-[141px] w-[80px] md:h-[248px] object-cover" />
                                        <img src={K} alt="" className="md:w-[141px] h-[141px] w-[80px] md:h-[248px] object-cover" />
                                    </div>
                                    <div className="flex justify-end relative md:hidden">
                                        <img src={phone7Shadow} alt="" className="absolute top-0 left-0 w-full h-full" />
                                        <img src={phone7} alt="" className="relative z-10 sm:h-[204px] sm:w-[261px]" />
                                        <img src={phone7Vector} alt="" className="absolute top-[11px] w-[254px] h-[183px] md:w-[365px] left-[8px]  z-20" />
                                    </div>

                                </div>
                                <div className="flex flex-col justify-end pb-5">
                                    <p className="text-[22px]">
                                        Power Boost | Ultra-Power Saving | Battery Saving Setting
                                    </p>

                                </div>

                            </div>
                            {/* for desktop */}
                            <div className="hidden md:block overflow-hidden relative w-full h-full">
                                <div className="flex absolute">
                                    <img src={K} alt="" className="w-[141px] h-[248px] object-cover" />
                                    <img src={K} alt="" className="w-[141px] h-[248px] object-cover" />
                                    <img src={K} alt="" className="w-[141px] h-[248px] object-cover" />
                                    <img src={K} alt="" className="w-[141px] h-[248px] object-cover" />
                                </div>
                                <div className="flex justify-end relative">
                                    <img src={phone7Shadow} alt="" className="absolute top-0 left-0 w-full h-full" />
                                    <img src={phone7} alt="" className="relative z-10" />
                                    <img src={phone7Vector} alt="" className="absolute top-[21px] w-[365px] left-[125px]  z-20" />
                                </div>

                            </div>

                        </div>
                        <div
                            style={{
                                background: 'linear-gradient(283.53deg, #222F1C 1.32%, #3A4527 100%)'

                            }}
                            className="rounded-lg p-5 pb-0 pr-0 w-[172px] h-[260px] md:w-[738px] md:h-[375px] flex overflow-hidden gap-5"
                        >

                            <div className="flex flex-col justify-between h-[100%] md:w-1/2">
                                <div>
                                    <img src={powerplay} alt="" className="w-[141px] h-[22px]" />
                                    <p className="text-[#B3D98E] md:text-[36px] text-[22px]">Eye-Popping Visuals</p>

                                </div>
                                <div className="flex flex-col justify-end pb-5">
                                    <p className=" text-[12px] md:text-[22px]">
                                        6.6” HD+
                                        Punch Hole Display with Dynamic Bar
                                    </p>

                                </div>

                            </div>

                            <div className="md:overflow-hidden relative w-full h-full">
                                <div>
                                    <img src={Rround} alt="" className="absolute bottom-0 right-0 z-10 sm:h-[108px] sm:w-[176px]" />
                                    <img src={PhoneBaloon} alt="" className="absolute top-[10rem] md:top-0 right-0 z-20 md:w-[320px] md:h-[386px] sm:h-[202px] sm:w-[176px]" />
                                </div>

                            </div>




                        </div>
                    </div>

                </div>
                <div className="flex gap-4 justify-center">

                    <div
                        style={{
                            background: 'linear-gradient(283.53deg, #222F1C 1.32%, #3A4527 100%)',
                        }}
                        className="rounded-lg p-5 pb-0 pr-0 md:w-[1282px] md:h-[473px] h-[260px] w-[328px] flex overflow-hidden gap-5 relative"
                    >
                        <img src={cutOut} alt="" className="absolute top-0 left-[-4rem] md:left-[-3rem] w-full h-full z-10" />
                        <img src={vectorbg} alt="" className="absolute top-0  left-[-5rem] md:left-[-29rem] w-full h-full z-10" />
                        <img src={speed} alt="" className="absolute top-0 left-[2rem] md:left-[29rem] w-full h-full z-0" />

                        <div className="flex flex-col justify-between h-[100%] md:w-1/3 z-20">
                            <div>
                                <img src={powerplay} alt="" className="w-[89px] h-[14px] md:w-[141px] md:h-[22px]" />
                                <p className="text-[#B3D98E] text-[20px] md:text-[36px]">Elevate your Play!</p>
                            </div>
                            <div className="overflow-hidden md:hidden top-[23px] relative w-full h-full z-20">
                                <div className="flex relative">
                                    <img src={phone9} alt="" className="relative z-10" />
                                    <img
                                        src={phone9Vector}
                                        alt=""
                                        className="absolute top-[-6px] right-[3px] md:top-[-3rem] w-[900px] md:w-[887px] md:left-[-5rem] z-20"
                                    />
                                </div>
                            </div>
                            
                            <div className="flex flex-col justify-end pb-5">
                                <p className="text-14px md:text-[22px]">Unisoc T606 Octacore Processor</p>
                            </div>
                        </div>

                        <div className="overflow-hidden hidden md:block top-[50px] relative w-full h-full z-20">
                            <div className="flex relative">
                                <img src={phone9} alt="" className="relative z-10" />
                                <img
                                    src={phone9Vector}
                                    alt=""
                                    className="absolute top-[-6px] right-[3px] md:top-[-3rem] w-[900px] md:w-[887px] md:left-[-5rem] z-20"
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MobileSpecs;
