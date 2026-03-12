import type { ChangeEvent } from "react";
import type { SortOption } from "../types/ticket";

type Props = {
    sortOption: SortOption,
    handleSortOptionChange: (newOption: SortOption) => void
}

const SortSelect = ({ sortOption, handleSortOptionChange }: Props) => {
    return (
        <select value={sortOption} onChange={(e: ChangeEvent<HTMLSelectElement>) => handleSortOptionChange(e.target.value as SortOption)}>
            <option value="priority_asc">Priority (asc)</option>
            <option value="priority_desc">Priority (desc)</option>
            <option value="createdAt_asc">Created At (asc)</option>
            <option value="createdAt_desc">Created At (desc)</option>
        </select>
    )
}

export default SortSelect;