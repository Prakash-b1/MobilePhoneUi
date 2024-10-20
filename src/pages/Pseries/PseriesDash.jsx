import Accesories from "./Accesories"
import BatteryLab from "./BatteryLab"
import Dashboard from "./Dashboard"
import Details from "./Details"
import DeviceSpecs from "./DeviceSpecs"
import FullSpecs from "./FullSpecs"
import JuiceUpFastPage from "./JuiceUpFastPage"
import MobileCarousel from "./MobileCarousel"
import MobileSpecs from "./MobileSpecs"
import Overview from "./Overview"
import ProcessorSection from "./ProcessorSection"
import Reviews from "./Reviews"
import Video from "./Video"

const PseriesDash = () => {
  return (
    <div>
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

export default PseriesDash
