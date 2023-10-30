import React from "react";

interface props {
  children: string;
}
const Paragraph = ({ children }: props) => {
  return <p className="pb-12 text-lg"> {children}</p>;
};

export default Paragraph;
