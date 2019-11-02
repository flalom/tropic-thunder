import React from 'react'
import styled from 'styled-components'

const Cybercity = styled.div`
  background-color: pink;
  color: green;
`

const Lukasz = props =>
<Cybercity>
  Hey my name is Lukasz
  
  Welcome to my <blink style={{ color: 'blue', backgroundColor: 'red'}}>homepage</blink>
</Cybercity>

export default Lukasz
