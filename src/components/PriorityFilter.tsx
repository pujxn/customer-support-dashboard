import type { ChangeEvent } from "react";
import type { PriorityFilterValue } from "../types/ticket";

type Props = {
    priorityFilterValue: PriorityFilterValue,
    handlePriorityFilterValueChange: (newFilterValue: PriorityFilterValue) => void
}

const PriorityFilter = ({ priorityFilterValue, handlePriorityFilterValueChange }: Props) => {
    return (
        <select value={priorityFilterValue} onChange={(e: ChangeEvent<HTMLSelectElement>) => handlePriorityFilterValueChange(e.target.value as PriorityFilterValue)}>
            <option value="all">All</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
        </select>
    )
}

export default PriorityFilter;