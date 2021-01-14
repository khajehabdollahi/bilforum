import React, { createContext, useState, useEffect } from 'react'

export const UserContext = createContext()

export default function ForumContextProvider(props) {
  const [user, setUser] = useState()

  useEffect(()=>{
    const session = JSON.parse(localStorage.getItem('session'))
    if (session) {
      setUser(session)
    }
  },[])


  const values = {
    user,
    setUser
  }

  return (
    <UserContext.Provider value={values}>
      {props.children}
    </UserContext.Provider>
  )
}