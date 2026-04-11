import "./PassportVerification.css";

import StatsCards from "../../components/PassportVerification/StatsCards/StatsCards";
import PassportCard from "../../components/PassportVerification/PassportCard/PassportCard";
import passportImg from "../../assets/passport.png";

function PassportVerification() {
  return (
    <div className="passport-page">

      {/* 🔹 العنوان */}
      <div className="passport-header">
        <h1>Passport Verification</h1>
        <p>Review and approve client passports</p>
      </div>

      {/* 🔹 الكروت */}
      <StatsCards />

      <div className="passport-list">
        <PassportCard
          name="Mahmoud Ibrahim Hassan"
          phone="+20 100 345 6789"
          email="mahmoud.ibrahim@email.com"
          image={passportImg}
          status="pending"
        />
        <PassportCard
          name="Mahmoud Ibrahim Hassan"
          phone="+20 100 345 6789"
          email="mahmoud.ibrahim@email.com"
          image={passportImg}
          status="pending"
        />
      </div>

      {/* 🔹 بعدين هنحط الكروت الكبيرة هنا */}
      {/* <PassportList /> */}

    </div>
  );
}

export default PassportVerification;