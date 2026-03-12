type Props = {
    customerFilterString: string,
    handleCustomerFilterStringChange: (newCustomerFilterString: string) => void
}

const CustomerSearchFilter = ({ customerFilterString, handleCustomerFilterStringChange }: Props) => {
    return (
        <input
            value={customerFilterString}
            onChange={e => handleCustomerFilterStringChange(e.target.value)}
            placeholder="Search by customer" />
    );
}

export default CustomerSearchFilter;