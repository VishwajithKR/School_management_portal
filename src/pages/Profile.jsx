import React from 'react'
import { useSelector } from 'react-redux';

const Profile = () => {
  const user = useSelector((state) => state.user.registerData);

  return (
    <div>{user[0].name}</div>
  )
}

export default Profile