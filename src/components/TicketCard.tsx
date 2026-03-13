import { Link } from "react-router-dom";
import type { Ticket } from "../types/ticket";

type Props = {
    ticket: Ticket
}

const TicketCard = ({ ticket }: Props) => {
    return (
        <div>
            <Link to={`/tickets/${ticket.id}`}>
                <p>{ticket.subject}</p>
            </Link>
            <p>{ticket.customerName}</p>
            <p>{ticket.status}</p>
            <p>{ticket.priority}</p>
            <p>{new Date(ticket.createdAt).toLocaleDateString()}</p>
            <p>{ticket.assignee ?? "Unassigned"}</p>
        </div>
    )
}

export default TicketCard;