import CustomerSearchFilter from "./CustomerSearchFilter";
import SubjectSearchFilter from "./SubjectSearchFilter";
import StatusFilter from "./StatusFilter";
import SortSelect from "./SortSelect";

import type { PriorityFilterValue, SortOption, StatusFilterValue, Ticket } from "../types/ticket";
import PriorityFilter from "./PriorityFilter";

type Props = {
    sortedAndFilteredTickets: Ticket[],
    customerFilterString: string,
    subjectFilterString: string,
    statusFilterValue: StatusFilterValue,
    priorityFilterValue: PriorityFilterValue,
    sortOption: SortOption,
    handleCustomerFilterStringChange: (newValue: string) => void,
    handleSubjectFilterStringChange: (newValue: string) => void,
    handleStatusFilterValueChange: (newFilterValue: StatusFilterValue) => void,
    handlePriorityFilterValueChange: (newFilterValue: PriorityFilterValue) => void,
    handleSortOptionChange: (newSortOption: SortOption) => void
}

const SearchFilterSortLayout = ({ sortedAndFilteredTickets, customerFilterString, subjectFilterString, handleCustomerFilterStringChange, handleSubjectFilterStringChange, statusFilterValue, handleStatusFilterValueChange, priorityFilterValue, handlePriorityFilterValueChange, sortOption, handleSortOptionChange }: Props) => {

    const hasActiveFilters =
        customerFilterString !== "" ||
        subjectFilterString !== "" ||
        statusFilterValue !== "all" ||
        priorityFilterValue !== "all";

    const resultsLabel = sortedAndFilteredTickets.length === 1 ? "ticket" : "tickets"

    return (
        <>
            <CustomerSearchFilter customerFilterString={customerFilterString} handleCustomerFilterStringChange={handleCustomerFilterStringChange} />
            <SubjectSearchFilter subjectFilterString={subjectFilterString} handleSubjectFilterStringChange={handleSubjectFilterStringChange} />
            <StatusFilter statusFilterValue={statusFilterValue} handleStatusFilterValueChange={handleStatusFilterValueChange} />
            <PriorityFilter priorityFilterValue={priorityFilterValue} handlePriorityFilterValueChange={handlePriorityFilterValueChange} />
            <SortSelect sortOption={sortOption} handleSortOptionChange={handleSortOptionChange} />
            {hasActiveFilters && <p> {sortedAndFilteredTickets.length} {resultsLabel} found. </p>}
        </>
    )
}


export default SearchFilterSortLayout;