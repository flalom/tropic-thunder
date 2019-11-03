import React from 'react'
import styled from 'styled-components'

const ProfilePicWrapper = styled.img`
  border-radius: 50%;
  width: 100%;
`

const ProfilePicture = ({ mentorUrl }) => (
  <ProfilePicWrapper
    alt="Profile picture"
    src={require(`../../../backend/img/${mentorUrl}`)}
  />
)

export default ProfilePicture
