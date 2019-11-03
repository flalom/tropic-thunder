import React from 'react'
import styled from 'styled-components'

const ProfilePicWrapper = styled.img`
  max-height: 350px;
  min-height: 350px;
  height: 350px;
`

const ProfilePicture = ({ mentorUrl }) => (
  <ProfilePicWrapper
    alt="Profile picture"
    src={require(`../public/img/${mentorUrl}`)}
  />
)

export default ProfilePicture
