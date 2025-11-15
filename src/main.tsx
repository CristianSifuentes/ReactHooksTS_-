import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'


import './index.css'
// import { PokemonPage } from './03-examples/PokemonPage'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { TasksAppUseState } from './05-useReducer/TasksAppUseState'
// import { TasksAppReducer } from './05-useReducer/TasksAppReducer'
// import { ScrambleWordsUseState } from './05-useReducer/ScrambleWordsUseState'
// import { ScrambleWordsUseReducer } from './05-useReducer/ScrambleWordsUseReducer'
// import { MemoHook } from './06-memos/MemoHook'
// import { MemoHook } from './06-memos/MemoHook'
// import { MemoCounter } from './06-memos/MemoCounter'
// import { InstagromApp } from './07-useOptimistic/InstagromApp'
import { ClientInformation } from './08-use-suspense/ClientInformation'
import { getUserAction } from './08-use-suspense/api/get-user.action'
// import { PokemonPage } from './03-examples/PokemonPage'
// import { HooksApp } from './HooksApp'
// import { TrafficLight } from './01-useState/TrafficLight'
// import { TrafficLightWithEffect } from './02-useEffect/TrafficLightWithEffect'
// import { TrafficLightWithHook } from './02-useEffect/TrafficLightWithHook'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <HooksApp /> */}
    {/* <TrafficLight /> */}
    {/* <TrafficLightWithEffect /> */}
    {/* <TrafficLightWithHook /> */}
    {/* <PokemonPage /> */}
    {/* <FocusScreen></FocusScreen> */}
    {/* <TasksAppUseState></TasksAppUseState> */}
    {/* <TasksAppReducer /> */}
    {/* <ScrambleWordsUseState /> */}
    {/* <ScrambleWordsUseState /> */}
     {/* <ScrambleWordsUseReducer />  */}
     {/* <MemoHook /> */}
     {/* <MemoCounter /> */}
     {/* <InstagromApp /> */}



    <Suspense
      fallback={
        <div className="bg-gradient flex flex-col">
          <h1 className="text-2xl">Loading...</h1>
        </div>
      }
    >
      <ClientInformation getUser={getUserAction(1001)} />
    </Suspense>
  </StrictMode>,
)
