import { useState } from "react"
import { tickets } from "./mock/tickets";
import CardsList from "./components/CardsList"
import SearchFilterLayout from "./components/SearchFilterLayout";

import type { StatusFilterValue } from "./types/ticket";
import type { PriorityFilterValue } from "./types/ticket";

const App = () => {

  const [customerFilterString, setCustomerFilterString] = useState<string>("");
  const [subjectFilterString, setSubjectFilterString] = useState<string>("");
  const [statusFilterValue, setStatusFilterValue] = useState<StatusFilterValue>("all");
  const [priorityFilterValue, setPriorityFilterValue] = useState<PriorityFilterValue>("all");


  const handleCustomerFilterStringChange = (newFilterString: string) => {
    setCustomerFilterString(newFilterString);
  }

  const handleSubjectFilterStringChange = (newFilterString: string) => {
    setSubjectFilterString(newFilterString);
  }

  const handleStatusFilterValueChange = (newFilterValue: StatusFilterValue) => {
    setStatusFilterValue(newFilterValue);
  }

  const handlePriorityFilterValueChange = (newFilterValue: PriorityFilterValue) => {
    setPriorityFilterValue(newFilterValue);
  }

  const filteredTickets = tickets.filter(ticket => {
    const matchesCustomerName = ticket.customerName.toLowerCase().includes(customerFilterString.toLowerCase());
    const matchesSubject = ticket.subject.toLowerCase().includes(subjectFilterString.toLowerCase());
    const matchesStatus = statusFilterValue === "all" || ticket.status === statusFilterValue;
    const matchesPriority = priorityFilterValue === "all" || ticket.priority === priorityFilterValue;

    return matchesCustomerName && matchesSubject && matchesStatus && matchesPriority;
  })

  return (
    <>
      <SearchFilterLayout filteredTickets={filteredTickets} customerFilterString={customerFilterString} handleCustomerFilterStringChange={handleCustomerFilterStringChange} subjectFilterString={subjectFilterString} handleSubjectFilterStringChange={handleSubjectFilterStringChange}
        statusFilterValue={statusFilterValue} handleStatusFilterValueChange={handleStatusFilterValueChange}
        priorityFilterValue={priorityFilterValue} handlePriorityFilterValueChange={handlePriorityFilterValueChange}
      />

      <CardsList filteredTickets={filteredTickets} />
    </>
  )
}

export default App
