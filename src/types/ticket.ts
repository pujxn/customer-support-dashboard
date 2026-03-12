type TicketStatus = "open" | "in_progress" | "resolved"

type TicketPriority = "low" | "medium" | "high"

export type StatusFilterValue = TicketStatus | "all"

export type PriorityFilterValue = TicketPriority | "all"

export type Ticket = {
    id: string,
    subject: string,
    customerName: string,
    status: TicketStatus,
    priority: TicketPriority,
    createdAt: string,
    assignee?: string
}

