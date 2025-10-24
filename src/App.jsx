import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import ProductViewer from "./components/ProductViewer"
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from "gsap/all"
import ShowCase from "./components/ShowCase"

gsap.registerPlugin(ScrollTrigger)

const App = () => {
    return (
        <main className="">
            <Navbar />
            <Hero />
            <ProductViewer />
            <ShowCase />
        </main>
    )
}

export default App