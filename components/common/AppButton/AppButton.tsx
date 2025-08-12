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
  return (
    <Link href={href}>
      <Button
        className={cn(
          style === "services-btn"
            ? "bg-transparent hover:bg-transparent"
            : "bg-white hover:bg-white",
          "text-app-text rounded-full w-auto h-11 text-[15px] capitalize gap-1 hover:rounded-xl transition ease-in duration-1000 shadow-none"
        )}
      >
        {name} <ArrowRight className="-rotate-45 !w-4 !h-4" />
      </Button>
    </Link>
  );
};

export default AppButton;
