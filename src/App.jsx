import { useState, useRef } from "react"
import CardSlider from "./components/CardSlider"
import SliderBtns from "./components/SliderBtns"
import Bar from "./components/Bar"
import { gsap } from "gsap"
import NavBar from "./components/NavBar.jsx"

import "./App.css"

function App() {
  const [num, setNum] = useState(0)
  const myDivRefs = useRef([])
  const infoRefs = useRef([])
  let imgArr = [
    {
      url: "/assets/cappadocia-2000w.webp",
      subTitle: "Göreme Valley",
      smallTitle: "Göreme Valley",
      title: "North Carolina - United States",
    },
    {
      url: "/assets/japan-alps-2000w.webp",
      subTitle: "Marrakech Merzouga",
      title: "South Dakota - United States",
    },
    {
      url: "/assets/los-lances-2000w.webp",
      subTitle: "Göreme Valley",
      smallTitle: "Göreme Valley",
      title: "North Carolina - United States",
    },
    {
      url: "/assets/morocco-2000w.webp",
      subTitle: "Göreme Valley",
      smallTitle: "Göreme Valley",
      title: "North Carolina - United States",
    },
    {
      url: "/assets/mushroom.jpeg",
      subTitle: "Göreme Valley",
      smallTitle: "Göreme Valley",
      title: "North Carolina - United States",
    },
  ]
  const [images, setImages] = useState(imgArr)

  return (
    <>
      <iframe
        src="https://conditvr.com/Okuma/presentation/home.html"
        title="W3Schools Free Online Web Tutorials"
        style={{ width: "100vw", height: "100vh" }}
      ></iframe>
    </>
  )
}

export default App
