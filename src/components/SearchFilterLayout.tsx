import CustomerSearchFilter from "./CustomerSearchFilter";
import SubjectSearchFilter from "./SubjectSearchFilter";
import StatusFilter from "./StatusFilter";

import type { PriorityFilterValue, StatusFilterValue, Ticket } from "../types/ticket";
import PriorityFilter from "./PriorityFilter";

type Props = {
    filteredTickets: Ticket[],
    customerFilterString: string,
    subjectFilterString: string,
    statusFilterValue: StatusFilterValue,
    priorityFilterValue: PriorityFilterValue,
    handleCustomerFilterStringChange: (newValue: string) => void,
    handleSubjectFilterStringChange: (newValue: string) => void,
    handleStatusFilterValueChange: (newFilterValue: StatusFilterValue) => void,
    handlePriorityFilterValueChange: (newFilterValue: PriorityFilterValue) => void
}

const SearchFilterLayout = ({ filteredTickets, customerFilterString, subjectFilterString, handleCustomerFilterStringChange, handleSubjectFilterStringChange, statusFilterValue, handleStatusFilterValueChange, priorityFilterValue, handlePriorityFilterValueChange }: Props) => {

    const hasActiveFilters =
        customerFilterString !== "" ||
        subjectFilterString !== "" ||
        statusFilterValue !== "all" ||
        priorityFilterValue !== "all";

    const resultsLabel = filteredTickets.length === 1 ? "ticket" : "tickets"

    return (
        <>
            <CustomerSearchFilter customerFilterString={customerFilterString} handleCustomerFilterStringChange={handleCustomerFilterStringChange} />
            <SubjectSearchFilter subjectFilterString={subjectFilterString} handleSubjectFilterStringChange={handleSubjectFilterStringChange} />
            <StatusFilter statusFilterValue={statusFilterValue} handleStatusFilterValueChange={handleStatusFilterValueChange} />
            <PriorityFilter priorityFilterValue={priorityFilterValue} handlePriorityFilterValueChange={handlePriorityFilterValueChange} />
            {hasActiveFilters && <p> {filteredTickets.length} {resultsLabel} found. </p>}
        </>
    )
}


export default SearchFilterLayout;