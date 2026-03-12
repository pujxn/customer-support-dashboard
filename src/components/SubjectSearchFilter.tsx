type Props = {
    subjectFilterString: string,
    handleSubjectFilterStringChange: (subjectFilterString: string) => void
}

const SubjectSearchFilter = ({ subjectFilterString, handleSubjectFilterStringChange }: Props) => {
    return (
        <input
            value={subjectFilterString}
            onChange={e => handleSubjectFilterStringChange(e.target.value)}
            placeholder="Search by subject" />
    );
}

export default SubjectSearchFilter;