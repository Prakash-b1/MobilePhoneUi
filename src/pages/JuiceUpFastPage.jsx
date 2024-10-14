import phone1 from "../assets/Phone1.svg"
import img2 from "../assets/bgimg.jpeg"
import { BsFillLightningChargeFill } from "react-icons/bs";
import { RiLightbulbFlashLine } from "react-icons/ri";
import superelectricv from "../assets/electricsuper.svg"
const JuiceUpFastPage = () => {
    return (
        <div
            style={{
                background: 'linear-gradient(95.43deg, rgba(33, 47, 29, 0) 38.18%, rgba(33, 47, 29, 0.9) 61.66%), url(' + img2 + ')',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                zIndex: -1,
                transform: 'scaleX(-1)',
                overflow: 'hidden', // Prevent overflow


            }}
        >

<div className="flex flex-col md:justify-between md:ps-20 gap-16 ps-10" style={{ transform: 'scaleX(-1)' }}>
    <div className='flex flex-col md:flex-row gap-8 items-start'>
        <div className="w-full md:w-[585px]">
            <p className='text-[28px] md:text-[36px] lg:text-[48px] font-semibold bg-gradient-to-b from-[#ACC887] to-[#3E9C6F] bg-clip-text text-transparent'>
                Juice Up Fast: Supercharge with 45W!
            </p>
            <p className="text-[16px] md:text-[18px] lg:text-[20px]">
                With the incredible 45W PowerCharge, your phone zips to 25% charge in just 10 minutes, faster than grabbing a coffee! Get ready for hours of calls, work, and play in a flash.
            </p>
        </div>
        <div className='relative left-[10px] md:left-0 w-full  flex justify-center'>
            <img src={phone1} alt="" className='absolute top-[3rem] md:w-[700px] md:left-[310px] ' />
        </div>
    </div>

    <div className="flex flex-col mt-[9rem] pb-5 md:mt-0 md:flex-row justify-between gap-6 w-full md:w-[600px]">
        <div className="flex flex-col items-center">
            <BsFillLightningChargeFill className="h-[40px] w-[40px]" />
            <p className="text-center">Hyper Charge</p>
            <p className="text-center">During Urgency 25% charge in 10 min</p>
        </div>
        <div className="flex flex-col items-center">
            <img src={superelectricv} alt="" className="h-[40px] w-[40px]" />
            <p className="text-center">Smart Charge</p>
            <p className="text-center">Basis Usage Pattern AI Optimization</p>
        </div>
        <div className="flex flex-col items-center">
            <RiLightbulbFlashLine className="h-[40px] w-[40px]" />
            <p className="text-center">Low-temp Charge</p>
            <p className="text-center">Booyah Mode No Overheating</p>
        </div>
    </div>
</div>

        </div>
    )
}

export default JuiceUpFastPage
