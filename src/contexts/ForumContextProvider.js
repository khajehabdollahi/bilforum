import React, { createContext, useState, useEffect } from 'react'

export const ForumContext = createContext()

export default function ForumContextProvider(props) {
  const [forums, setForums] = useState()
  const [forum, setForum] = useState()

  const getForumText = async () => {
    let res = await fetch('/api/forums')
    res = await res.json()
    setForums(res)
  }

  const getForumTextById = async (id) => {
    let res = await fetch('/api/forums' + id)
    res = await res.json()
    setForum(res)
  }

  useEffect(() => {
    getForumText()
  }, [])

  const values = {
    forums,
    forum,
    getForumTextById
  }

  return (
    <ForumContext.Provider value={values}>
      {props.children}
    </ForumContext.Provider>
  )
}