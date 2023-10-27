import Link from "next/link";
import React from "react";
// import { useRouter } from "next/router"

const BottomNavigation = () => {
  // const router = useRouter()

  return (
    <nav className="fixed bottom-0 w-full bg-slate-900">
      <div className="btm-nav-lg flex justify-center items-center">
      <Link href="/about-me" className="mx-4  hover:text-purple-500   active:text-purple-500 ">
          <i className="fa-solid fa-user fa-xl"></i>
        </Link>
        <Link href="/projects" className="mx-4 hover:text-purple-500  active:text-purple-500 ">
          <i className="fa-solid fa-code fa-xl"></i>
        </Link>
        <Link href="/timeline" className="mx-4  hover:text-purple-500  active:text-purple-500 ">
          <i className="fa-solid fa-timeline fa-xl"></i>
        </Link>

      </div>
    </nav>
  );
};

export default BottomNavigation;
