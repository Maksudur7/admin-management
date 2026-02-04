// src/store/useApprovalStore.ts
import { create } from 'zustand';

interface Request {
    id: string;
    title: string;
    requester: string;
    status: 'Pending' | 'Approved' | 'Rejected';
    date: string;
}

interface ApprovalState {
    requests: Request[];
    updateStatus: (id: string, status: 'Approved' | 'Rejected') => void;
}

export const useApprovalStore = create<ApprovalState>((set) => ({
    requests: [
        { id: "REQ-001", title: "Marketing Budget - Feb", requester: "Sarah Khan", status: "Pending", date: "Feb 04, 2026" },
        { id: "REQ-002", title: "Software License Renewal", requester: "Tanvir Ahmed", status: "Approved", date: "Feb 03, 2026" },
    ],
    updateStatus: (id, status) => set((state) => ({
        requests: state.requests.map((req) =>
            req.id === id ? { ...req, status } : req
        )
    })),
}));