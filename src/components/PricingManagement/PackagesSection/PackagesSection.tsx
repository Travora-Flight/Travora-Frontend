import "./PackagesSection.css";
import { useState } from "react";
import { Pencil, Trash2 } from "lucide-react";
import AddPackageModal from "./AddPackageModal/AddPackageModal";

type Package = {
  name: string;
  code: string;
  price: number;
  discount: number;
  services: string[];
};

const PackagesSection = ({ search }: any) => {

  const [openModal, setOpenModal] = useState(false);
  const [editingPackage, setEditingPackage] = useState<any>(null);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const [packages, setPackages] = useState<Package[]>([
    {
      name: "Door to Door",
      code: "PK217",
      price: 250,
      discount: 0,
      services: ["Door to Door", "Car Service", "Baggage Tracking"]
    }
  ]);

  const filteredPackages = packages.filter((p: any) =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.code.toLowerCase().includes(search.toLowerCase()) ||
    p.services.some((s: string) =>
      s.toLowerCase().includes(search.toLowerCase())
    )
  );


  return (
    <div className="packages-section">

      {/* HEADER */}
      <div className="packages-header">
        <h2>Packages</h2>

        <button
          className="add-btn"
          onClick={() => {
            setEditingPackage(null);
            setEditingIndex(null);
            setOpenModal(true);
          }}
        >
          + Add Package
        </button>
      </div>

      {/* CARDS */}
      <div className="packages-grid">

        {filteredPackages.map((pkg, index) => (
          <div key={index} className="package-card">

            <div className="package-top">
              <h3>{pkg.name}</h3>

              <div className="actions">

                <button
                  className="edit-btn"
                  onClick={() => {
                    setEditingPackage(pkg);
                    setEditingIndex(packages.findIndex(p => p.code === pkg.code));
                    setOpenModal(true);
                  }}
                >
                  <Pencil size={14} />
                </button>

                <button
                  className="delete-btn"
                  onClick={() => {
                    setPackages((prev) => prev.filter((p) => p.code !== pkg.code));
                  }}
                >
                  <Trash2 size={14} />
                </button>

                <span className="status">Active</span>

              </div>
            </div>

            <p className="package-code">Code: {pkg.code}</p>

            <div className="package-price-box">

              <div>
                <span>Total Price</span>
                <h4>{pkg.price} EGP</h4>
              </div>

              <div>
                <span>Discount</span>
                <h4 className="discount">{pkg.discount} %</h4>
              </div>

            </div>

            <div className="package-services">
              <span>Services Included:</span>

              {pkg.services.map((s, i) => (
                <div key={i} className="service-pill">
                  {s}
                </div>
              ))}

            </div>

          </div>
        ))}

      </div>

      {/* MODAL */}
      {openModal && (
        <AddPackageModal
          onClose={() => {
            setOpenModal(false);
            setEditingPackage(null);
            setEditingIndex(null);
          }}
          initialData={editingPackage}
          onSave={(newPackage: any) => {

            if (editingIndex !== null) {
              const updated = [...packages];
              updated[editingIndex] = newPackage;
              setPackages(updated);
            } else {
              setPackages([...packages, newPackage]);
            }

          }}
        />
      )}

    </div>
  );
};

export default PackagesSection;