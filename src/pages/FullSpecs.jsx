import  { useState } from 'react';

const FullSpecs = () => {
  const [activeTab, setActiveTab] = useState('General');

  const specsData = {
    General: (
      <div>
        <p>Brand: Example Brand</p>
        <p>Model: Example Model</p>
        <p>Release Date: 2024</p>
      </div>
    ),
    Display: (
      <div>
        <p>Screen Size: 6.5 inches</p>
        <p>Resolution: 1080 x 2400 pixels</p>
        <p>Refresh Rate: 90Hz</p>
      </div>
    ),
    Features: (
      <div>
        <p>Water Resistant: Yes</p>
        <p>Face Recognition: Yes</p>
        <p>Fingerprint Sensor: Under Display</p>
      </div>
    ),
    'OS & Processor': (
      <div>
        <p>Operating System: Android 14</p>
        <p>Processor: Octa-core</p>
        <p>GPU: Adreno 619</p>
      </div>
    ),
    Camera: (
      <div>
        <p>Rear Camera: 64 MP + 8 MP + 2 MP</p>
        <p>Front Camera: 32 MP</p>
        <p>Video Recording: 4K@30fps</p>
      </div>
    ),
    Battery: (
      <div>
        <p>Capacity: 4500 mAh</p>
        <p>Charging: Fast charging 33W</p>
      </div>
    ),
    'Memory & Storage': (
      <div>
        <p>RAM: 8 GB</p>
        <p>Storage: 128 GB</p>
        <p>Expandable Storage: Yes, up to 512 GB</p>
      </div>
    ),
    Connectivity: (
      <div>
        <p>Wi-Fi: Yes, 802.11 a/b/g/n/ac</p>
        <p>Bluetooth: 5.0</p>
        <p>NFC: Yes</p>
      </div>
    ),
    Additional: (
      <div>
        <p>Warranty: 1 Year</p>
        <p>Color Options: Black, White, Blue</p>
      </div>
    ),
  };

  return (
    <div className="bg-[#101113] p-10 md:p-20">
      <p className="text-[48px] mb-6">Full Specifications</p>
      <div className="flex">
        <div className="w-1/4">
          <ul className="flex flex-col">
            {Object.keys(specsData).map((tab) => (
              <li
                key={tab}
                className={`p-4 cursor-pointer ${activeTab === tab ? 'border-l-4 border-l-red-500 bg-[#252525]' : 'bg-transparent'}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-3/4 p-4 bg-[#252525]">
          {specsData[activeTab]}
        </div>
      </div>
    </div>
  );
};

export default FullSpecs;
