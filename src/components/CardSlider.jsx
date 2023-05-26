import { useRef, useState } from "react"
import { gsap } from "gsap"

export default function CardSlider({ images }) {
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
    Flip.from(state, { duration: 2, ease: "power1.out" })
    Flip.from(state2, { duration: 2 })
    Flip.from(state3, { duration: 2 })
    Flip.from(state4, { duration: 2 })
  }
  const handlePrevClick = () => {
    let state = Flip.getState(myDivRefs.current[num])
    let state2 = Flip.getState(myDivRefs.current[num + 1])
    let state3 = Flip.getState(myDivRefs.current[num + 2])
    let state4 = Flip.getState(myDivRefs.current[num + 3])

    setNum(num - 1)

    myDivRefs.current[num].classList.remove("full-screen")
    Flip.from(state, { duration: 2, ease: "power1.out" })
    Flip.from(state2, { duration: 2 })
    Flip.from(state3, { duration: 2 })
    Flip.from(state4, { duration: 2 })
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

      <div className="buttons">
        <button onClick={() => handleClick()}>next</button>
        <button onClick={() => handlePrevClick()}>prev</button>
      </div>
    </>
  )
}
