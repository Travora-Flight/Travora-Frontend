import "./AddPackageModal.css";
import { useState, useEffect } from "react";

type ServiceType = {
  name: string;
  phase: string;
  free: boolean;
};

type Props = {
  onClose: () => void;
  onSave: (data: any) => void;
  initialData?: any;
};

const AddPackageModal = ({ onClose, onSave, initialData }: Props) => {

  const servicesList = [
    "Door to Door",
    "Car Service",
    "Baggage Tracking"
  ];

  const [form, setForm] = useState({
    name: "",
    price: "",
    code: "",
    discount: "",
    freeCompany: "",
    addCompany: "",
    pricePerCompany: "",
    freeBag: "",
    addBag: "",
    pricePerBag: "",
    description: "",
    active: false,
    services: [] as ServiceType[]
  });

  const [errors, setErrors] = useState<any>({});

  /* EDIT */
  useEffect(() => {
    if (initialData) {
      setForm({
        ...form,
        ...initialData,
        services: initialData.services || []
      });
    }
  }, [initialData]);

  /* INPUT */
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  /* VALIDATION */
  const validate = () => {
    let newErrors: any = {};

    if (!form.name) newErrors.name = "Required";
    if (!form.price) newErrors.price = "Required";
    if (!form.code) newErrors.code = "Required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /* SERVICES */
  const handleServiceToggle = (service: string) => {
    const exists = form.services.find(s => s.name === service);

    if (exists) {
      setForm({
        ...form,
        services: form.services.filter(s => s.name !== service)
      });
    } else {
      setForm({
        ...form,
        services: [...form.services, { name: service, phase: "", free: false }]
      });
    }
  };

  const handlePhaseChange = (service: string, phase: string) => {
    const updated = form.services.map(s =>
      s.name === service ? { ...s, phase } : s
    );
    setForm({ ...form, services: updated });
  };

  const handleFreeToggle = (service: string) => {
    const updated = form.services.map(s =>
      s.name === service ? { ...s, free: !s.free } : s
    );
    setForm({ ...form, services: updated });
  };

  /* SAVE */
  const handleSave = () => {
    if (!validate()) return;

    onSave({
      ...form,
      price: Number(form.price),
      discount: Number(form.discount),
    });

    onClose();
  };

  return (
    <div className="add-package-modal-overlay">

      <div className="add-package-modal-box">

        <h2>{initialData ? "Edit Package" : "Add Package"}</h2>

        <div className="add-package-form">

          {/* NAME */}
          <div className="add-package-input-group">
            <label>Package Name</label>
            <input name="name" value={form.name} onChange={handleChange} />
            {errors.name && <span className="error-text">{errors.name}</span>}
          </div>

          {/* PRICE */}
          <div className="add-package-input-group">
            <label>Total Price</label>
            <input name="price" value={form.price} onChange={handleChange} />
            {errors.price && <span className="error-text">{errors.price}</span>}
          </div>

          {/* CODE + DISCOUNT */}
          <div className="add-package-row">
            <div className="add-package-input-group">
              <label>Code</label>
              <input name="code" value={form.code} onChange={handleChange} />
              {errors.code && <span className="error-text">{errors.code}</span>}
            </div>

            <div className="add-package-input-group">
              <label>Discount</label>
              <input name="discount" value={form.discount} onChange={handleChange} />
            </div>
          </div>

          {/* COMPANY */}
          <div className="add-package-row">
            <div className="add-package-input-group">
              <label>Free Company</label>
              <input name="freeCompany" value={form.freeCompany} onChange={handleChange} />
            </div>

            <div className="add-package-input-group">
              <label>Addition Company</label>
              <input name="addCompany" value={form.addCompany} onChange={handleChange} />
            </div>
          </div>

          <div className="add-package-input-group">
            <label>Price Per Company</label>
            <input name="pricePerCompany" value={form.pricePerCompany} onChange={handleChange} />
          </div>

          {/* BAG */}
          <div className="add-package-row">
            <div className="add-package-input-group">
              <label>Free Bag</label>
              <input name="freeBag" value={form.freeBag} onChange={handleChange} />
            </div>

            <div className="add-package-input-group">
              <label>Addition Bag</label>
              <input name="addBag" value={form.addBag} onChange={handleChange} />
            </div>
          </div>

          <div className="add-package-input-group">
            <label>Price Per Bag</label>
            <input name="pricePerBag" value={form.pricePerBag} onChange={handleChange} />
          </div>

          {/* DESCRIPTION */}
          <div className="add-package-input-group">
            <label>Description</label>
            <textarea name="description" value={form.description} onChange={handleChange} />
          </div>

          {/* SERVICES INCLUDED */}
          <div className="add-package-services">
            <label>Services Included</label>

            {servicesList.map((service) => {
              const selected = form.services.find(s => s.name === service);

              return (
                <div key={service} className="add-package-service-item">

                  <input
                    type="checkbox"
                    checked={!!selected}
                    onChange={() => handleServiceToggle(service)}
                  />

                  <span className="add-package-service-name">{service}</span>

                  <select
                    className="add-package-phase-select"
                    value={selected?.phase || ""}
                    onChange={(e) => handlePhaseChange(service, e.target.value)}
                    disabled={!selected}
                  >
                    <option value="">Phase</option>
                    <option value="Pickup">Pickup</option>
                    <option value="Airport">Airport</option>
                    <option value="Delivery">Delivery</option>
                  </select>

                  <div className="add-package-free-box">
                    <input
                      type="checkbox"
                      checked={selected?.free || false}
                      onChange={() => handleFreeToggle(service)}
                      disabled={!selected}
                    />
                    <span>Free</span>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

        {/* ACTIONS */}
        <div className="add-package-actions">
          <button className="cancel-btn" onClick={onClose}>Cancel</button>
          <button className="save-btn" onClick={handleSave}>Save</button>
        </div>

      </div>

    </div>
  );
};

export default AddPackageModal;