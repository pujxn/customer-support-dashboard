import type { ChangeEvent } from "react";
import type { StatusFilterValue } from "../types/ticket";


type Props = {
    statusFilterValue: StatusFilterValue,
    handleStatusFilterValueChange: (newFilterValue: StatusFilterValue) => void
}

const StatusFilter = ({ statusFilterValue, handleStatusFilterValueChange }: Props) => {
    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        handleStatusFilterValueChange(event.target.value as StatusFilterValue);
    };

    return (
        <select value={statusFilterValue} onChange={handleChange}>
            <option value="all">All</option>
            <option value="open">Open</option>
            <option value="in_progress">In progress</option>
            <option value="resolved">Resolved</option>
        </select>
    )
}

export default StatusFilter;
