import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import React from "react";

const AppButton = () => {
  return (
    <Button className="bg-white text-app-text rounded-full w-auto h-11 text-[15px] capitalize hover:bg-white gap-1 hover:rounded-xl transition-transform ease-in duration-700">
      Talk to me <ArrowRight className="-rotate-45 !w-4 !h-4" />
    </Button>
  );
};

export default AppButton;
