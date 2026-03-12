import TicketCard from "./TicketCard";
import type { Ticket } from "../types/ticket";


type Props = {
    sortedAndFilteredTickets: Ticket[],
}

const CardsList = ({ sortedAndFilteredTickets }: Props) => {

    return (
        <div>
            {sortedAndFilteredTickets.map(ticket => (
                <TicketCard key={ticket.id} ticket={ticket} />
            ))
            }
        </div>
    )
}

export default CardsList;