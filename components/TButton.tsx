import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

interface ButtonProps {
  children: React.ReactNode;
  TooltipTriggerText: string;
}

const TButton = ({ children, TooltipTriggerText }: ButtonProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>{children}</TooltipTrigger>
        <TooltipContent>{TooltipTriggerText}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default TButton;
