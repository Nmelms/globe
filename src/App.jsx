import { useState, useRef } from "react"
import NavBar from "./components/navBar"
import CardSlider from "./components/CardSlider"
import Bar from "./components/Bar"
import { gsap } from "gsap"

import "./App.css"

function App() {
  const [num, setNum] = useState(0)
  let imgArr = [
    { url: "src/assets/cappadocia-2000w.webp", title: "NORTH CAROLINA" },
    { url: "src/assets/japan-alps-2000w.webp", title: "SOUTH CAROLINA" },
    { url: "src/assets/los-lances-2000w.webp" },
    { url: "src/assets/morocco-2000w.webp" },
    { url: "src/assets/mushroom.jpeg", title: "AMANITA MUSCARIA" },
  ]
  const [images, setImages] = useState(imgArr)

  return (
    <>
      <div className="slider-wrapper">
        <CardSlider num={num} setNum={setNum} images={images}></CardSlider>
        <Bar num={num} imgArr={imgArr}></Bar>
      </div>
    </>
  )
}

export default App
