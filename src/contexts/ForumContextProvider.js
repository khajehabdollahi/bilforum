import React, { createContext, useState, useEffect } from 'react'

export const ForumContext = createContext()

export default function ForumContextProvider(props) {
  const [threads, setThreads] = useState()
  const [thread, setThread] = useState()
  const [comments, setComments] = useState()

  const getForumText = async () => {
    let res = await fetch('/api/threads')
    res = await res.json()
    setThreads(res)
  }

  const getForumTextById = async (id) => {
    let res1 = await fetch('/api/threads/' + id)
    let res2 = await fetch('/api/threads/' + id + '/comments')
    res1 = await res1.json()
    res2 = await res2.json()
    setThread(res1)
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
    threads,
    thread,
    getForumTextById,
    comments
  }

  return (
    <ForumContext.Provider value={values}>
      {props.children}
    </ForumContext.Provider>
  )
}