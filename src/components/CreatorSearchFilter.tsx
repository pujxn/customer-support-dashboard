import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import { tickets } from '../mock/tickets';

type Props = {
    creatorFilterString: string | null,
    handleCreatorFilterStringChange: (newCreatorFilterString: string | null) => void
}

const CreatorSearchFilter = ({ creatorFilterString, handleCreatorFilterStringChange }: Props) => {
    return (
        <Autocomplete
            disablePortal
            freeSolo
            options={tickets.map(ticket => ticket.customerName)}
            value={creatorFilterString}
            onChange={(e: any, newValue: string | null) => handleCreatorFilterStringChange(newValue)}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Customer Name" />}
        />
    );
}

export default CreatorSearchFilter;