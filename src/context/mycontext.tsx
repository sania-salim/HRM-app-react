import { FC, ReactNode, createContext, useContext, useState } from "react";

interface propData {
  name: string;
  message: string;
}

interface contextType {
  data: propData;
  updateData: (newData: Partial<propData>) => void;
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

  const contextValue: contextType = { data, updateData };
  console.log(data, "my context");

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
