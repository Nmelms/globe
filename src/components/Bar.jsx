import ProgressBar from "react-bootstrap/ProgressBar"

function Bar({ imgArr, num }) {
  return (
    <div className="bar-wrapper d-flex align-items-center">
      <ProgressBar
        widith={75}
        className="bar"
        variant="warning"
        min={0}
        max={imgArr.length}
        now={num}
      />
      <h2 className="text-white p-4">{num}</h2>
    </div>
  )
}

export default Bar
