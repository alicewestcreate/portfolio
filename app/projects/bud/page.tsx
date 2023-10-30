import React from "react";
import projects from "../../api/projectdata.json"
import PageTemplate from "../_components/PageTemplate";


const Page = () => {
  return (
    <>
    <PageTemplate {...projects[1]}></PageTemplate>
    </>
  );
};

export default Page;
