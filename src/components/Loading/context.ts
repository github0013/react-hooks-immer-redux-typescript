import React from "react"
import { ActionType } from "./reducer"

interface State {
  value: boolean
  count: number
}

interface ContextProps {
  state: State
  dispatch: React.Dispatch<ActionType>
}
const context = React.createContext<ContextProps>({
  // ここで初期化する必要があるが、
  // src/components/index.tsx useImmerReducerでも同じ処理要求される部分がDRYに出来てない点
  state: { value: false, count: 0 },
  // React.Dispatchの型で初期化
  // type Dispatch<A> = (value: A) => void;
  dispatch: value => {},
})

// これを宣言しておく事で特定のcomponentのuseContextが使いやすくなる
// 例 src/components/Home/index.tsx
const useContext = () => {
  return React.useContext<ContextProps>(context)
}

export { State, useContext }
export default context
