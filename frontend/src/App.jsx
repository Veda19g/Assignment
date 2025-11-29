import HeroSection from "./components/HeroSection"
import TableSection from "./components/TableSection"
import GraphSection from "./components/GraphSection"
import MostPopularTools from "./components/MostPopularTools"
import Navbar from "./components/Navbar"
function App() {
  return (
    <div>
      <HeroSection />
      <MostPopularTools />
      <TableSection />
      <GraphSection />
    </div>
  )
}

export default App
