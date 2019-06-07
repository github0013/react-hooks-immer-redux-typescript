import React from "react"
import { useContext } from "../Loading"

interface Props {}
const Home: React.FC<Props> = props => {
  // LoadingのuseContextを使っている
  // 複数同じようにuseContextを使う場合は
  // import { useContext as useLoadingContext } from "../Loading"
  // などと名前を変更して使える
  const { state, dispatch } = useContext()

  return (
    <ul>
      <li>
        <button
          onClick={() => {
            if (state.value) {
              dispatch({ type: "hide" })
            } else {
              dispatch({ type: "show" })
            }
          }}
        >
          表示 / 非表示
        </button>
      </li>
      <li>表示回数: {state.count}</li>
    </ul>
  )
}
export default Home
