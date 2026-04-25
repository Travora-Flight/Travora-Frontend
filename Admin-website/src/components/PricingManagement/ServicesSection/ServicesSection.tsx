import "./ServicesSection.css";
import AddServiceModal from "./AddServiceModal/AddServiceModal";
import { useState } from "react";
import { Pencil, Trash2 } from "lucide-react";

type Service = {
    name: string;
    code: string;
    type: string;
    price: number;
    status: "active" | "inactive";
};

type Props = {
    search: string;
};

const ServicesSection = ({
    search,
}: Props) => {

    const [openModal, setOpenModal] = useState(false);
    const [editingService, setEditingService] = useState<Service | null>(null);
    const [editingIndex, setEditingIndex] = useState<number | null>(null);
    const [services, setServices] = useState<Service[]>([
        {
            name: "Door to Door",
            code: "DT001",
            type: "Luggage Transport",
            status: "active",
            price: 150,
        },
        {
            name: "Car Service",
            code: "CAR001",
            type: "Premium Transport",
            status: "active",
            price: 200,
        },
        {
            name: "Baggage Tracking",
            code: "TRK001",
            type: "Tracking Service",
            status: "active",
            price: 50,
        },
    ]);

    const filteredServices = services.filter((s) =>
        s.name.toLowerCase().includes(search.toLowerCase()) ||
        s.code.toLowerCase().includes(search.toLowerCase()) ||
        s.type.toLowerCase().includes(search.toLowerCase())
    );

    //  delete
    const handleDelete = (code: string) => {
        setServices((prev) => prev.filter((s) => s.code !== code));
    };

    return (
        <div className="services-section">

            {/* HEADER */}
            <div className="services-header">
                <h2>Services</h2>
                <button className="add-btn" onClick={() => setOpenModal(true)}>
                    + Add Service
                </button>
            </div>

            {/* CARDS */}
            <div className="services-grid">

                {filteredServices.map((service, index) => (
                    <div key={index} className="service-card">

                        <div className="service-top">
                            <h3>{service.name}</h3>

                            <button
                                className={`status-btn ${service.status
                                    }`}
                                onClick={() => {

                                    setServices((prev) =>
                                        prev.map((s) =>

                                            s.code === service.code
                                                ? {
                                                    ...s,

                                                    status:
                                                        s.status === "active"
                                                            ? "inactive"
                                                            : "active",
                                                }
                                                : s
                                        )
                                    );

                                }}
                            >

                                {service.status === "active"
                                    ? "Active"
                                    : "Inactive"}

                            </button>

                        </div>

                        <p className="service-code">Code: {service.code}</p>
                        <p className="service-type">Type: {service.type}</p>

                        <p className="service-desc">
                            Luggage pickup from home and delivery to airport or vice versa
                        </p>

                        <div className="service-divider"></div>

                        <div className="service-footer">

                            <span className="price">{service.price} EGP</span>

                            <div className="actions">

                                <button
                                    className="edit-btn"
                                    onClick={() => {
                                        setEditingService(service);
                                        setEditingIndex(services.findIndex(p => p.code === service.code));
                                        setOpenModal(true);
                                    }}
                                >
                                    <Pencil size={14} />
                                </button>

                                <button
                                    className="delete-btn"
                                    onClick={() => handleDelete(service.code)}
                                >
                                    <Trash2 size={14} />
                                </button>

                            </div>

                        </div>

                    </div>
                ))}

            </div>

            {/* MODAL */}
            {openModal && (
                <AddServiceModal
                    onClose={() => {
                        setOpenModal(false);
                        setEditingService(null);
                        setEditingIndex(null);
                    }}
                    initialData={editingService}
                    onSave={(newService: Service) => {

                        if (editingIndex !== null) {
                            //  EDIT
                            const updated = [...services];
                            updated[editingIndex] = newService;
                            setServices(updated);
                        } else {
                            //  ADD
                            setServices([...services, newService]);
                        }

                    }}
                />
            )}
        </div>
    );
};

export default ServicesSection;