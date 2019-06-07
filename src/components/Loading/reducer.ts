import { State } from "./context"

// 宣言する事でオートコンプリートが利く
type ActionType = { type: "show" } | { type: "hide" }
export { ActionType }

// src/components/index.tsxでuseImmerReducerを使っているので、
// stateを直接変更しても問題ない（通常は {...state, xxx: yyy} などして別オブジェクトにする必要がある）
const dispatch = (state: State, action: ActionType) => {
  switch (action.type) {
    case "show":
      state.value = true
      state.count += 1
      break
    case "hide":
      state.value = false
      break
    default:
      break
  }
}

export default dispatch
