import { useState } from "react"
import { tickets } from "./mock/tickets";
import CardsList from "./components/CardsList"
import SearchFilterLayout from "./components/SearchFilterLayout";

import type { StatusFilterValue } from "./types/ticket";

const App = () => {

  const [customerFilterString, setCustomerFilterString] = useState<string>("");
  const [subjectFilterString, setSubjectFilterString] = useState<string>("");
  const [statusFilterValue, setStatusFilterValue] = useState<StatusFilterValue>("all");


  const handleCustomerFilterStringChange = (newFilterString: string) => {
    setCustomerFilterString(newFilterString);
  }

  const handleSubjectFilterStringChange = (newFilterString: string) => {
    setSubjectFilterString(newFilterString);
  }

  const handleStatusFilterValueChange = (newFilterValue: StatusFilterValue) => {
    setStatusFilterValue(newFilterValue);
  }

  const filteredTickets = tickets.filter(ticket => ticket.customerName.toLowerCase().includes(customerFilterString.toLowerCase())).filter(ticket => ticket.subject.toLowerCase().includes(subjectFilterString.toLowerCase()))

  return (
    <>
      <SearchFilterLayout filteredTickets={filteredTickets} customerFilterString={customerFilterString} handleCustomerFilterStringChange={handleCustomerFilterStringChange} subjectFilterString={subjectFilterString} handleSubjectFilterStringChange={handleSubjectFilterStringChange}
        statusFilterValue={statusFilterValue} handleStatusFilterValueChange={handleStatusFilterValueChange} />

      <CardsList filteredTickets={filteredTickets} />
    </>
  )
}

export default App
