import { useState, type ChangeEvent } from "react";

import type { Ticket } from "../types/ticket";
import type { TicketStatus } from "../types/ticket";
import type { TicketPriority } from "../types/ticket";

import { useNavigate } from "react-router-dom";

type Props = {
    selectedTicket: Ticket,
    handleTicketListUpdate: (updatedTicketId: string, updatedTicket: Ticket) => void
}

const TicketDetailsPanel = ({ selectedTicket, handleTicketListUpdate }: Props) => {

    const navigate = useNavigate();
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [editedStatus, setEditedStatus] = useState<TicketStatus>(selectedTicket.status);
    const [editedPriority, setEditedPriority] = useState<TicketPriority>(selectedTicket.priority);
    const [editedAssignee, setEditedAssignee] = useState<string>(selectedTicket.assignee ?? "");

    const cancelEdit = (): void => {
        setIsEditing(false);
        setEditedAssignee(selectedTicket.assignee ?? "Unassigned");
        setEditedPriority(selectedTicket.priority);
        setEditedStatus(selectedTicket.status);
    }

    const handleSave = (): void => {
        setIsEditing(false);
        handleTicketListUpdate(selectedTicket.id, { ...selectedTicket, assignee: editedAssignee, priority: editedPriority, status: editedStatus })
    }

    return (
        <div>
            <button onClick={() => navigate("/tickets")}>
                Close
            </button>
            {!isEditing ? <button onClick={() => setIsEditing(true)}>
                Edit
            </button> :
                <button onClick={() => cancelEdit()}>
                    Cancel
                </button>
            }
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

            {isEditing ? <input value={editedAssignee} onChange={(e: ChangeEvent<HTMLInputElement>) => setEditedAssignee(e.target.value)} /> : <p>{selectedTicket.assignee ?? "Unassigned"}</p>}

            {isEditing && <button onClick={
                () => handleSave()}>Save</button>}

        </div>
    )
}

export default TicketDetailsPanel;