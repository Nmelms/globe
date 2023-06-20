import { useRef, useState } from "react"
import { gsap } from "gsap"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function CardSlider({
  images,
  num,
  setNum,
  myDivRefs,
  infoRefs,
}) {
  library.add(fas)

  return (
    <>
      <div className="card-slider container d-flex col-12">
        {images.map((image, index) => (
          <div
            ref={(element) => (myDivRefs.current[index] = element)}
            style={{ backgroundImage: `url(${image.url})` }}
            className="image-card"
          >
            <div
              ref={(element) => (infoRefs.current[index] = element)}
              className="info-block ps-4"
            >
              <div className="title-div">
                <p className="card-title">{image.title}</p>
              </div>

              <p className="small-title1">{image.title}</p>
              <p className="small-title2">{image.subTitle}</p>
              <div className="subTitle-div">
                <h1 className="card-subTitle">{image.subTitle}</h1>
              </div>
              <div className="text-div">
                <p className="card-text px-2">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Repellendus soluta vel, doloremque qui, ipsum blanditiis
                  libero eius corporis rem eveniet excepturi necessitatibus
                  iste.
                </p>
              </div>
              <div className="mt-5 btn-wrapper">
                <button className="discover-btn rounded-pill">
                  Discover Location
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
