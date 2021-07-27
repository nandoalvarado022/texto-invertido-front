import { useState } from "react"
import { store } from "../../redux/store"
import MainInterface from "./Mainnterface"

const Main = (props) => {
  const [history, setHistory] = useState([])
  const [text, setText] = useState(null)

  const getResult = async () => {
    if (!text) return
    const req = await fetch(`http://localhost/echo?text=${text}`)
    const res = await req.json()
    const newHistory = [
      res,
      ...history
    ]
    store.dispatch({ "type": "@words/added", payload: newHistory })
    setHistory(newHistory)
    setText(null)
  }

  return <MainInterface {...{ getResult, history, setText }} />
}

export default Main