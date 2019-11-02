import React from 'react'
import styled from 'styled-components'
import {Radar} from 'react-chartjs-2'

const MentorProfile = styled.div`
  background-color: white;
  color: blue;
`

// Alice is first mentor
// Bob is second mentor
// Felix is treainie

const data = {
  labels: ['JSX', 'JS', 'Node.js', 'React', 'Angular', 'HTML', 'Redux', 'ESLint', 'NPM'],
  datasets: [
    {
      label: 'Alice',
      backgroundColor: 'rgba(179,181,198,0.2)',
      borderColor: 'rgba(179,181,198,1)',
      pointBackgroundColor: 'rgba(179,181,198,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(179,181,198,1)',
      data: [65, 59, 90, 81, 56, 55, 40]
    },
    {
      label: 'Felix',
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

export default props =>
  <MentorProfile>
    Hey my name is Lukasz

    <div>
      <h2>Here's you and mentor</h2>
      <Radar data={data} />
    </div>
  </MentorProfile>
