import CreatorSearchFilter from "./CreatorSearchFilter";
import SubjectSearchFilter from "./SubjectSearchFilter";

import { tickets } from "../mock/tickets";

type Props = {
    nameFilterString: string | null,
    subjectFilterString: string | null,
    handleNameFilterStringChange: (newValue: string | null) => void,
    handleSubjectFilterStringChange: (newValue: string | null) => void
}

const SearchFilterLayout = ({ nameFilterString, subjectFilterString, handleNameFilterStringChange, handleSubjectFilterStringChange }: Props) => {

    const filteredTickets = tickets.filter(ticket => ticket.customerName.includes(nameFilterString ?? "")).filter(ticket => ticket.subject.includes(subjectFilterString ?? ""))

    return (
        <>
            <CreatorSearchFilter nameFilterString={nameFilterString} handleNameFilterStringChange={handleNameFilterStringChange} />
            <SubjectSearchFilter subjectFilterString={subjectFilterString} handleSubjectFilterStringChange={handleSubjectFilterStringChange} />

            {(nameFilterString !== null || subjectFilterString !== null) && <p> {filteredTickets.length} {filteredTickets.length > 1 ? "tickets" : "ticket"} found. </p>}
        </>
    )
}


export default SearchFilterLayout;