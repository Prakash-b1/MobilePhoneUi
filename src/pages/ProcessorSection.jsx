import processChip from "../assets/chip.png";
import unisocLogo from "../assets/unisocLogo.svg";

const ProcessorSection = () => {
    return (
        <div className="flex flex-col-reverse md:flex-row bg-[#0e1316]">
            <div className="flex md:hidden gap-2 items-center text-[16px] justify-center py-5">
                <span>Powered By</span>
                <img src={unisocLogo} alt="" className="w-[93px] h-[18px]"/>
            </div>
            <div className="md:w-[70%] relative">
                <img src={processChip} alt="Processor Chip" className="w-full h-full object-cover" />
                <img
                    src={unisocLogo}
                    alt="Unisoc Logo"
                    className="absolute inset-0 m-auto md:w-24 md:h-24 h-14 w-14 md:top-[30%] md:left-[24%] top-[30%] left-[23%]"
                    style={{ transform: 'translate(-50%, -50%)' }}
                />
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'linear-gradient(to right, #0F1C12 0%, rgba(32, 56, 42, 0) 50%)'
                    }}
                ></div>
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'linear-gradient(to left, #0F1C12 0%, rgba(32, 56, 42, 0) 50%)'
                    }}
                ></div>
            </div>
            <div
                className="p-4 justify-center items-start  flex flex-col gap-20"
                style={{
                    background: 'linear-gradient(243.52deg, rgba(32, 56, 42, 0) 33.49%, #0F1C12 54.94%)',
                }}
            >
                <div>
                    <p className='text-[28px] md:text-[48px]  font-semibold bg-[#B3D98E] bg-clip-text text-transparent md:w-1/2' >
                        Beast Mode Octa-Core Processor
                    </p>
                    <p className="font-bold uppercase py-2"> Unisoc T606 (12nm)</p>
                    <p className="text-[16px] md:text-[18px] md:w-1/2">
                        Click exceptional photos that showcase intricate details and unparalleled clarity, ensuring every aspect of your subjects shines with remarkable precision.
                    </p>

                </div>
                <div className="md:flex hidden gap-2 items-center text-[16px]">
                    <span>Powered By</span>
                    <img src={unisocLogo} alt="" className="w-[149px] h-[27px]"/>
                </div>
            </div>

        </div>
    );
};

export default ProcessorSection;
