import React, { useState } from 'react'
import Pg from 'react-progress-bar-plus'

require('react-progress-bar-plus/lib/progress-bar.css')

const Progressbar = ({ steps }) => {
  const increment = 100 / steps
  const [percent, setPercent] = useState(0)
  return (
    <>
      <Pg percent={percent} />
      <button onClick={() => setPercent(percent + increment)}>next</button>
    </>
  )
}

export default Progressbar
