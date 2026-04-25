import "./EmployeeCreatedModal.css";

const EmployeeCreatedModal = ({ employee, onClose }: any) => {
    if (!employee) return null;

    return (
        <div className="employee-created-overlay">

            <div className="employee-created-modal">

                <div className="success-header">
                    <div className="success-icon">✓</div>
                    <h3>Employee Created Successfully</h3>
                </div>

                <p className="employee-created-sub">
                    Copy these credentials and send them to the employee
                </p>

                {/* 🔹 INFO */}
                <div className="employee-info">
                    <p><span>Name</span>{employee.name}</p>
                    <p><span>Mobile</span>{employee.mobile}</p>
                    <p><span>Job</span>{employee.job}</p>
                    <p><span>Shift</span>{employee.shift}</p>
                </div>

                {/* 🔹 CREDENTIALS */}
                <div className="employee-credentials">
                    <div>
                        <span>Email</span>
                        <strong>{employee.email}</strong>
                    </div>

                    <div>
                        <span>Password</span>
                        <strong>{employee.password}</strong>
                    </div>
                </div>

                <button
                    className="employee-copy-btn"
                    onClick={async () => {
                        const text = `Name: ${employee.name}
                                     Mobile: ${employee.mobile}
                                     Job: ${employee.job}
                                     Shift: ${employee.shift}
                                     Email: ${employee.email}
                                     Password: ${employee.password}`;

                        try {
                            await navigator.clipboard.writeText(text);
                            alert("Copied! ✅"); 
                        } catch (err) {
                            console.error("Copy failed", err);
                        }
                    }}
                >
                    Copy 
                </button>
                <button className="employee-done-btn" onClick={onClose}>
                    Done
                </button>

            </div>

        </div>
    );
};

export default EmployeeCreatedModal;