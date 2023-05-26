import { useState, useRef } from "react"
import NavBar from "./components/navBar"
import CardSlider from "./components/CardSlider"
import { gsap } from "gsap"

import "./App.css"

function App() {
  let imgArr = [
    { url: "src/assets/cappadocia-2000w.webp" },
    { url: "src/assets/japan-alps-2000w.webp" },
    { url: "src/assets/los-lances-2000w.webp" },
    { url: "src/assets/morocco-2000w.webp" },
  ]
  const [images, setImages] = useState(imgArr)

  return (
    <>
      <CardSlider images={images}></CardSlider>
    </>
  )
}

export default App
