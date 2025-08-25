import { useState } from 'react'
import { LearnSection } from '@/components'

export default function App() {
  console.log('App 렌더링')

  const [isVisible, setIsVisible] = useState(true)
  const handleInput = (e) => setIsVisible(e.target.checked)

  return (
    <LearnSection
      className="p-10"
      title="컴포넌트 라이프사이클(생명주기: 탄생(mount) -> 성장(update) -> 죽음(unmount))"
    >
      <label className="flex gap-1 items-center">
        <input
          type="checkbox"
          name="is-visible"
          checked={isVisible}
          onChange={handleInput}
        />
        Child 컴포넌트 표시 ({isVisible.toString()})
      </label>
      {isVisible ? <Child /> : null}
    </LearnSection>
  )
}

// 컴포넌트 라이프사이클
// 1. 생성(mount)
// 2. 변경(update) x N
// 0. 소멸(unmount)
function Child() {
  console.log('Child 렌더링')

  // 일반 변수 정의
  let count = 10

  const [headline, setHeadline] = useState('Child 컴포넌트')

  return (
    <article className="mt-5 p-5 border-2 border-inherit">
      <h2>{headline}</h2>
      <button
        type="button"
        className="button mt-2"
        onClick={(e) => {
          // 이벤트 핸들러 (사용자에 의해 브라우저에서 실행)
          // 리액트 렌더링 프로세스와는 전혀 무관!!!!
          //
          // 명령형 프로그래밍
          //
          // 상태를 사용하지 않고 (가상 DOM을 사용하지 않고)
          // 직접 DOM에 접근/조작
          count = count + 10
          console.log(`updated count value = ${count}`)
          e.target.textContent = String(count)
          // 초점 이동시키고자 한다면?
          // 리액트가 못하는 일 (부수효과)
          document.querySelector('.input').select()
        }}
      >
        {count}
      </button>
    </article>
  )
}
