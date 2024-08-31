"use client";
import React, { useEffect } from "react";
import SideNav from "./_components/SideNav";
import DashboardHeader from "./_components/DashboardHeader";
import { db } from "../../../../utils/dbConfig";
import { Budgets } from "../../../../utils/schema";
import { useUser } from "@clerk/nextjs";
import { Fira_Sans_Extra_Condensed } from "next/font/google";
import { EmailAddress } from "@clerk/nextjs/dist/types/server";

function DashboardLayout({ children }) {
  const user = useUser();
  const router = useRouter();

  useEffect(() => {
    user && checkUserBudgets();

    return () => {
      Second;
    };
  }, [user]);

  const checkUserBudgets = async () => {
    const result = await db.select
      .from(Budgets)
      .where(eq(Budgets.createdBy, user?.primaryEmailAddress?.emailAddress));
    if (result?.length === 0) {
      router.replace("/dashboard/budgets/");
    }
  };

  return (
    <div>
      <div className="fixed md:w-64 hidden md:block">
        <SideNav />
      </div>
      <div className="md:ml-64">
        <DashboardHeader />
        {children}
      </div>
    </div>
  );
}
