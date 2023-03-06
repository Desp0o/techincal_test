import MainSection from "./components/mainSection";
import Navbar from "./components/nav";


export default function App() {
  return (
    <div className="w-full h-[100vh] bg-[#1E1E1E] overflow-hidden">
      <Navbar />
      <MainSection />
    </div>
  )
}

