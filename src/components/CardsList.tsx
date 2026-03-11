import { tickets } from "../mock/tickets";
import TicketCard from "./TicketCard";

type Props = {
    nameFilterString: string | null
}

const CardsList = ({ nameFilterString }: Props) => {

    const ticketsFilteredByName = tickets.filter(ticket => ticket.customerName.includes(nameFilterString ?? ""))

    return (
        <div>
            {ticketsFilteredByName.map(ticket => (
                <TicketCard key={ticket.id} ticket={ticket} />
            ))
            }
        </div >
    )
}

export default CardsList;