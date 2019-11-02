import React, { useState } from 'react'
import styled from 'styled-components'
import Pg from 'react-progress-bar-plus'

require('react-progress-bar-plus/lib/progress-bar.css')

const Button = styled.button`
`

const Progressbar = ({steps}) => {
        const increment = 100 / steps
  const [percent, setPercent] = useState(0)
  return <>
        <Pg percent={percent} />
        <Button onClick={() => setPercent(percent + increment)}>next</Button>
  </>
}

export default Progressbar
