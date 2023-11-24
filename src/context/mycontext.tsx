import { FC, ReactNode, createContext, useContext, useState } from "react";
// import { iEmployee } from "../components/table/table";

interface propData {
  name: string;
  message: string;
}

export interface empData {
  id: number;
  firstName: string;
  dateOfJoining: string;
  dob: string;
  email: string;
  designation: string;
}

interface contextType {
  data: propData;
  updateData: (newData: Partial<propData>) => void;
  table: Array<empData> | undefined;
  getEmpData: (list: Array<empData>) => void;
}

// creating context with initial values
const MyContext = createContext<contextType | undefined>(undefined);

// context provider
export const MyProvider: FC<{ children: ReactNode }> = ({ children }) => {
  // state and modifier for popup
  const [data, setData] = useState<propData>({ name: "", message: "" });
  const updateData = (newData: Partial<propData>) => {
    setData((prevData) => ({ ...prevData, ...newData }));
  };

  // employee list data state
  const [table, setTable] = useState<Array<empData> | undefined>([]);
  const getEmpData = (list: Array<empData>) => {
    setTable(list);
  };

  const contextValue: contextType = { data, updateData, table, getEmpData };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};

// custom hook to use context
export const useMyContext = (): contextType => {
  const context = useContext(MyContext);

  if (!context) {
    throw new Error("use context within provider");
  }

  return context;
};
