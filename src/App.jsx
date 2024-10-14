import Navbar from "./components/Navbar/Navbar"
import Accesories from "./pages/Accesories"
import BatteryLab from "./pages/BatteryLab"
import Dashboard from "./pages/Dashboard"
import Details from "./pages/Details"
import DeviceSpecs from "./pages/DeviceSpecs"
import FullSpecs from "./pages/FullSpecs"
import JuiceUpFastPage from "./pages/JuiceUpFastPage"
import MobileCarousel from "./pages/MobileCarousel"
import MobileSpecs from "./pages/MobileSpecs"
import Overview from "./pages/Overview"
import ProcessorSection from "./pages/ProcessorSection"
import Reviews from "./pages/Reviews"
import Video from "./pages/Video"

function App() {
  return (
    <div className="bg-[#1c1b1b] text-white">
     <Navbar/>
     <Dashboard/>
     <Overview/>
     <Video/>
     <JuiceUpFastPage/>
     <BatteryLab/>
     <DeviceSpecs/>
     <Details/>
     <ProcessorSection/>
     <MobileSpecs/>
     <MobileCarousel/>
     <FullSpecs/>
     <Reviews/>
     <Accesories/>
    </div>
  )
}

export default App
