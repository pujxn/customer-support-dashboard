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


    return (
        <>
            <CustomerSearchFilter customerFilterString={customerFilterString} handleCustomerFilterStringChange={handleCustomerFilterStringChange} />
            <SubjectSearchFilter subjectFilterString={subjectFilterString} handleSubjectFilterStringChange={handleSubjectFilterStringChange} />
            <StatusFilter statusFilterValue={statusFilterValue} handleStatusFilterValueChange={handleStatusFilterValueChange} />
            {(customerFilterString !== "" || subjectFilterString !== "") && <p> {filteredTickets.length} {filteredTickets.length > 1 ? "tickets" : "ticket"} found. </p>}
        </>
    )
}


export default SearchFilterLayout;