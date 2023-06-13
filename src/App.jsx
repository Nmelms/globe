import { useState, useRef } from "react"
import NavBar from "./components/navBar"
import CardSlider from "./components/CardSlider"
import SliderBtns from "./components/SliderBtns"
import Bar from "./components/Bar"
import { gsap } from "gsap"

import "./App.css"

function App() {
  const [num, setNum] = useState(0)
  const myDivRefs = useRef([])
  const infoRefs = useRef([])
  let imgArr = [
    {
      url: "src/assets/cappadocia-2000w.webp",
      subTitle: "Göreme Valley",
      smallTitle: "Göreme Valley",
      title: "North Carolina - United States",
    },
    {
      url: "src/assets/japan-alps-2000w.webp",
      subTitle: "Marrakech Merzouga",
      title: "South Dakota - United States",
    },
    {
      url: "src/assets/los-lances-2000w.webp",
      subTitle: "Göreme Valley",
      smallTitle: "Göreme Valley",
      title: "North Carolina - United States",
    },
    {
      url: "src/assets/morocco-2000w.webp",
      subTitle: "Göreme Valley",
      smallTitle: "Göreme Valley",
      title: "North Carolina - United States",
    },
    {
      url: "src/assets/mushroom.jpeg",
      subTitle: "Göreme Valley",
      smallTitle: "Göreme Valley",
      title: "North Carolina - United States",
    },
  ]
  const [images, setImages] = useState(imgArr)

  return (
    <>
      <div className="home-block full-screen">
        <div className="title-div">
          <p className="home-title">North Carolina - United States</p>
        </div>

        <div className="subTitle-div">
          <h1 className="home-subTitle">North Carolina - United States</h1>
        </div>

        <div className="text-div">
          <p className="home-text px-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Repellendus soluta vel, doloremque qui, ipsum blanditiis libero eius
            corporis rem eveniet excepturi necessitatibus iste.
          </p>
        </div>
      </div>
      <div className="slider-wrapper ">
        <CardSlider
          myDivRefs={myDivRefs}
          infoRefs={infoRefs}
          num={num}
          setNum={setNum}
          images={images}
        ></CardSlider>
        <div className="bottom-wrapper d-flex justify-content-center container row">
          <Bar num={num} imgArr={imgArr}></Bar>
          <SliderBtns
            num={num}
            setNum={setNum}
            myDivRefs={myDivRefs}
            infoRefs={infoRefs}
            images={imgArr}
          ></SliderBtns>
        </div>
      </div>
    </>
  )
}

export default App
