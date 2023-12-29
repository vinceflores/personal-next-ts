"use client";
import { Car } from "lucide-react";
import React, { MouseEventHandler, useState } from "react";
import Image from "next/image";
type CardSize = "sm" | "md" | "lg";

interface CardProps {
  title: string;
  description: string;
  size: CardSize;
  className: string;
  image: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
  children?: React.ReactNode;
}

const mock = [
  {
    image:
      "https://plus.unsplash.com/premium_photo-1664382465607-420346d391bd?q=80&w=3126&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

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
    <div
      style={bgImg(image)}
      className={`${className} ${switchMOde()}  cursor-pointer   p-3 rounded-lg flex flex-col justify-end items-start`}
    >
      {children}
      <div className="relative ">
        <h1 className="text-lg text-slate-400 font-bold">{title}</h1>
        <p className="text-sm text-slate-300">{description}</p>
      </div>
    </div>
  );
};

export default Card;
