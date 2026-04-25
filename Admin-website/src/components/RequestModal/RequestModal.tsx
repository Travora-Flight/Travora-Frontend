import "./RequestModal.css";
type Props = {
    request: any;
    onClose: () => void;
};

export default function RequestModal({ request, onClose }: Props) {
    return (
        <div className="requests-modal-overlay" onClick={onClose}>
            <div className="requests-modal" onClick={(e) => e.stopPropagation()}>

                {/* Header */}
                <div className="requests-modal-header">
                    <div>
                        <h3>Request {request.id}</h3>
                        <span className={`requests-status ${request.status.replace(" ", "")}`}>
                            {request.status}
                        </span>
                    </div>

                    <button className="requests-close-btn" onClick={onClose}>×</button>
                </div>

                {/* Client Info */}
                <div className="requests-section">
                    <h4>Client Information</h4>

                    <div className="requests-grid">
                        <div className="requests-card">
                            <p>Client Name</p>
                            <strong>{request.client}</strong>
                        </div>

                        <div className="requests-card">
                            <p>Mobile</p>
                            <strong>{request.phone}</strong>
                        </div>
                    </div>

                    <div className="requests-address-card">
                        <div className="requests-address-left">
                            <p>Address</p>
                            <strong>📍 {request.address}</strong>
                        </div>

                        <button className="requests-map-btn">View on map</button>
                    </div>
                </div>

                {/* Service */}
                <div className="requests-section">
                    <h4>Service Details</h4>

                    <div className="requests-grid">
                        <div className="requests-card">
                            <p>Service Type</p>
                            <strong>{request.type}</strong>
                        </div>

                        <div className="requests-card">
                            <p>Assigned Employee</p>
                            <strong>{request.employee}</strong>
                        </div>
                    </div>
                </div>

                {/* Timeline */}
                <div className="requests-section">
                    <h4>Timeline</h4>
                    <ul className="requests-timeline">

                        <li className="requests-timeline-row">
                            <div className="requests-left">

                                <span className="requests-icon done">
                                    <svg viewBox="0 0 24 24" fill="none">
                                        <circle cx="12" cy="12" r="10" fill="var(--color-primary)" />
                                        <path d="M7 12l3 3 7-7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>

                                <span>Request Sent</span>
                            </div>

                            <span className="requests-time">
                                <svg viewBox="0 0 24 24" fill="none">
                                    <circle cx="12" cy="12" r="9" stroke="var(--color-text-secondary)" strokeWidth="2" />
                                    <path d="M12 7v5l3 2" stroke="var(--color-text-secondary)" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                                9:00 AM
                            </span>
                        </li>

                        <li className="requests-timeline-row">
                            <div className="requests-left">

                                <span className="requests-icon done">
                                    <svg viewBox="0 0 24 24" fill="none">
                                        <circle cx="12" cy="12" r="10" fill="var(--color-primary)" />
                                        <path d="M7 12l3 3 7-7" stroke="white" strokeWidth="2" />
                                    </svg>
                                </span>

                                <span>Assign Employee</span>
                            </div>

                            <span className="requests-time">
                                <svg viewBox="0 0 24 24" fill="none">
                                    <circle cx="12" cy="12" r="9" stroke="var(--color-text-secondary)" strokeWidth="2" />
                                    <path d="M12 7v5l3 2" stroke="var(--color-text-secondary)" strokeWidth="2" />
                                </svg>
                                9:05 AM
                            </span>
                        </li>

                        <li className="requests-timeline-row">
                            <div className="requests-left">

                                <span className="requests-icon done">
                                    <svg viewBox="0 0 24 24" fill="none">
                                        <circle cx="12" cy="12" r="10" fill="var(--color-primary)" />
                                        <path d="M7 12l3 3 7-7" stroke="white" strokeWidth="2" />
                                    </svg>
                                </span>

                                <span>Begin to Execute</span>
                            </div>

                            <span className="requests-time">
                                <svg viewBox="0 0 24 24" fill="none">
                                    <circle cx="12" cy="12" r="9" stroke="var(--color-text-secondary)" strokeWidth="2" />
                                    <path d="M12 7v5l3 2" stroke="var(--color-text-secondary)" strokeWidth="2" />
                                </svg>
                                9:15 AM
                            </span>
                        </li>

                        <li className="requests-timeline-row pending">
                            <div className="requests-left">

                                <span className="requests-icon empty">
                                    <svg viewBox="0 0 24 24" fill="none">
                                        <circle cx="12" cy="12" r="10" stroke="var(--color-border-light)" strokeWidth="2" />
                                    </svg>
                                </span>

                                <span>Request Done</span>
                            </div>
                        </li>

                    </ul>
                </div>

            </div>
        </div>
    );
}