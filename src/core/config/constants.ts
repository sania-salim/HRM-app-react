export const PaginationLimit = 10;

// queries
export const getTableQueryAsc = `employee?limit=${PaginationLimit}&offset=0&sortBy=id&sortDir=asc`;
export const skillQuery = "/skills";
export const addEmployeeQuery = "/employee";

// select options
export const WorkOptions = [
  { label: "Office", value: "1" },
  { label: "Work from home", value: "2" },
];

export const LocationOptions = [
  { value: "1", label: "Trivandrum" },
  { value: "2", label: "Vazhuthacaud" },
  { value: "3", label: "Cochin" },
  { value: "4", label: "Calicut" },
  { value: "5", label: "Noida" },
  { value: "6", label: "Bangalore" },
  { value: "7", label: "Koratty" },
  { value: "8", label: "Chennai" },
];

export const DesignationOptions = [
  { label: "Engineer", value: "1" },
  { label: "Senior Engineer", value: "2" },
  { label: "Lead Engineer", value: "3" },
  { label: "Architect", value: "4" },
  { label: "Principal Engineer", value: "5" },
];
