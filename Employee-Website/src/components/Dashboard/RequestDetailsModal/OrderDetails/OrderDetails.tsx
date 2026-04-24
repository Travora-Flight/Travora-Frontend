import "./OrderDetails.css";
import { useState } from "react";
import { Phone, MapPin, Scan } from "lucide-react";
import ScanOverlay from "../../ScanOverlay/ScanOverlay";

type Props = {
  task: any;
  bags: any[];
  onScan: (bag: any) => void;
  goToBag: () => void;
  onClose: () => void;
};

const OrderDetails = ({ task, bags, onScan, goToBag, onClose }: Props) => {

  const [showScan, setShowScan] = useState(false);
  const canComplete = bags.length > 0;
  const handleMap = () => {
    if (!task.location) return;

    if (typeof task.location === "object" && task.location.lat && task.location.lng) {
      window.open(
        `https://www.google.com/maps?q=${task.location.lat},${task.location.lng}`,
        "_blank"
      );
    }

    else if (typeof task.location === "string") {
      const query = encodeURIComponent(task.location);
      window.open(
        `https://www.google.com/maps/search/?api=1&query=${query}`,
        "_blank"
      );
    }
  };

  return (
    <div className="order">

      {/*  row 1 */}
      <div className="order__grid2">
        <div className="order__card">
          <span>Client</span>
          <p>{task.client}</p>
        </div>

        <div className="order__card">
          <span>Mobile</span>
          <p className="order__iconText">
            <Phone size={14} /> {task.phone}
          </p>
        </div>
      </div>

      {/*  location */}
      <div className="order__location">
        <div>
          <span>Location</span>
          <p className="order__iconText">
            <MapPin size={14} />
            {typeof task.location === "object"
              ? task.location.address
              : task.location}
          </p>
        </div>

        <button className="order__map" onClick={handleMap}>
          View on map
        </button>
      </div>

      {/*  type */}
      <div className="order__card">
        <span>Type</span>
        <p>{task.type}</p>
      </div>

      {/*  date grid */}
      <div className="order__grid3">
        <div className="order__card">
          <span>Date</span>
          <p>{task.date}</p>
        </div>

        <div className="order__card">
          <span>Time</span>
          <p>{task.time}</p>
        </div>

        <div className="order__card">
          <span>Count Of Bags</span>
          <p>{bags.length} Bags</p>
        </div>
      </div>

      {/*  scan */}
      <div className="order__scanTitle">Scan QR Code</div>

      <button
        className="order__scanBtn"
        onClick={() => setShowScan(true)}
      >
        <Scan size={16} /> Scan
      </button>

      {showScan && (
        <ScanOverlay
          onClose={() => setShowScan(false)}
          onSaveBag={(bag) => {
            onScan(bag);
            setShowScan(false);
          }}
        />
      )}

      {/*  actions */}
      <div className="order__actions">
        <button className="order__close" onClick={onClose}>
          close
        </button>

        <button
          className="order__complete"
          disabled={!canComplete}
          onClick={goToBag}
        >
          Complete
        </button>
      </div>

    </div>
  );
};

export default OrderDetails;