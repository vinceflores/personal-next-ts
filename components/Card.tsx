"use client";
import { Car, Maximize2, Expand } from "lucide-react";
import React, { MouseEventHandler, useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import Modal from "./Modal";

type CardSize = "sm" | "md" | "lg";

interface CardProps {
  title?: string;
  description?: string;
  size?: CardSize;
  className?: string;
  image?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
  onClickPeek?: MouseEventHandler<HTMLDivElement>;
  children?: React.ReactNode;
}

const bgImg = (url: string) => {
  return {
    backgroundImage: `url(${url})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
};

const Card: React.FC<CardProps> = ({
  title,
  description,
  size,
  className,
  image,
  onClick,
  children,
}) => {
  const [variant, setVariant] = useState<"sm" | "md" | "lg">(
    size ? size : "md"
  );
  const [hover, setHover] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const onclose = () => setIsOpen(!isOpen);
  const switchMOde = () => {
    switch (variant) {
      case "sm":
        return "col-span-1 row-span-3";
      case "md":
        return "col-span-1 row-span-12";
      case "lg":
        return "col-span-1 md:col-span-2  row-span-12";
      default:
        return "col-span-1 row-span-12";
    }
  };

  return (
    <>
      <div
        style={bgImg(image)}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className={`${className} ${switchMOde()}    cursor-pointer   p-3 rounded-lg flex flex-col justify-end items-start`}
      >
        {children}
        <div className="flex justify-between items-end  w-full ">
          <div className=" ">
            <h1 className="text-lg text-slate-100 font-bold">{title}</h1>
            <p
              id="description"
              className="text-sm max-h-1/3 text-ellipsis  text-pretty text-slate-300"
            >
              {description.substring(0, 60)}
            </p>
          </div>
          <Button
            variant={"ghost"}
            className={`${
              hover ? `fkex` : `hidden`
            } hover:bg-transparent items-center  justify-center   `}
            size={"icon"}
            onClick={onclose}
          >
            {/* <Maximize2 size={18} className="hover:scale-125" /> */}
            <Expand size={18} className="text-slate-200 hover:scale-125 " />
          </Button>
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={onclose}>
        <div className="w-full h-1/3 rounded-t-lg bg-slate-500 "   style={bgImg(image)} />
        <div className="w-full my-2 overflow-scroll">
          <h1 className="text-lg text-slate-400 font-bold">{title}</h1>
          <p
            id="description"
            className="text-sm max-h-1/3 text-ellipsis  text-pretty text-slate-900 dark:text-slate-300"
          >
            {description}
          </p>
        </div>
      </Modal>
    </>
  );
};

export default Card;
