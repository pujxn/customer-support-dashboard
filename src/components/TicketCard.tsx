import type { Ticket } from "../types/ticket";

type Props = {
    ticket: Ticket
}

const TicketCard = ({ ticket }: Props) => {
    return (
        <div>
            <p>{ticket.subject}</p>
            <p>{ticket.customerName}</p>
            <p>{ticket.status}</p>
            <p>{ticket.priority}</p>
            <p>{ticket.createdAt}</p>
            <p>{ticket.assignee ?? "Unassigned"}</p>
        </div>
    )
}

export default TicketCard;