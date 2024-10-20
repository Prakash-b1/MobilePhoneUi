import { useEffect, useRef, useState } from "react";
import phoness from "../../assets/PHONE2.svg";

const BatteryLab = () => {
    const [showPoints, setShowPoints] = useState([]);
    const [showImage, setShowImage] = useState(false);
    const sectionRef = useRef(null); // Ref to the section

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    // Show points one by one
                    const timeouts = [];
                    [0, 1, 2].forEach((index) => {
                        timeouts.push(setTimeout(() => {
                            setShowPoints((prev) => [...prev, true]); // Add true to show each span
                        }, index * 500)); // 500ms staggered delay
                    });

                    // Show image after all points
                    setTimeout(() => {
                        setShowImage(true);
                    }, 1500); // Delay for the image (after the last span)

                    return () => {
                        timeouts.forEach((timeout) => clearTimeout(timeout)); // Cleanup timeouts
                    };
                }
            },
            { threshold: 0.1 } // Trigger when 10% of the section is visible
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <div className="p-10 md:p-20 bg-white " ref={sectionRef}>
            <div className="rounded-lg bg-[#212F1C] h-[520px] md:h-[720px] p-5 flex flex-col gap-10 overflow-hidden">
                <p className="text-center text-[24px]  md:text-[35px]">Stay Supercharged; Battery Lab</p>
                <div className="flex flex-col gap-5 justify-center item-start md:items-center">
                    <div className="flex gap-5 md:flex-row flex-col">
                        {showPoints[0] && <span className="fade-in text-[#B3D98E] font-semibold"> <span className="bg-[#B3D98E] text-black px-2 rounded-full">1</span> POWER BOOST</span>}
                        {showPoints[1] && <span className="fade-in text-[#B3D98E] font-semibold"> <span className="bg-[#B3D98E] text-black px-2 rounded-full">2</span> ULTRA POWER SAVING</span>}
                        {showPoints[2] && <span className="fade-in text-[#B3D98E] font-semibold"> <span className="bg-[#B3D98E] text-black px-2 rounded-full">3</span> BATTERY SAVING SETTING</span>}
                    </div>
                    {showImage && (
                        <img src={phoness} alt="" className="w-[586px] h-[300px] md:h-[600px] slide-up " />
                    )}
                </div>
            </div>
        </div>
    );
};

export default BatteryLab;
