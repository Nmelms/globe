import React, { useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { gsap } from "gsap"

export default function SliderBtns({ myDivRefs, num, setNum }) {
  gsap.registerPlugin(Flip)

  const handleClick = () => {
    const updatedNum = num + 1
    setNum(updatedNum)
    // myDivRefs.current[num + 1].classList.add("absolute")
    const state = Flip.getState(myDivRefs.current[num])
    const state2 = Flip.getState(myDivRefs.current[num + 1])
    const state3 = Flip.getState(myDivRefs.current[num + 2])
    const state4 = Flip.getState(myDivRefs.current[num + 3])

    myDivRefs.current[num].classList.add("full-screen")

    Flip.from(state, { duration: 0.3 })
    Flip.from(state2, { duration: 0.3, ease: "back.out(1)", delay: 0.005 })
    Flip.from(state3, { duration: 0.3, ease: "back.out(1)", delay: 0.05 })
    Flip.from(state4, { duration: 0.3, ease: "back.out(1)", delay: 0.1 })
  }

  const handlePrevClick = () => {
    const updatedNum = num - 1
    setNum(updatedNum)

    const state = Flip.getState(myDivRefs.current[updatedNum])
    const state2 = Flip.getState(myDivRefs.current[updatedNum + 1])
    const state3 = Flip.getState(myDivRefs.current[updatedNum + 2])
    const state4 = Flip.getState(myDivRefs.current[updatedNum + 3])

    myDivRefs.current[updatedNum].classList.remove("full-screen")

    Flip.from(state, {
      duration: 0.3,
      scale: true,
      ease: "back.out(1)",
    })

    Flip.from(state2, { duration: 0.3, ease: "back.out(1)" })
    Flip.from(state3, { duration: 0.3, ease: "back.out(1)" })
    Flip.from(state4, { duration: 0.3, ease: "back.out(1)" })
  }

  return (
    <div className="buttons d-flex col-12 justify-content-center align-items-center">
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
