import CreatorSearchFilter from "./CreatorSearchFilter";
import SubjectSearchFilter from "./SubjectSearchFilter";
import type { Ticket } from "../types/ticket";

type Props = {
    filteredTickets: Ticket[],
    nameFilterString: string | null,
    subjectFilterString: string | null,
    handleNameFilterStringChange: (newValue: string | null) => void,
    handleSubjectFilterStringChange: (newValue: string | null) => void
}

const SearchFilterLayout = ({ filteredTickets, nameFilterString, subjectFilterString, handleNameFilterStringChange, handleSubjectFilterStringChange }: Props) => {



    return (
        <>
            <CreatorSearchFilter nameFilterString={nameFilterString} handleNameFilterStringChange={handleNameFilterStringChange} />
            <SubjectSearchFilter subjectFilterString={subjectFilterString} handleSubjectFilterStringChange={handleSubjectFilterStringChange} />

            {(nameFilterString !== null || subjectFilterString !== null) && <p> {filteredTickets.length} {filteredTickets.length > 1 ? "tickets" : "ticket"} found. </p>}
        </>
    )
}


export default SearchFilterLayout;