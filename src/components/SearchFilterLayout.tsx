import CustomerSearchFilter from "./CustomerSearchFilter";
import SubjectSearchFilter from "./SubjectSearchFilter";
import type { Ticket } from "../types/ticket";

type Props = {
    filteredTickets: Ticket[],
    customerFilterString: string,
    subjectFilterString: string,
    handleCustomerFilterStringChange: (newValue: string) => void,
    handleSubjectFilterStringChange: (newValue: string) => void
}

const SearchFilterLayout = ({ filteredTickets, customerFilterString, subjectFilterString, handleCustomerFilterStringChange, handleSubjectFilterStringChange }: Props) => {



    return (
        <>
            <CustomerSearchFilter customerFilterString={customerFilterString} handleCustomerFilterStringChange={handleCustomerFilterStringChange} />
            <SubjectSearchFilter subjectFilterString={subjectFilterString} handleSubjectFilterStringChange={handleSubjectFilterStringChange} />

            {(customerFilterString !== "" || subjectFilterString !== "") && <p> {filteredTickets.length} {filteredTickets.length > 1 ? "tickets" : "ticket"} found. </p>}
        </>
    )
}


export default SearchFilterLayout;