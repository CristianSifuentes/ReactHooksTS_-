import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import './index.css'
// import { PokemonPage } from './03-examples/PokemonPage'
// import { FocusScreen } from './04-useRef/FocusScreen'
import { TasksAppUseState } from './05-useReducer/TasksAppUseState'
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
    <TasksAppUseState></TasksAppUseState>
  </StrictMode>,
)
