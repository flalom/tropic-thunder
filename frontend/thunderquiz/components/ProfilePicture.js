import React from 'react'
import styled from 'styled-components'

const ProfilePicture = ({ mentorUrl }) => (
  <img
    alt="Profile picture"
    src={require(`../../../backend/img/${mentorUrl}`)}
  />
)

export default ProfilePicture
