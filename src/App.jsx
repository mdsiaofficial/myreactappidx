import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'
function App() {
  const [color, setColor] = useState("red");

  
  return (
    <>
      <div style={{bgColor: color}} className="w-full h-screen duration">

        <div className="fixed flex justify-center bottom-12 inset-x-0 px-2 flex-wrap">
          <div className="flex flex-wrap justify-center shadow-xl gap-3 bg-white px-3 py-2 rounded-xl">Test</div>
        </div>
      </div>
    </>
  )
}

export default App
