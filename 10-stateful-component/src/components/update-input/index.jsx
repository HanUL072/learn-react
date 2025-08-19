import { useId, useState } from 'react'
import './style.css'

/**
 * UpdateInput 컴포넌트
 * @param {Object} props
 * @param {string} props.label - 인풋 요소의 레이블
 */
export default function UpdateInput({ label }) {
  // console.log('UpdateInput 컴포넌트 렌더링')

  // 리액트 훅 함수를 사용해 함수현 컴포넌트의 상태 관리
  const [state, setState] = useState('') //[state, setState] -> [name, setName]
  const id = useId()

  // console.log(stateAndUpdater.at(0)) // state
  // console.log(stateAndUpdater.at(1)) // setState()

  // 상태 선언
  // const name = '한울'

  // 상태 업데이트
  // const setName = () => {}

  // 이벤트 리스너
  const handleInput = (e) => {
    const nextState = e.target.value
    setState(nextState)
  }

  return (
    <>
      <div className="update-input">
        <label htmlFor={id}>{label}</label>
        <input id={id} type="text" defaultValue={state} onInput={handleInput} />
      </div>
      <output>{state}</output>
    </>
  )
}
