// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { FormCreateTask } from './components/FormCreateTask'
import { Header } from './components/Header'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <FormCreateTask/>
    </>
  )
}

export default App
