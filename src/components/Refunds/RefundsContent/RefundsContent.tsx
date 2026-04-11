import { useState } from "react";
import { Filter } from "lucide-react";
import "./RefundsContent.css";

const RefundsContent = ({ data }: any) => {

    const [search, setSearch] = useState("");
    const [openFilter, setOpenFilter] = useState(false);
    const [statusFilter, setStatusFilter] = useState("all");

    //  فلترة
    const filtered = data.filter((item: any) => {
        const matchesSearch =
            item.name.toLowerCase().includes(search.toLowerCase());

        const matchesStatus =
            statusFilter === "all" ||
            item.status.toLowerCase() === statusFilter.toLowerCase();

        return matchesSearch && matchesStatus;
    });


    return (
        <div className="refunds-content">

            {/* 🔹 SEARCH + FILTER */}
            <div className="refunds-top-bar">

                <input
                    className="refunds-search"
                    placeholder="Search by Refund ID or Order ID..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <div className="refunds-filter">

                    <button
                        className="refunds-filter-btn"
                        onClick={() => setOpenFilter(!openFilter)}
                    >
                        <Filter size={14} />
                        Filter
                    </button>

                    {openFilter && (
                        <div className="refunds-filter-dropdown">

                            <div onClick={() => {
                                setStatusFilter("all");
                                setOpenFilter(false);
                            }}>
                                All
                            </div>

                            <div onClick={() => {
                                setStatusFilter("Approved");
                                setOpenFilter(false);
                            }}>
                                Approved
                            </div>

                            <div onClick={() => {
                                setStatusFilter("Pending");
                                setOpenFilter(false);
                            }}>
                                Pending
                            </div>

                            <div onClick={() => {
                                setStatusFilter("Rejected");
                                setOpenFilter(false);
                            }}>
                                Rejected
                            </div>

                        </div>
                    )}

                </div>

            </div>

            {/* 🔹 CARDS */}
            <div className="refunds-grid">

                {filtered.map((item: any) => (
                    <div
                        className="refund-card"
                        key={item.refundId || item.id}
                    >

                        {/* 🔹 HEADER */}
                        <div className="refund-card-header">

                            <span className={`refund-status ${item.status}`}>
                                {item.status}
                            </span>

                        </div>

                        {/* 🔹 IDS */}
                        <div className="refund-ids">
                            <span>Refund ID: #{item.refundId}</span>
                            <span>Order ID: #{item.orderId}</span>
                        </div>

                        {/* 🔹 USER */}
                        <div className="refund-user">

                            <div className="refund-avatar">
                                {item.name[0]}
                            </div>

                            <div className="refund-user-info">
                                <h4>{item.name}</h4>
                                <p>{item.email}</p>
                                <p>{item.phone}</p>
                            </div>

                        </div>

                        {/* 🔹 AMOUNTS */}
                        <div className="refund-amounts">

                            <div className="amount-box light">
                                <span>Order Amount</span>
                                <p>{item.orderAmount}</p>
                            </div>

                            <div className="amount-box dark">
                                <span>Refund Amount</span>
                                <p>{item.refundAmount}</p>
                            </div>

                        </div>

                        {/* 🔹 DATE */}
                        <div className="refund-date">
                            Requested: {item.date}
                        </div>

                        {/* 🔹 REASON */}
                        <div className="refund-reason">
                            <span>Reason</span>
                            <p>{item.reason}</p>
                        </div>

                    </div>
                ))}

            </div>

        </div>
    );
};

export default RefundsContent;