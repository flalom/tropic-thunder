import React from 'react'

const ProfilePicture = ({ mentorUrl }) => (
  <img
    alt="Profile picture"
    src={require(`../public/img/${mentorUrl}`)}
    style={{ maxHeight: '350px', maxWidth: '100%' }}
  />
)

export default ProfilePicture
