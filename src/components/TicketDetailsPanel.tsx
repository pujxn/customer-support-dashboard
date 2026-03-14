import { useState, type ChangeEvent } from "react";

import type { Ticket } from "../types/ticket";
import type { TicketStatus } from "../types/ticket";
import type { TicketPriority } from "../types/ticket";

import { useNavigate } from "react-router-dom";

type Props = {
    selectedTicket: Ticket
}

const TicketDetailsPanel = ({ selectedTicket }: Props) => {

    const navigate = useNavigate();
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [editedStatus, setEditedStatus] = useState<TicketStatus>(selectedTicket.status);
    const [editedPriority, setEditedPriority] = useState<TicketPriority>(selectedTicket.priority);
    const [editedAssignee, setEditedAssignee] = useState<string | undefined>(selectedTicket.assignee);

    return (
        <div>
            <button onClick={() => navigate("/tickets")}>
                Close
            </button>
            <button onClick={() => setIsEditing(true)}>
                Edit
            </button>
            <p>{new Date(selectedTicket.createdAt).toLocaleDateString()}</p>
            <p>{selectedTicket.subject}</p>
            <p>{selectedTicket.customerName}</p>

            {isEditing ?
                <select value={editedStatus} onChange={(e: ChangeEvent<HTMLSelectElement>) => setEditedStatus(e.target.value as TicketStatus)}>
                    <option value="open">Open</option>
                    <option value="in_progress">In progress</option>
                    <option value="resolved">Resolved</option>
                </select> :
                <p>{selectedTicket.status}</p>}

            {isEditing ?
                <select value={editedPriority} onChange={(e: ChangeEvent<HTMLSelectElement>) => setEditedPriority(e.target.value as TicketPriority)}>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select> :
                <p>{selectedTicket.priority}</p>}

            <p>{selectedTicket.assignee ?? "Unassigned"}</p>
        </div>
    )
}

export default TicketDetailsPanel;