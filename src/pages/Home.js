import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../App'


export const Home = () => {
  const { username } = useContext(AppContext)
  return (
    <div>This is the homepage and user is {username}</div>
  )
}
