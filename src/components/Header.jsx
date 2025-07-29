import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="shadow-sm border-b sticky top-0 bg-white z-30 p-3">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        
        {/* Logo  */}
        <Link href="/" className="lg:inline-flex hidden">
          <h1>REELZ-Next</h1>
        </Link>

        <Link href="/">
          <Image
            src={"/800px-Instagram_logo_2016.webp"}
            alt="logo"
            className="lg:hidden"
            height={40}
            width={40}
          ></Image>
        </Link>

        {/* Search  */}
        <input
          type="text"
          placeholder="search..."
          className="w-full border bg-gray-50 border-gray-200 rounded text-sm outline-none px-4 py-2 max-w-[210px]"
        />

        {/* Log In  */}
        <button className="text-sm font-semibold text-blue-500">Log In</button>
      </div>
    </div>
  );
}
