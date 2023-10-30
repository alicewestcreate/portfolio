import Link from "next/link";
import React from "react";
import Socials from "../Socials";
// import { useRouter } from "next/router"

const Navigation = () => {
  // const router = useRouter()

  const navCSS = {
    base: "fixed bg-teal-500",
    mobile: "flex bottom-0 w-full",
    desktop: "flex lg:flex-col lg:h-full lg:w-20",
  };

  const wrapperCSS = {
    base: "flex justify-center items-center",
    navMobile: "flex-row w-full h-16",
    socialMobile: 'hidden',
    desktop: "lg:flex lg:flex-col lg:h-1/2 lg:gap-10",
  };

  return (
    <nav className={`${navCSS.base} ${navCSS.mobile} ${navCSS.desktop} `}>
      <div
        className={`${wrapperCSS.base} ${wrapperCSS.navMobile} ${wrapperCSS.desktop} `}
      >
        <Link
          href="/"
          className="mx-4  hover:text-purple-500   active:text-purple-500"
        >
          <i className="fa-solid fa-user fa-xl"></i>
        </Link>
        <Link
          href="/projects"
          className="mx-4 hover:text-purple-500  active:text-purple-500"
        >
          <i className="fa-solid fa-code fa-xl"></i>
        </Link>
        <Link
          href="/experience"
          title="Expierence"
          className="mx-4  hover:text-purple-500  active:text-purple-500"
        >
          <i className="fa-solid fa-timeline fa-xl"></i>
        </Link>
      </div>
      <div
        className={`${wrapperCSS.base} ${wrapperCSS.socialMobile} ${wrapperCSS.desktop} `}
      >
        <Socials></Socials>
      </div>
    </nav>
  );
};

export default Navigation;
