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
      subTitle: "Great Smoky Mountains",
      smallTitle: "Great Smoky Mountains",
      title: "Tennessee - United States",
    },
    {
      url: "/assets/japan-alps-2000w.webp",
      subTitle: "Yellowstone ",
      title: "Montana - United States",
    },
    {
      url: "/assets/los-lances-2000w.webp",
      subTitle: "Yosemite ",
      smallTitle: "Yosemite ",
      title: "California - United States",
    },
    {
      url: "/assets/morocco-2000w.webp",
      subTitle: "Grand Canyon",
      smallTitle: "Grand Canyon",
      title: "Arizona - United States",
    },
    {
      url: "/assets/mushroom.jpeg",
      subTitle: "Zion ",
      smallTitle: "Zion ",
      title: "Utah - United States",
    },
  ]
  const [images, setImages] = useState(imgArr)

  return (
    <>
      <NavBar />
      <div className="home-block ps-4">
        <div className="title-div">
          <p className="home-title">North Carolina - United States</p>
        </div>

        <div className="subTitle-div">
          <h1 className="home-subTitle">Göreme Valley</h1>
        </div>

        <div className="text-div">
          <p className="home-text px-2 m-0">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Repellendus soluta vel, doloremque qui, ipsum blanditiis libero eius
            corporis rem eveniet excepturi necessitatibus iste.
          </p>
        </div>
        <div className="mt-5 btn-wrapper">
          <button className="home-discover-btn rounded-pill">
            Discover Location
          </button>
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
