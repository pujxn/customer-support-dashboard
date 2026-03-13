import { useState } from "react"
import { allTickets } from "../mock/tickets";

import CardsList from "./CardsList";
import SearchFilterSortLayout from "./SearchFilterSortLayout";
import TicketDetaislPanel from "./TicketDetailsPanel";

import type { Ticket } from "../types/ticket";
import type { StatusFilterValue } from "../types/ticket";
import type { PriorityFilterValue } from "../types/ticket";
import type { SortOption } from "../types/ticket";

import { useParams } from "react-router-dom";


const TicketsPage = () => {

    const [customerFilterString, setCustomerFilterString] = useState<string>("");
    const [subjectFilterString, setSubjectFilterString] = useState<string>("");
    const [statusFilterValue, setStatusFilterValue] = useState<StatusFilterValue>("all");
    const [priorityFilterValue, setPriorityFilterValue] = useState<PriorityFilterValue>("all");
    const [tickets, setTickets] = useState<Ticket[]>(allTickets);
    const [sortOption, setSortOption] = useState<SortOption>("createdAt_desc");

    const { id } = useParams();

    const selectedTicket = tickets.find(ticket => ticket.id === id);


    const handleCustomerFilterStringChange = (newFilterString: string) => {
        setCustomerFilterString(newFilterString);
    }

    const handleSubjectFilterStringChange = (newFilterString: string) => {
        setSubjectFilterString(newFilterString);
    }

    const handleStatusFilterValueChange = (newFilterValue: StatusFilterValue) => {
        setStatusFilterValue(newFilterValue);
    }

    const handlePriorityFilterValueChange = (newFilterValue: PriorityFilterValue): void => {
        setPriorityFilterValue(newFilterValue);
    }

    const handleSortOptionChange = (newOption: SortOption) => {
        setSortOption(newOption);
    }

    const filteredTickets = tickets.filter(ticket => {
        const matchesCustomerName = ticket.customerName.toLowerCase().includes(customerFilterString.toLowerCase());
        const matchesSubject = ticket.subject.toLowerCase().includes(subjectFilterString.toLowerCase());
        const matchesStatus = statusFilterValue === "all" || ticket.status === statusFilterValue;
        const matchesPriority = priorityFilterValue === "all" || ticket.priority === priorityFilterValue;

        return matchesCustomerName && matchesSubject && matchesStatus && matchesPriority;
    })

    const sortedAndFilteredTickets = filteredTickets.sort((a: Ticket, b: Ticket) => {

        const priorityOrder = {
            low: 1,
            medium: 2,
            high: 3
        }

        if (sortOption === "createdAt_desc") {
            return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        }
        else if (sortOption === "createdAt_asc") {
            return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        }
        else if (sortOption === "priority_asc") {
            return priorityOrder[a.priority] - priorityOrder[b.priority]
        }
        else {
            return priorityOrder[b.priority] - priorityOrder[a.priority]
        }
    })

    return (
        <>
            <SearchFilterSortLayout
                sortedAndFilteredTickets={sortedAndFilteredTickets} customerFilterString={customerFilterString}
                handleCustomerFilterStringChange={handleCustomerFilterStringChange} subjectFilterString={subjectFilterString} handleSubjectFilterStringChange={handleSubjectFilterStringChange} statusFilterValue={statusFilterValue} handleStatusFilterValueChange={handleStatusFilterValueChange} priorityFilterValue={priorityFilterValue} handlePriorityFilterValueChange={handlePriorityFilterValueChange} sortOption={sortOption} handleSortOptionChange={handleSortOptionChange}
            />

            <CardsList sortedAndFilteredTickets={sortedAndFilteredTickets} />

            {selectedTicket && <TicketDetaislPanel selectedTicket={selectedTicket} />}

        </>
    )
}

export default TicketsPage;
