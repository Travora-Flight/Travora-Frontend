import "./AddServiceModal.css";
import { useState, useEffect } from "react";

type Props = {
  onClose: () => void;
  onSave: (data: any) => void;
  initialData?: any;
};

const AddServiceModal = ({ onClose, onSave, initialData }: Props) => {

  const [form, setForm] = useState({
    name: "",
    price: "",
    code: "",
    type: "",
    description: ""
  });
  useEffect(() => {
    if (initialData) {
      setForm({
        name: initialData.name || "",
        price: initialData.price || "",
        code: initialData.code || "",
        type:
          initialData.type === "Luggage Transport"
            ? "Pickup"
            : initialData.type || "",
        description: initialData.description || ""
      });
    }
  }, [initialData]);

  const [errors, setErrors] = useState<any>({});

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors: any = {};

    if (!form.name) newErrors.name = "Required";
    if (!form.price) newErrors.price = "Required";
    if (!form.code) newErrors.code = "Required";
    if (!form.type) newErrors.type = "Required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (!validate()) return;

    onSave({
      name: form.name,
      code: form.code,
      type: form.type,
      price: Number(form.price)
    });

    onClose();
  };

  return (
    <div className="add-service-modal-overlay">

      <div className="add-service-modal-box">

        <h2>Add Service</h2>

        <div className="add-service-form">

          <div className="add-service-input-group">
            <label>Service Name</label>
            <input name="name" value={form.name} onChange={handleChange} />
            {errors.name && <span className="add-service-error">{errors.name}</span>}
          </div>

          <div className="add-service-input-group">
            <label>Base Price</label>
            <input
              name="price" value={form.price} onChange={handleChange}/>         
               {errors.price && <span className="add-service-error">{errors.price}</span>}
          </div>

          <div className="add-service-row">

            <div className="add-service-input-group">
              <label>Code</label>
              <input name="code" value={form.code} onChange={handleChange} />            
               {errors.code && <span className="add-service-error">{errors.code}</span>}
            </div>

            <div className="add-service-input-group">
              <label>Type</label>
              <select name="type" value={form.type} onChange={handleChange}>
                <option value="">Select</option>
                <option>Pickup</option>
                <option>Tracking</option>
                <option>Delivery</option>
              </select>
              {errors.type && <span className="add-service-error">{errors.type}</span>}
            </div>

          </div>

          <div className="add-service-input-group">
            <label>Description</label>
            <textarea name="description" value={form.description} onChange={handleChange} />
          </div>

        </div>

        <div className="add-service-actions">

          <button className="add-service-cancel-btn" onClick={onClose}>
            Cancel
          </button>

          <button className="add-service-save-btn" onClick={handleSave}>
            Save
          </button>

        </div>

      </div>

    </div>
  );
};

export default AddServiceModal;