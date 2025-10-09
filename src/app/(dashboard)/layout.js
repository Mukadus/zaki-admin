import React from "react";
import Header from "@/components/molecules/Header/Header";

const layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default layout;
