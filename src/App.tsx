import { useState } from "react"

import CardsList from "./components/CardsList"
import CreatorSearchFilter from "./components/CreatorSearchFilter"

const App = () => {

  const [nameFilterString, setNameFilterString] = useState<string | null>(null);

  const handleNameFilterStringChange = (newFilterString: string | null) => {
    setNameFilterString(newFilterString);
  }

  return (
    <>
      <CreatorSearchFilter nameFilterString={nameFilterString} handleNameFilterStringChange={handleNameFilterStringChange} />
      <CardsList nameFilterString={nameFilterString} />
    </>
  )
}

export default App
