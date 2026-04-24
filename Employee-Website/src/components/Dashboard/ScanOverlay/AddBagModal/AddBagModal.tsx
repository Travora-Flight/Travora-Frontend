import "./AddBagModal.css";
import { useState } from "react";
import { createPortal } from "react-dom";
import { Check } from "lucide-react";

type Props = {
  onClose: () => void;
  onSave: (bag: any) => void;
};

const AddBagModal = ({ onClose, onSave }: Props) => {

  const [images, setImages] = useState<File[]>([]);
  const [lockCode, setLockCode] = useState("");
  const [saved, setSaved] = useState(false);

  // 📸 add images
  const handleAdd = (e: any) => {
    setImages((prev) => [...prev, ...e.target.files]);
  };

  // 💾 click save → show success
  const handleSave = () => {
    setSaved(true);
  };

  return createPortal(
    <div className="bagModal">

      {/* overlay */}
      <div className="bagModal__overlay" onClick={onClose}></div>

      <div className="bagModal__card">

        {/* =========================
           ✅ SUCCESS STATE
        ========================= */}
        {saved ? (
          <div className="bagModal__success">
            <div className="bagModal__successIcon">
              <div className="circle">
                <Check size={28} strokeWidth={3} />
              </div>
            </div>
            <h3>Bag Added Successfully</h3>
            <p>The bag has been saved with all details</p>

            <button
              onClick={() => {
                const newBag = {
                  id: "BAG" + Math.floor(Math.random() * 100000),
                  destination: "DXB",
                  weight: "16 kg",
                  scanned: new Date().toLocaleString(),
                  images,
                  lockCode,
                };

                onSave(newBag); // 🔥 هنا بس
                onClose();      // 🔥 يرجع للـ Scan
              }}
            >
              Back to Scan
            </button>

          </div>
        ) : (
          <>
            {/* header */}
            <div className="bagModal__header">
              <div className="bagModal__header-text">
                <h3>Add Bag Photos</h3>
                <span>Tag: BAG285327</span>
              </div>

              <button onClick={onClose}>✕</button>
            </div>

            {/* info */}
            <div className="bagModal__info">
              <p>Tag Number: BAG285327</p>
              <p>Destination: DXB</p>
              <p>Weight: 16 kg</p>
            </div>

            {/* upload */}
            <p className="bagModal__label">Bag Photos</p>

            <label className="bagModal__upload">
              + Add Photos
              <input type="file" multiple onChange={handleAdd} hidden />
            </label>

            <p className="note">
              Note: Add 6 photos of all your bag sides
            </p>

            {/* preview */}
            <div className="preview">
              {images.map((img, i) => (
                <img key={i} src={URL.createObjectURL(img)} />
              ))}
            </div>

            {/* 🔒 security lock */}
            {images.length > 0 && (
              <div className="bagModal__field">
                <label>Security Lock Code</label>
                <input
                  type="text"
                  inputMode="numeric"
                  placeholder="Enter lock code"
                  value={lockCode}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, "");
                    setLockCode(value);
                  }}
                />
              </div>
            )}

            {/* actions */}
            <div className="bagModal__actions">
              <button className="cancel" onClick={onClose}>
                Cancel
              </button>

              <button
                className="save"
                disabled={images.length < 6 || !lockCode}
                onClick={handleSave}
              >
                Save Bag
              </button>
            </div>
          </>
        )}

      </div>
    </div>,
    document.body
  );
};

export default AddBagModal;