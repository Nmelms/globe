import { useRef, useState } from "react"
import { gsap } from "gsap"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function CardSlider({ images }) {
  library.add(fas)

  gsap.registerPlugin(Flip)
  const myDivRefs = useRef([])
  const [num, setNum] = useState(0)

  const handleClick = () => {
    let state = Flip.getState(myDivRefs.current[num])
    let state2 = Flip.getState(myDivRefs.current[num + 1])
    let state3 = Flip.getState(myDivRefs.current[num + 2])
    let state4 = Flip.getState(myDivRefs.current[num + 3])

    setNum(num + 1)
    console.log(num)
    myDivRefs.current[num].classList.add("full-screen")
    Flip.from(state, { duration: 0.5 })
    Flip.from(state2, { duration: 0.5, ease: "back.out(1)", delay: 0.005 })
    Flip.from(state3, { duration: 0.5, ease: "back.out(1)", delay: 0.05 })
    Flip.from(state4, { duration: 0.5, ease: "back.out(1)", delay: 0.1 })
  }
  const handlePrevClick = () => {
    let state = Flip.getState(myDivRefs.current[num])
    let state2 = Flip.getState(myDivRefs.current[num + 1])
    let state3 = Flip.getState(myDivRefs.current[num + 2])
    let state4 = Flip.getState(myDivRefs.current[num + 3])

    setNum(num - 1)

    myDivRefs.current[num].classList.remove("full-screen")
    Flip.from(state, { duration: 0.5 })
    Flip.from(state2, { duration: 0.5 })
    Flip.from(state3, { duration: 0.5 })
    Flip.from(state4, { duration: 0.5 })
  }

  return (
    <>
      <div className="card-slider d-flex">
        {images.map((image, index) => (
          <div
            ref={(element) => (myDivRefs.current[index] = element)}
            style={{ backgroundImage: `url(${image.url})` }}
            className="image-card"
          ></div>
        ))}
      </div>

      <div className="buttons d-flex">
        <button
          className="slider-btn d-flex align-items-center justify-content-center"
          onClick={() => handlePrevClick()}
        >
          <FontAwesomeIcon
            className="text-white"
            icon="fa-solid fa-chevron-left"
          />
        </button>
        <button
          className="slider-btn d-flex align-items-center justify-content-center"
          onClick={() => handleClick()}
        >
          <FontAwesomeIcon
            className="text-white"
            icon="fa-solid fa-chevron-right"
          />
        </button>
      </div>
    </>
  )
}
