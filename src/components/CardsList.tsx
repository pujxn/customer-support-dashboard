import TicketCard from "./TicketCard";
import type { Ticket } from "../types/ticket";


type Props = {
    filteredTickets: Ticket[],
}

const CardsList = ({ filteredTickets }: Props) => {

    return (
        <div>
            {filteredTickets.map(ticket => (
                <TicketCard key={ticket.id} ticket={ticket} />
            ))
            }
        </div>
    )
}

export default CardsList;