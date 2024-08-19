"use client";
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import { useUser, UserButton } from "@clerk/nextjs";

function Header() {
  const { user, isSignedIn } = useUser();
  return (
    <div className="p-5 flex justify-center items-center border shadow-sm">
      <div className="flex flex-row items-center">
        {/* logo */}
        <Image />
      </div>
      <div>
        <span>FinanSmart</span>
      </div>
      <div>{/* userbutton */}</div>
    </div>
  );
}

export default Header;
