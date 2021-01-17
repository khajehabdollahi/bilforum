import React, { createContext, useState, useEffect } from 'react'

export const ForumContext = createContext()

export default function ForumContextProvider(props) {
  const [forums, setForums] = useState()
  const [forum, setForum] = useState()
  const [comments, setComments] = useState()

  const getForumText = async () => {
    let res = await fetch('/api/forums')
    res = await res.json()
    setForums(res)
  }

  const getForumTextById = async (id) => {
    let res1 = await fetch('/api/forums/' + id)
    let res2 = await fetch('/api/forums/' + id + '/comments')
    res1 = await res1.json()
    res2 = await res2.json()
    setForum(res1)
    setComments(res2)
    console.log(comments);
  }

  // const getForumComments = async (id) => {
  //   let res = await fetch('/api/forums/' + id + '/comments')
  //   res = await res.json()
  //   setComments(res)
  //   console.log(comments);
  // }

  useEffect(() => {
    getForumText()
  }, [])

  const values = {
    getForumText,
    forums,
    forum,
    getForumTextById,
    comments
  }

  return (
    <ForumContext.Provider value={values}>
      {props.children}
    </ForumContext.Provider>
  )
}