import type { ChangeEvent } from "react";

type Props = {
    subjectFilterString: string,
    handleSubjectFilterStringChange: (subjectFilterString: string) => void
}

const SubjectSearchFilter = ({ subjectFilterString, handleSubjectFilterStringChange }: Props) => {
    return (
        <input
            value={subjectFilterString}
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleSubjectFilterStringChange(e.target.value)}
            placeholder="Search by subject" />
    );
}

export default SubjectSearchFilter;