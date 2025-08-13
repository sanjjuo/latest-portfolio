"use client";
import Footer from "@/components/Footer/Footer";
import { useIsScrolledHook } from "@/components/hooks/isScrolledHook";
import Navbar from "@/components/Navbar/Navbar";
import { cn } from "@/lib/utils";
import React from "react";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  const { isScrolled } = useIsScrolledHook();
  return (
    <>
      <div
        className={cn(
          isScrolled ? "bg-app-projectBg w-full" : "bg-transparent",
          "sticky top-0 w-full z-50 transition transform duration-300 ease-in-out"
        )}
      >
        <Navbar />
      </div>
      <div className="-mt-20 p-2">{children}</div>
      <Footer />
    </>
  );
};

export default HomeLayout;
