import React from "react"

import context, { useContext } from "./context"
import reducer from "./reducer"
export { context, useContext, reducer }

const Loading = () => {
  const {
    state: { value },
  } = useContext()

  if (!value) {
    return null
  }

  return <div>loading...</div>
}
export default Loading
