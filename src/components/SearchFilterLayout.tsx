import CustomerSearchFilter from "./CustomerSearchFilter";
import SubjectSearchFilter from "./SubjectSearchFilter";
import StatusFilter from "./StatusFilter";

import type { StatusFilterValue, Ticket } from "../types/ticket";


type Props = {
    filteredTickets: Ticket[],
    customerFilterString: string,
    subjectFilterString: string,
    statusFilterValue: StatusFilterValue,
    handleCustomerFilterStringChange: (newValue: string) => void,
    handleSubjectFilterStringChange: (newValue: string) => void,
    handleStatusFilterValueChange: (newFilterValue: StatusFilterValue) => void
}

const SearchFilterLayout = ({ filteredTickets, customerFilterString, subjectFilterString, handleCustomerFilterStringChange, handleSubjectFilterStringChange, statusFilterValue, handleStatusFilterValueChange }: Props) => {

    const hasActiveFilters =
        customerFilterString !== "" ||
        subjectFilterString !== "" ||
        statusFilterValue !== "all";

    const resultsLabel = filteredTickets.length === 1 ? "ticket" : "tickets"

    return (
        <>
            <CustomerSearchFilter customerFilterString={customerFilterString} handleCustomerFilterStringChange={handleCustomerFilterStringChange} />
            <SubjectSearchFilter subjectFilterString={subjectFilterString} handleSubjectFilterStringChange={handleSubjectFilterStringChange} />
            <StatusFilter statusFilterValue={statusFilterValue} handleStatusFilterValueChange={handleStatusFilterValueChange} />
            {hasActiveFilters && <p> {filteredTickets.length} {resultsLabel} found. </p>}
        </>
    )
}


export default SearchFilterLayout;