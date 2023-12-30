"use client";
import React, { FC, useState } from "react";
import { Button } from "./ui/button";
import {
  X,
  PanelsTopLeft,
  PanelRight,
  AlignVerticalSpaceAround,
  Check,
} from "lucide-react";
import TButton from "./TButton";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

const modalContainer =
  " fixed z-10 left-0 top-0 w-full h-full overflow-auto bg-black bg-opacity-50";
const modalContentSide =
  "bg-white dark:bg-slate-800  w-1/2 md:w-1/3 h-full ml-[50%] md:ml-[67%] p-4  ";
const modalContentCenter =
  "bg-white dark:bg-slate-800 rounded-lg w-[90%] lg:w-1/2 h-1/2 m-auto p-4 translate-y-36 ";


export const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const [peekMode, setPeekMode] = useState(modalContentSide);
  const changePeekMode = () => {
    if (peekMode === modalContentSide) {
      setPeekMode(modalContentCenter);
    } else {
      setPeekMode(modalContentSide);
    }
  };

  if (!isOpen) {
    return null;
  }
  const propagete = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
  };

  return (
    <div className={modalContainer} onClick={onClose}>
      <div className={peekMode + " "} onClick={propagete}>
        <div className="header flex justify-start items-center ">
          <TButton TooltipTriggerText="close modal">
            <Button
              size={"icon"}
              className=""
              variant={"secondary"}
              onClick={onClose}
            >
              <X size={18} />
            </Button>
          </TButton>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <TButton TooltipTriggerText="Switch Peek Mode">
                <Button
                  size={"icon"}
                  className=""
                  variant={"secondary"}
                  onClick={onClose}
                >
                  <PanelsTopLeft size={18}  />
                </Button>
              </TButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[200px]">
              <DropdownMenuItem onClick={changePeekMode} className="flex justify-between gap-3">
                <div className="flex items-center gap-2">
                  <PanelRight size={16} /> <span>Side Peek</span>
                </div>
                <Check  size={16} className={`${peekMode !== modalContentSide? "hidden" : ""}`} />
              </DropdownMenuItem>
              <DropdownMenuItem onClick={changePeekMode}  className="flex gap-3">
                <div className="flex items-center gap-2">
                  <AlignVerticalSpaceAround size={16} />
                  <span>Center Peek</span>
                </div>
                <Check size={16} className={`${peekMode !== modalContentCenter? "hidden" : ""}`} />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;

