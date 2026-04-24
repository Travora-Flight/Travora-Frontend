import "./RequestDetailsModal.css";
import { useState, useEffect } from "react";
import BagDetails from "./BagDetails/BagDetails";
import OrderDetails from "./OrderDetails/OrderDetails";
import { MapPin, Phone, Calendar, Clock, X } from "lucide-react";

type Props = {
  task: any;
  onClose: () => void;
  onStart: (task: any) => void;
};

const RequestDetailsModal = ({ task, onClose, onStart }: Props) => {

  const isNew = task.status === "new";

  const [activeTab, setActiveTab] = useState<"bag" | "order">("bag");
  const [bags, setBags] = useState<any[]>([]);

  //  unique key لكل order
  const storageKey = `bags_${task.id}`;


  //  load bags أول ما المودال يفتح
  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      setBags(JSON.parse(saved));
    } else {
      setBags([]);
    }
  }, [task.id]);

  //  save bag
  const handleScan = (bag: any) => {
    setBags((prev) => {
      const updated = [...prev, bag];
      localStorage.setItem(storageKey, JSON.stringify(updated));
      return updated;
    });
  };

  const handleDelete = (index: number) => {
    setBags((prev) => {
      const updated = prev.filter((_, i) => i !== index);

      const storageKey = `bags_${task.id}`;
      localStorage.setItem(storageKey, JSON.stringify(updated));

      return updated;
    });
  };

  /* =========================
      CASE 1 → NEW REQUEST
  ========================= */
  if (isNew) {
    return (
      <div className="modal">

        <div className="modal__overlay" onClick={onClose}></div>

        <div className="modal__card">

          {/* header */}
          <div className="modal__header">
            <div>
              <h3>Request {task.id}</h3>
              <span className="modal__status new">New</span>
            </div>
            <button onClick={onClose}>
              <X size={18} />
            </button>
          </div>

          <div className="order__divider"></div>

          {/* content */}
          <div className="modal__content">

            <div className="order">

              {/* client + phone */}
              <div className="order__grid2">

                <div className="order__card">
                  <span>Client</span>
                  <p>{task.client}</p>
                </div>

                <div className="order__card">
                  <span>Mobile</span>
                  <p className="order__iconText">
                    <Phone size={14} />
                    {task.phone}
                  </p>
                </div>

              </div>

              {/* location */}
              <div className="order__location">

                <div className="order__iconText">
                  <MapPin size={16} />
                  <p>{task.location}</p>
                </div>

                <button
                  className="order__map"
                  onClick={() => {
                    const url = `https://www.google.com/maps?q=${task.location}`;
                    window.open(url, "_blank");
                  }}
                >
                  View on map
                </button>

              </div>

              {/* type */}
              <div className="order__card">
                <span>Type</span>
                <p>{task.type}</p>
              </div>

              <div className="order__divider"></div>

              {/* date + time */}
              <div className="order__grid2">

                <div className="order__card">
                  <span>Date</span>
                  <p className="order__iconText">
                    <Calendar size={14} />
                    {task.date}
                  </p>
                </div>

                <div className="order__card">
                  <span>Time</span>
                  <p className="order__iconText">
                    <Clock size={14} />
                    {task.time}
                  </p>
                </div>

              </div>

              {/* start */}
              <button
                className="order__scanBtn"
                onClick={() => {
                  onStart(task);
                  onClose();
                }}
              >
                Start
              </button>

            </div>

          </div>

        </div>

      </div>
    );
  }
  /* =========================
  CASE 2 → ONGOING
  ========================= */

  return (
    <div className="modal">

      <div className="modal__overlay" onClick={onClose}></div>

      <div className="modal__card">

        <div className="modal__header">
          <div>
            <h3>Request {task.id}</h3>
            <span className="modal__status">On Progress</span>
          </div>

          <button onClick={onClose}>✕</button>
        </div>

        <div className="modal__tabs">

          <button
            className={activeTab === "bag" ? "active" : ""}
            onClick={() => setActiveTab("bag")}
          >
            Bag Details
          </button>

          <button
            className={activeTab === "order" ? "active" : ""}
            onClick={() => setActiveTab("order")}
          >
            Order Details
          </button>

        </div>

        <div className="modal__content">

          {activeTab === "bag" && (
            <BagDetails
              bags={bags}
              task={task}
              onDelete={handleDelete}
            />
          )}

          {activeTab === "order" && (
            <OrderDetails
              task={task}
              bags={bags}
              onScan={handleScan}
              goToBag={() => setActiveTab("bag")}
              onClose={onClose}
            />
          )}

        </div>

      </div>

    </div>
  );
};

export default RequestDetailsModal;