import { tickets } from "../mock/tickets";
import TicketCard from "./TicketCard";

type Props = {
    nameFilterString: string | null,
    subjectFilterString: string | null
}

const CardsList = ({ nameFilterString, subjectFilterString }: Props) => {

    const filteredTickets = tickets.filter(ticket => ticket.customerName.includes(nameFilterString ?? "")).filter(ticket => ticket.subject.includes(subjectFilterString ?? ""))

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