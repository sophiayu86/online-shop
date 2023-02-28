import { createContext, useState } from "react";

export const FormContext = createContext(null);

export const FormProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState("1");
  const [data, setData] = useState({
    salutation: "",
    name: "",
    phone: "",
    email: "",
    city: "",
    address: "",
    shipping: "",
    payName: "",
    cardNumber: "",
    expireDate: "",
    CCV: "",
  });
  const handleSubmit = () => {
    console.log(JSON.stringify(data));
  };
  const handleChange = (e) => {
    const type = e.target.type;
    const name = e.target.name;
    const value = type === "checkbox" ? e.target.checked : e.target.value;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <FormContext.Provider
      value={{
        data,
        setData,
        handleSubmit,
        handleChange,
        currentStep,
        setCurrentStep,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
