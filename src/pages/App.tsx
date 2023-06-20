import Button from '../components/Button'
import { useState } from 'react'
import NavA from '../components/NavA'

function App() {
  const [isClicked, hasClicked] = useState(0)
  return (
    <>
      <p></p>
      <Button className='m-5 p-3 border-2 rounded-[25px]' change={() => hasClicked(isClicked + 1)}>{"has been clicked " + isClicked}</Button>
      <NavA where='/About'>About</NavA>
    </>
  )
}

export default App
