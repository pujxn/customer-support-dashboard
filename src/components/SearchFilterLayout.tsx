import CreatorSearchFilter from "./CreatorSearchFilter";
import SubjectSearchFilter from "./SubjectSearchFilter";
import type { Ticket } from "../types/ticket";

type Props = {
    filteredTickets: Ticket[],
    creatorFilterString: string | null,
    subjectFilterString: string | null,
    handleCreatorFilterStringChange: (newValue: string | null) => void,
    handleSubjectFilterStringChange: (newValue: string | null) => void
}

const SearchFilterLayout = ({ filteredTickets, creatorFilterString, subjectFilterString, handleCreatorFilterStringChange, handleSubjectFilterStringChange }: Props) => {



    return (
        <>
            <CreatorSearchFilter creatorFilterString={creatorFilterString} handleCreatorFilterStringChange={handleCreatorFilterStringChange} />
            <SubjectSearchFilter subjectFilterString={subjectFilterString} handleSubjectFilterStringChange={handleSubjectFilterStringChange} />

            {(creatorFilterString !== null || subjectFilterString !== null) && <p> {filteredTickets.length} {filteredTickets.length > 1 ? "tickets" : "ticket"} found. </p>}
        </>
    )
}


export default SearchFilterLayout;