import { useState } from "react"
import { tickets } from "./mock/tickets";
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

  const filteredTickets = tickets.filter(ticket => ticket.customerName.includes(nameFilterString ?? "")).filter(ticket => ticket.subject.includes(subjectFilterString ?? ""))

  return (
    <>
      <SearchFilterLayout filteredTickets={filteredTickets} nameFilterString={nameFilterString} handleNameFilterStringChange={handleNameFilterStringChange} subjectFilterString={subjectFilterString} handleSubjectFilterStringChange={handleSubjectFilterStringChange} />
      <CardsList filteredTickets={filteredTickets} />
    </>
  )
}

export default App
