import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import { tickets } from '../mock/tickets';

type Props = {
    subjectFilterString: string | null,
    handleSubjectFilterStringChange: (subjectFilterString: string | null) => void
}

const SubjectSearchFilter = ({ subjectFilterString, handleSubjectFilterStringChange }: Props) => {
    return (
        <Autocomplete
            disablePortal
            value={subjectFilterString}
            onChange={(e: any, newValue: string | null) => handleSubjectFilterStringChange(newValue)}
            options={tickets.map(ticket => ticket.subject)}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Subject" />}
        />
    );
}

export default SubjectSearchFilter;