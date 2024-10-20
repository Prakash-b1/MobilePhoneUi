import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar/Navbar"
import PseriesDash from "./pages/Pseries/PseriesDash"


function App() {
  return (
    <div className="bg-[#1c1b1b] text-white">
      <Navbar />
      <PseriesDash />
      <Footer />
    </div>
  )
}

export default App
