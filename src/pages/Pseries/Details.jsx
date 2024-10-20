import img2 from "../../assets/bgimg.jpeg"
import phone3 from "../../assets/phone3.svg"
import phone4 from "../../assets/phone4.svg"
import phone5 from "../../assets/phone5.svg"
import { CiCamera } from "react-icons/ci";

const Details = () => {
  return (
    <div
      style={{
        background: 'linear-gradient(176.29deg, #212F1D 3.69%, rgba(33, 47, 29, 0.50748) 36.43%, rgba(33, 47, 29, 0.9) 78.23%), url(' + img2 + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'center',

      }}
    >
      <div className="flex justify-center md:flex-row flex-col items-center px-10 md:px-20 pt-10 md:pt-0">
        <div className="flex flex-col justify-between gap-4 p-4 ">
          <div>
            <p className='text-[28px] md:text-[36px] lg:text-[48px] font-semibold bg-[#B3D98E] bg-clip-text text-transparent '>
              256 GB Large Storage
            </p>
            <p className="text-[16px] md:text-[18px] lg:text-[20px] md:w-1/2">
              Ample Storage with Lightning-Fast UFS 2.2 Technology. Effortlessly store and access your digital world with blazing speed and reliability.  </p>

          </div>

          <p>1000+ TV Series Episodes* | 100,000+ photos* | 5000+ Apps*</p>
        </div>

        <div className="flex flex-col p-10  ">
          <img src={phone3} alt="" className="md:w-[539px] w-[300px] h-[200px] md:h-[280px]" />
          <img src={phone4} alt="" className="md:w-[539px] w-[300px] h-[200px] md:h-[280px]" />
        </div>

      </div>


      <div className="flex justify-center md:flex-row flex-col-reverse items-center px-10 md:px-20 md:pb-20">
        <div className="flex flex-col p-10  ">
          <img src={phone5} alt="" className="md:w-[539px] w-[300px] h-[200px] md:h-[280px]" />
        </div>

        <div className="flex flex-col justify-between gap-4 p-4 ">
          <div>
            <p className='text-[28px] md:text-[36px] lg:text-[48px] font-semibold bg-[#B3D98E] bg-clip-text text-transparent '>
              Ideal Camera for All Your Needs
            </p>
            <p className="text-[16px] md:text-[18px] lg:text-[20px] md:w-1/2">Click exceptional photos that showcase intricate details and unparalleled clarity, ensuring every aspect of your subjects shines with remarkable precision. </p>

          </div>

          <div className="flex flex-col gap-5 ">
            <span className="flex gap-4 items-center">
              <CiCamera /> 50MP AI Dual Rear Camera
            </span>
            <span className="flex gap-4 items-center">
              <CiCamera />8MP Front Camera
            </span>
            <span>AI Clear Portrait | Super Night Mode | Panorama Mode</span>

          </div>
        </div>



      </div>


    </div>
  )
}

export default Details
