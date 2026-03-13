import type { Ticket } from "../types/ticket";

import { useNavigate } from "react-router-dom";

type Props = {
    selectedTicket: Ticket
}

const TicketDetailsPanel = ({ selectedTicket }: Props) => {

    const navigate = useNavigate();

    return (
        <div>
            <button onClick={() => navigate("/tickets")}>
                Close
            </button>
            <p>{selectedTicket.subject}</p>
            <p>{selectedTicket.customerName}</p>
            <p>{selectedTicket.status}</p>
            <p>{selectedTicket.priority}</p>
            <p>{new Date(selectedTicket.createdAt).toLocaleDateString()}</p>
            <p>{selectedTicket.assignee ?? "Unassigned"}</p>
        </div>
    )
}

export default TicketDetailsPanel;