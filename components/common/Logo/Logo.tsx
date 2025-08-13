"use client";
import { useIsScrolledHook } from "@/components/hooks/isScrolledHook";
import { cn } from "@/lib/utils";
import React from "react";

const Logo = () => {
  const { isScrolled } = useIsScrolledHook();
  return (
    <span
      className={cn(
        isScrolled ? "text-white" : "text-app-text",
        "font-extrabold text-3xl font-heading"
      )}
    >
      sanjeed.
    </span>
  );
};

export default Logo;
