import "./PassportCard.css";
import { useState } from "react";
import { Phone, Mail, MapPin, CheckCircle, XCircle } from "lucide-react";

type Props = {
  name: string;
  phone: string;
  email: string;
  image: string;
  status?: "pending" | "approved" | "rejected";
};

const PassportCard = ({ name, phone, email, image, status = "pending" }: Props) => {

  const [currentStatus, setCurrentStatus] = useState(status);

  return (
    <div className={`passport-card-container ${currentStatus}`}>

      {/* HEADER */}
      <div className="passport-card-header">
        <div>
          <h3>{name}</h3>
          <p className="request-id">Request #1003 • 05/02/2026</p>
        </div>

        <span className={`status-badge ${currentStatus}`}>
          {currentStatus}
        </span>
      </div>

      {/* CONTACT */}
      <div className="passport-contact">

        <div className="contact-block">
          <span className="contact-label">Mobile</span>

          <div className="contact-item">
            <Phone size={14} color="#94a3b8" />
            <p>{phone}</p>
          </div>
        </div>

        <div className="contact-block">
          <span className="contact-label">Email</span>

          <div className="contact-item">
            <Mail size={14} color="#94a3b8" />
            <p>{email}</p>
          </div>
        </div>

      </div>

      <div className="passport-section-title">Passport Document</div>

      {/* IMAGE */}
      <div className="passport-image">
        <img src={image} alt="passport" />
      </div>

      <div className="divider"></div>

      {/* INFO */}
      <div className="passport-section-title">Passport Information</div>

      <div className="passport-info">

        <div>
          <span>Passport Number</span>
          <p>C11223344</p>
        </div>

        <div>
          <span>Nationality</span>
          <p>Egyptian</p>
        </div>

        <div>
          <span>Date of Birth</span>
          <p>10/11/1988</p>
        </div>

        <div>
          <span>Issue Date</span>
          <p>01/10/2024</p>
        </div>

        <div>
          <span>Expiry Date</span>
          <p>30/09/2029</p>
        </div>

      </div>

      <div className="divider"></div>

      {/* ADDRESS */}
      <div className="passport-section-title">Address</div>

      <div className="passport-address">
        <MapPin size={14} color="#94a3b8" />
        <span>789 Heliopolis Avenue, Cairo</span>
      </div>

      <div className="divider"></div>

      {/* ACTIONS */}
      <div className="passport-actions">

        {currentStatus === "pending" && (
          <>
            <button
              className="reject-btn"
              onClick={() => setCurrentStatus("rejected")}
            >
              <XCircle size={14} />
              Reject
            </button>

            <button
              className="approve-btn"
              onClick={() => setCurrentStatus("approved")}
            >
              <CheckCircle size={14} />
              Approve
            </button>
          </>
        )}

        {currentStatus === "approved" && (
          <button className="approved-final">
            <CheckCircle size={14} />
            Approved
          </button>
        )}

        {currentStatus === "rejected" && (
          <button className="rejected-final">
            <XCircle size={14} />
            Rejected
          </button>
        )}

      </div>

    </div>
  );
};

export default PassportCard;