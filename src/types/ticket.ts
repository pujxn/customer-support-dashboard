export type TicketStatus = "open" | "in_progress" | "resolved"

export type TicketPriority = "low" | "medium" | "high"

export type StatusFilterValue = TicketStatus | "all"

export type PriorityFilterValue = TicketPriority | "all"

export type SortOption = "priority_asc" | "priority_desc" | "createdAt_desc" | "createdAt_asc"

export type Ticket = {
    id: string,
    subject: string,
    customerName: string,
    status: TicketStatus,
    priority: TicketPriority,
    createdAt: string,
    assignee?: string
}

