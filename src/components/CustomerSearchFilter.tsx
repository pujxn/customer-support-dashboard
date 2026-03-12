import type { ChangeEvent } from "react";

type Props = {
    customerFilterString: string,
    handleCustomerFilterStringChange: (newCustomerFilterString: string) => void
}

const CustomerSearchFilter = ({ customerFilterString, handleCustomerFilterStringChange }: Props) => {
    return (
        <input
            value={customerFilterString}
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleCustomerFilterStringChange(e.target.value)}
            placeholder="Search by customer" />
    );
}

export default CustomerSearchFilter;