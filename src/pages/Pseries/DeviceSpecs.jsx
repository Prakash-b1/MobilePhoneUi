import fusion from "../../assets/Rectangle 293029766.svg"
const DeviceSpecs = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-[#c0e898]">
        <div className="relative bg-[#c0e898] rounded-lg w-[1333px] h-[673px]  md:flex-row flex-col-reverse flex items-center p-10 pt-5">
          {/* Curved Shape */}
          <div className="absolute left-0 top-0 bottom-0 md:w-1/2 bg-[#c0e898] rounded-r-full p-10 z-10" />
  
          {/* Text Content */}
          <div className="relative z-20 md:w-[50%] p-10">
            <h1 className="text-4xl font-bold text-black mb-4">
              8GB RAM, expandable up to 16GB* with Memory Fusion
            </h1>
            <p className="text-lg text-black">
              Level up your device with 8GB RAM & an extra virtual memory, expandable up to 16GB* with Memory Fusion. Say goodbye to lag and hello to seamless app switching.
            </p>
          </div>
  
          {/* Image */}
          <div className="relative z-20 md:w-[50%]">
            <img
              src={fusion}// replace with your actual image path
              alt="Memory Fusion"
              className="rounded-lg w-[250px] md:w-full md:h-full object-cover"
            />
          </div>
  
          {/* Inner green background for curved effect */}
          <div className="absolute left-0 top-0 bottom-0 md:w-1/2 bg-[#c0e898] rounded-r-full z-0" />
        </div>
      </div>
        )
}

export default DeviceSpecs
