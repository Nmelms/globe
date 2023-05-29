import { useRef, useState } from "react"
import { gsap } from "gsap"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function CardSlider({ images, num, setNum, myDivRefs }) {
  library.add(fas)

  return (
    <>
      <div className="card-slider d-flex col-12">
        {images.map((image, index) => (
          <div
            ref={(element) => (myDivRefs.current[index] = element)}
            style={{ backgroundImage: `url(${image.url})` }}
            className="image-card"
          >
            <div className="title w-50 ps-4">{image.title}</div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Repellendus soluta vel, doloremque qui, ipsum blanditiis libero
              eius corporis rem eveniet excepturi necessitatibus iste.
            </p>
          </div>
        ))}
      </div>
    </>
  )
}
