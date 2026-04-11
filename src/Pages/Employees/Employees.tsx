import { useState, useEffect } from "react";
import "./Employees.css";

import EmployeesHeader from "../../components/Employees/EmployeesHeader/EmployeesHeader";
import EmployeesTable from "../../components/Employees/EmployeesTable/EmployeesTable";
import AddEmployeeModal from "../../components/Employees/AddEmployeeModal/AddEmployeeModal";
import EmployeeProfileModal from "../../components/Employees/EmployeeProfileModal/EmployeeProfileModal";
import EmployeeCreatedModal from "../../components/Employees/AddEmployeeModal/EmployeeCreatedModal/EmployeeCreatedModal";

const Employees = () => {

  //  search
  const [search, setSearch] = useState("");

  const [statusFilter, setStatusFilter] = useState("active");
  const [createdEmployee, setCreatedEmployee] = useState<any>(null);

  // add modal
  const [openModal, setOpenModal] = useState(false);

  //  selected employee
  const [selectedEmployee, setSelectedEmployee] = useState<any>(null);
  const [editingEmployee, setEditingEmployee] = useState<any>(null);

  //  data
  const [employees, setEmployees] = useState([
    { name: "Ziyad", mobile: "01025464658", status: "inactive", email: "example@gmail.com", shift: "Night", id: "#1254" },
    { name: "Arwa", mobile: "01508493686", status: "active", email: "example@gmail.com", shift: "Evening", id: "#4891" },
    { name: "Ali", mobile: "01257929276", status: "active", email: "example@gmail.com", shift: "Night", id: "#9654" },
    { name: "Sayed", mobile: "01149823474", status: "inactive", email: "example@gmail.com", shift: "Morning", id: "#4864" },
    { name: "Ahmed", mobile: "01054924824", status: "active", email: "example@gmail.com", shift: "Morning", id: "#8521" },
    { name: "Hossam", mobile: "01579145263", status: "inactive", email: "example@gmail.com", shift: "Afternoon", id: "#4875" },
    { name: "Abdullah", mobile: "01148678679", status: "active", email: "example@gmail.com", shift: "Evening", id: "#4576" },
    { name: "Marwan", mobile: "01257964784", status: "active", email: "example@gmail.com", shift: "Night", id: "#7654" },
  ]);

  // add employee
  // const addEmployee = (newEmployee: any) => {
  //   setEmployees((prev) => [...prev, newEmployee]);
  // };

  const handleDelete = (id: string) => {
    setEmployees((prev) => prev.filter((emp) => emp.id !== id));
  };

  const handleEdit = (emp: any) => {
    setSelectedEmployee(null); 
    setEditingEmployee(emp);  
    setOpenModal(true);        
  };

  const handleStatusChange = (id: string, status: string) => {
    setEmployees((prev) =>
      prev.map((emp) =>
        emp.id === id ? { ...emp, status } : emp
      )
    );
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedEmployee(null);
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div className="employees-page-container">

      {/* 🔹 HEADER */}
      <EmployeesHeader
        search={search}
        setSearch={setSearch}
        openModal={() => setOpenModal(true)}
      />

      {/* 🔹 TABLE */}

      <EmployeesTable
        search={search}
        data={employees}
        onRowClick={setSelectedEmployee}
        onStatusChange={handleStatusChange}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}  
      />

      {/* 🔹 ADD MODAL */}
      <AddEmployeeModal
        isOpen={openModal}
        onClose={() => {
          setOpenModal(false);
          setEditingEmployee(null);
        }}
        onAdd={async (emp: any) => {
          const fakeResponse = {
            ...emp,
            email: emp.name.toLowerCase().replace(" ", ".") + "@travora.com",
            password: Math.random().toString(36).slice(-8)
          };
          
          setEmployees((prev: any) => [...prev, fakeResponse]);
          setOpenModal(false);
          setCreatedEmployee(fakeResponse);
        }}
        // onAdd={async (emp: any) => {
        //   try {
        //     const res = await fetch("YOUR_API_URL", {
        //       method: "POST",
        //       headers: {
        //         "Content-Type": "application/json"
        //       },
        //       body: JSON.stringify(emp)
        //     });

        //     const data = await res.json();

        //     //email + password
        //     setEmployees((prev: any) => [...prev, data]);

        //     // popup
        //     setCreatedEmployee(data);

        //   } catch (err) {
        //     console.error(err);
        //   }
        // }}
        editingEmployee={editingEmployee}
      />

      <EmployeeCreatedModal
        employee={createdEmployee}
        onClose={() => setCreatedEmployee(null)}
      />

      {/* 🔹 PROFILE MODAL */}
      <EmployeeProfileModal
        employee={selectedEmployee}
        onClose={() => setSelectedEmployee(null)}
        onStatusChange={handleStatusChange}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />

    </div>
  );
};

export default Employees;