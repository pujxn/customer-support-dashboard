import type { ChangeEvent } from "react";
import type { StatusFilterValue } from "../types/ticket";


type Props = {
    statusFilterValue: StatusFilterValue,
    handleStatusFilterValueChange: (newFilterValue: StatusFilterValue) => void
}

const StatusFilter = ({ statusFilterValue, handleStatusFilterValueChange }: Props) => {

    return (
        <select value={statusFilterValue} onChange={(e: ChangeEvent<HTMLSelectElement>) => handleStatusFilterValueChange(e.target.value as StatusFilterValue)}>
            <option value="all">All</option>
            <option value="open">Open</option>
            <option value="in_progress">In progress</option>
            <option value="resolved">Resolved</option>
        </select>
    )
}

export default StatusFilter;
