import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CiShoppingCart } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="flex justify-between flex-col items-center md:flex-row md:justify-start">
      <div className="logo mx-5">
        <Link href={"/"}>
          <Image src={"/logo.png"} width={200} height={40} alt="image" />
        </Link>
      </div>

      <div className="nav items-center py-4">
        <ul className="flex space-x-2 font-bold text-xl ">
          <Link href={"/tshirts"}>
            {" "}
            <li className="gap-5">Tshirts</li>{" "}
          </Link>
          <Link href={"/hoodies"}>
            {" "}
            <li className="gap-5">Hoodies</li>{" "}
          </Link>
          <Link href={"/mugs"}>
            {" "}
            <li className="gap-5">Mugs</li>{" "}
          </Link>
          <Link href={"/stickers"}>
            {" "}
            <li className="gap-5">Stickers</li>{" "}
          </Link>
        </ul>
      </div>

      <div className="cart absolute right-0 mx-5 top-4 md:text-3xl">
        <CiShoppingCart />
      </div>
    </div>
  );
};

export default Navbar;
