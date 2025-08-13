"use client";
import { useIsScrolledHook } from "@/components/hooks/isScrolledHook";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const AppButton = ({
  name,
  href,
  style,
}: {
  name: string;
  href: string;
  style: string;
}) => {
  const { isScrolled } = useIsScrolledHook();
  return (
    <Link href={href}>
      <Button
        className={cn(
          style === "services-btn"
            ? "bg-transparent hover:bg-transparent text-app-text"
            : (style === "navbar-btn" || style === "project-btn") && isScrolled
            ? "bg-white text-app-text hover:bg-white"
            : "bg-app-projectBg text-white hover:bg-app-projectBg",
          "rounded-full w-auto font-heading h-11 text-[15px] capitalize gap-1 hover:rounded-xl transition ease-in duration-300 shadow-none"
        )}
      >
        {name} <ArrowRight className="-rotate-45 !w-4 !h-4" />
      </Button>
    </Link>
  );
};

export default AppButton;
