import React from 'react'
import styled from 'styled-components'
import {Radar} from 'react-chartjs-2';

const Cybercity = styled.div`
  background-color: white;
  color: green;
`

const data = {
  labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(179,181,198,0.2)',
      borderColor: 'rgba(179,181,198,1)',
      pointBackgroundColor: 'rgba(179,181,198,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(179,181,198,1)',
      data: [65, 59, 90, 81, 56, 55, 40]
    },
    {
      label: 'My Second dataset',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      pointBackgroundColor: 'rgba(255,99,132,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(255,99,132,1)',
      data: [28, 48, 40, 19, 96, 27, 100]
    }
  ]
}

const Lukasz = props =>
<Cybercity>
  Hey my name is Lukasz

  Welcome to my <blink style={{ color: 'blue', backgroundColor: 'red'}}>homepage</blink>
  <div>
    <h2>Here's you and mentor</h2>
    <Radar data={data} />
  </div>
</Cybercity>

export default Lukasz
