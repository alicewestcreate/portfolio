import Link from "next/link";
import React from "react";

const Socials = () => {
  return (
    <>
    <hr></hr>
      <Link
        href="https://github.com/alicewestcreate"
        target="_blank"
        className="mx-4  hover:text-purple-500  active:text-purple-500"
      >
        <i className="fa-brands fa-github fa-xl"></i>
      </Link>
      <Link
        href="https://www.linkedin.com/in/alicegwest/"
        target="_blank"
        className="mx-4  hover:text-purple-500  active:text-purple-500"
      >
        <i className="fa-brands fa-linkedin fa-xl"></i>
      </Link>
      <Link
        href="https://www.instagram.com/alicewestdesigns/"
        target="_blank"
        className="mx-4  hover:text-purple-500  active:text-purple-500"
      >
        <i className="fa-brands fa-instagram fa-xl"></i>
      </Link>
    </>
  );
};

export default Socials;
