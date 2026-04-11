// نوع الحالة
export type EmployeeStatus = "available" | "onService";

// نوع الفلتر
export type FilterType = "all" | "available" | "onService";

// شكل الموظف
export type Employee = {
  id: number;
  name: string;
  status: EmployeeStatus;
  location: {
    lat: number;
    lng: number;
  };
};