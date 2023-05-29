import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { gsap } from "gsap"

export default function SliderBtns({ myDivRefs, num, setNum }) {
  gsap.registerPlugin(Flip)

  const handleClick = () => {
    console.log("click")
    let state = Flip.getState(myDivRefs.current[num])
    let state2 = Flip.getState(myDivRefs.current[num + 1])
    let state3 = Flip.getState(myDivRefs.current[num + 2])
    let state4 = Flip.getState(myDivRefs.current[num + 3])
    setNum(num + 1)

    myDivRefs.current[num].classList.add("full-screen")

    Flip.from(state, { duration: 2 })
    Flip.from(state2, { duration: 2, ease: "back.out(1)", delay: 0.005 })
    Flip.from(state3, { duration: 2, ease: "back.out(1)", delay: 0.05 })
    Flip.from(state4, { duration: 2, ease: "back.out(1)", delay: 0.1 })
  }
  const handlePrevClick = () => {
    let state = Flip.getState(myDivRefs.current[num])
    let state2 = Flip.getState(myDivRefs.current[num + 1])
    let state3 = Flip.getState(myDivRefs.current[num + 2])
    let state4 = Flip.getState(myDivRefs.current[num + 3])

    setNum(num - 1)

    myDivRefs.current[num].classList.remove("full-screen")
    Flip.from(state, { duration: 2 })
    Flip.from(state2, { duration: 2 })
    Flip.from(state3, { duration: 2 })
    Flip.from(state4, { duration: 2 })
  }
  return (
    <div className="buttons d-flex col-4 align-items-center">
      <button
        className="slider-btn d-flex align-items-center justify-content-center mx-4 col-1"
        onClick={() => handlePrevClick()}
      >
        <FontAwesomeIcon
          className="text-white"
          icon="fa-solid fa-chevron-left"
        />
      </button>
      <button
        className="slider-btn d-flex align-items-center justify-content-center col-1"
        onClick={() => handleClick()}
      >
        <FontAwesomeIcon
          className="text-white"
          icon="fa-solid fa-chevron-right"
        />
      </button>
    </div>
  )
}
