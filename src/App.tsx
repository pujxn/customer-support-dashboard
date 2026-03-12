import { useState } from "react"
import { tickets } from "./mock/tickets";
import CardsList from "./components/CardsList"
import SearchFilterLayout from "./components/SearchFilterLayout";


const App = () => {

  const [customerFilterString, setCustomerFilterString] = useState<string>("");
  const [subjectFilterString, setSubjectFilterString] = useState<string>("");


  const handleCustomerFilterStringChange = (newFilterString: string) => {
    setCustomerFilterString(newFilterString);
  }

  const handleSubjectFilterStringChange = (newFilterString: string) => {
    setSubjectFilterString(newFilterString);
  }

  const filteredTickets = tickets.filter(ticket => ticket.customerName.toLowerCase().includes(customerFilterString.toLowerCase() ?? "")).filter(ticket => ticket.subject.toLowerCase().includes(subjectFilterString.toLowerCase() ?? ""))

  return (
    <>
      <SearchFilterLayout filteredTickets={filteredTickets} customerFilterString={customerFilterString} handleCustomerFilterStringChange={handleCustomerFilterStringChange} subjectFilterString={subjectFilterString} handleSubjectFilterStringChange={handleSubjectFilterStringChange} />
      <CardsList filteredTickets={filteredTickets} />
    </>
  )
}

export default App
