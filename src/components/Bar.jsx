import ProgressBar from "react-bootstrap/ProgressBar"

function Bar({ imgArr, num }) {
  return (
    <div className="bar-wrapper pt-2 d-flex justify-content-center align-items-center col-12 m-0 px-4">
      <ProgressBar
        widith={75}
        className="bar"
        variant="warning"
        min={0}
        max={imgArr.length}
        now={num}
      />
      <h2 className="text-white px-3">{num}</h2>
    </div>
  )
}

export default Bar
