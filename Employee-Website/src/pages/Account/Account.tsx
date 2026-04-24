import "./Account.css";
import { useState } from "react";
import ChangePasswordModal from "./ChangePasswordModal/ChangePasswordModal";

const Account = () => {

    const [openPassword, setOpenPassword] = useState(false);
    const [user, setUser] = useState({
        firstName: "Mahmoud",
        lastName: "Akl",
        phone: "+201034893924",
        email: "mahmoud23@travora.com",
        nationalId: "303545049030",
        address: "Egypt, Sharqia, 10th of Ramadan",
        dob: "05/03/2000",
        checkPoint: "Delivery",
    });
    const handleSave = () => {
        localStorage.setItem("user", JSON.stringify(user));
        alert("Saved successfully ✅");
    };
    const savedUser = JSON.parse(localStorage.getItem("user") || "{}");

    const isChanged =
        JSON.stringify(user) !== JSON.stringify(savedUser);

    return (
        <div className="account">

            <div className="account__wrapper">

                <h2 className="account__title">Account</h2>
                <p className="account__subtitle">
                    Manage your application preferences and configurations
                </p>

                <div className="account__content">

                    {/* profile */}
                    <div className="account__profile">
                        <img
                            src=""
                            alt="profile"
                            className="account__avatar"
                        />
                        <h3>Mahmoud Akl</h3>
                        <p>Driver</p>
                        <span>Night Shift</span>
                    </div>

                    {/* form */}
                    <div className="account__card">

                        <h3 className="account__section-title">
                            Personal Information
                        </h3>

                        <p className="account__desc">
                            All employee information and references
                        </p>

                        <div className="account__grid">

                            <div>
                                <label>First Name</label>
                                <input value={user.firstName} readOnly />
                            </div>

                            <div>
                                <label>Last Name</label>
                                <input value={user.lastName} readOnly />
                            </div>

                            <div>
                                <label>Mobile Number</label>
                                <input
                                    value={user.phone}
                                    onChange={(e) =>
                                        setUser({ ...user, phone: e.target.value })
                                    }
                                />
                            </div>

                            <div>
                                <label>Email Address</label>
                                <input value={user.email} readOnly />
                            </div>

                            <div>
                                <label>National ID</label>
                                <input value={user.nationalId} readOnly />
                            </div>

                            <div>
                                <label>Address</label>
                                <input value={user.address} readOnly />
                            </div>

                            <div>
                                <label>Date Of Birth</label>
                                <input value={user.dob} readOnly />
                            </div>

                            <div>
                                <label>Check Point</label>
                                <input value={user.checkPoint} readOnly />
                            </div>

                        </div>

                        {/* change password */}
                        <div className="account__password">
                            <div>
                                <p>Change Password</p>
                                <span>Update your password regularly</span>
                            </div>

                            <button onClick={() => setOpenPassword(true)}>
                                Change
                            </button>
                        </div>

                        <div className="account__actions">
                            <button className="account__reset" disabled>
                                Reset
                            </button>

                            <button
                                className="account__save"
                                onClick={handleSave}
                                disabled={!isChanged}
                            >
                                Save
                            </button>
                        </div>

                    </div>

                </div>

            </div>

            {/* modal */}
            {openPassword && (
                <ChangePasswordModal onClose={() => setOpenPassword(false)} />
            )}

        </div>
    );
};

export default Account;