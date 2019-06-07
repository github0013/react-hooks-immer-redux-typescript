import React from "react"
import ReactDOM from "react-dom"
import { useImmerReducer } from "use-immer"
import Loading, { reducer, context as LoadingContext } from "./Loading"
import Home from "./Home"

interface Props {}
const App: React.FC<Props> = props => {
  // src/components/Loading/context.tsで
  // stateの初期化をしているが、ここでも同じ初期化が必要になる...
  const [state, dispatch] = useImmerReducer(reducer, { value: false, count: 0 })

  return (
    <LoadingContext.Provider value={{ state, dispatch }}>
      <Home />
      <Loading />
    </LoadingContext.Provider>
  )
}

document.addEventListener("DOMContentLoaded", event => {
  ReactDOM.render(<App />, document.getElementById("root"))
})
