import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import { tickets } from '../mock/tickets';

type Props = {
    nameFilterString: string | null,
    handleNameFilterStringChange: (newNameFilterString: string | null) => void
}

const CreatorSearchFilter = ({ nameFilterString, handleNameFilterStringChange }: Props) => {
    return (
        <Autocomplete
            disablePortal
            options={tickets.map(ticket => ticket.customerName)}
            value={nameFilterString}
            onChange={(e: any, newValue: string | null) => handleNameFilterStringChange(newValue)}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Customer Name" />}
        />
    );
}

export default CreatorSearchFilter;