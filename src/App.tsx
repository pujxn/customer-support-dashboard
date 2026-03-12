import { useState } from "react"
import { tickets } from "./mock/tickets";
import CardsList from "./components/CardsList"
import SearchFilterLayout from "./components/SearchFilterLayout";


const App = () => {

  const [creatorFilterString, setCreatorFilterString] = useState<string | null>(null);
  const [subjectFilterString, setSubjectFilterString] = useState<string | null>(null);


  const handleCreatorFilterStringChange = (newFilterString: string | null) => {
    setCreatorFilterString(newFilterString);
  }

  const handleSubjectFilterStringChange = (newFilterString: string | null) => {
    setSubjectFilterString(newFilterString);
  }

  const filteredTickets = tickets.filter(ticket => ticket.customerName.includes(creatorFilterString ?? "")).filter(ticket => ticket.subject.includes(subjectFilterString ?? ""))

  return (
    <>
      <SearchFilterLayout filteredTickets={filteredTickets} creatorFilterString={creatorFilterString} handleCreatorFilterStringChange={handleCreatorFilterStringChange} subjectFilterString={subjectFilterString} handleSubjectFilterStringChange={handleSubjectFilterStringChange} />
      <CardsList filteredTickets={filteredTickets} />
    </>
  )
}

export default App
