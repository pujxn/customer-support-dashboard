import { useState } from "react"

import CardsList from "./components/CardsList"
import SearchFilterLayout from "./components/SearchFilterLayout";

const App = () => {

  const [nameFilterString, setNameFilterString] = useState<string | null>(null);
  const [subjectFilterString, setSubjectFilterString] = useState<string | null>(null);


  const handleNameFilterStringChange = (newFilterString: string | null) => {
    setNameFilterString(newFilterString);
  }

  const handleSubjectFilterStringChange = (newFilterString: string | null) => {
    setSubjectFilterString(newFilterString);
  }

  return (
    <>
      <SearchFilterLayout nameFilterString={nameFilterString} handleNameFilterStringChange={handleNameFilterStringChange} subjectFilterString={subjectFilterString} handleSubjectFilterStringChange={handleSubjectFilterStringChange} />
      <CardsList nameFilterString={nameFilterString} subjectFilterString={subjectFilterString} />
    </>
  )
}

export default App
