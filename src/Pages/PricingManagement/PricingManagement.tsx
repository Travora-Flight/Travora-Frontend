import { useState } from "react";
import "./PricingManagement.css";
import PricingStats from "../../components/PricingManagement/PricingStats/PricingStats";
import ServicesSection from "../../components/PricingManagement/ServicesSection/ServicesSection";
import PackagesSection from "../../components/PricingManagement/PackagesSection/PackagesSection";

function PricingManagement() {

  const [search, setSearch] = useState("");

  return (
    <div className="pricing-page">

      <div className="pricing-content">

        <h1>Pricing Management</h1>
        <p className="subtitle">Manage services and packages</p>

        <PricingStats />

        {/* SEARCH */}
        <div className="pricing-search-box">

          <svg className="pricing-search-icon" viewBox="0 0 24 24" fill="none">
            <circle cx="11" cy="11" r="7" stroke="#94a3b8" strokeWidth="2" />
            <line x1="16.5" y1="16.5" x2="21" y2="21" stroke="#94a3b8" strokeWidth="2" />
          </svg>

          <input
            type="text"
            placeholder="Search services or packages..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>

        <ServicesSection search={search} />
        <PackagesSection search={search} />

      </div>

    </div>
  );
}

export default PricingManagement;