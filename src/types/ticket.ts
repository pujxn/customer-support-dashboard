export type TicketStatus = "open" | "in_progress" | "resolved"

export type TicketPriority = "low" | "medium" | "high"

export type Ticket = {
    id: string,
    subject: string,
    customerName: string,
    status: TicketStatus,
    priority: TicketPriority,
    createdAt: string,
    assignee?: string
}