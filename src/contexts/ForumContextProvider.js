import React, { createContext, useState, useEffect } from 'react'

export const ForumContext = createContext()

export default function ForumContextProvider(props) {
  const [forums, setForums] = useState()

  const getForumText = async () => {
    let res = await fetch('/api/forums')
    res = await res.json()
    setForums(res)
    console.log(res);
  }

  const values = {
    forums,
    getForumText
  }

  return (
    <ForumContext.Provider value={values}>
      {props.children}
    </ForumContext.Provider>
  )
}