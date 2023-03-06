import Categories from "./components/categories";
import MainSection from "./components/mainSection";
import Navbar from "./components/nav";


export default function App() {
  return (
    <div className="w-full h-[100vh] bg-[#1E1E1E] overflow-hidden">
      <svg className="absolute bottom-0 right-0" width="111" height="427" viewBox="0 0 111 427" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M511.849 328.195C511.849 427.152 358.657 615 259.7 615C160.743 615 0 441.2 0 342.243C0 243.285 202.243 0 301.2 0C400.157 0 511.849 229.237 511.849 328.195Z" fill="#181A1B"/>
      </svg>

      <svg className="absolute" width="194" height="484" viewBox="0 0 194 484" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M193.341 243.5C193.341 382.786 -117.373 483.5 -256.659 483.5C-395.945 483.5 -382.659 323.486 -382.659 184.2C-382.659 44.9138 -225.445 -94 -86.159 -94C53.1273 -94 193.341 104.214 193.341 243.5Z" fill="#181A1B"/>
      </svg>
      <Navbar />
      <MainSection />
      <Categories />
    </div>
  )
}

