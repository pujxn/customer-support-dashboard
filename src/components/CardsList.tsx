import { tickets } from "../mock/tickets";
import TicketCard from "./TicketCard";

const CardsList = () => {
    return (
        <div>
            {tickets.map(ticket => (
                <TicketCard key={ticket.id} ticket={ticket} />
            ))
            }
        </div >
    )
}

export default CardsList;