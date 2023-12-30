"use client";
import React, { useState } from "react";
import { Car, Maximize2 } from "lucide-react";
import Image from "next/image";
import { Button } from "../../components/ui/button";
import Card from "../../components/Card";

const Page = () => {
  return (
    <>
      <div className="col-span-full ">
        <h1 className="text-2xl">Projects</h1>
        <p className=" text-slate-400">Check them out</p>
      </div>
      {data.map((a, i) => (
        <Card key={i} {...a} />
      ))}
    </>
  );
};

export default Page;

const data = [
  {
    title: "MM",
    description:
      "Consectetur aute ea aliquip esse elit cupidatat elit amet pariatur nulla deserunt id nisi cillum.",
    size: "md",
    className: "bg-slate-500  bg-gradient-to-b from-muted/50 to-mute",
  },
  {
    title: "MM",
    description:
      "Consectetur aute ea aliquip esse elit cupidatat elit amet pariatur nulla deserunt id nisi cillum.",
    size: "lg",
    className: "bg-slate-500  bg-gradient-to-b from-muted/50 to-mute",
  },
  {
    title: "MM",
    description:
      "Consectetur aute ea aliquip esse elit cupidatat elit amet pariatur nulla deserunt id nisi cillum.",
    size: "lg",
    className: "bg-slate-500  bg-gradient-to-b from-muted/50 to-mute",
  },
  {
    title: "MM",
    description:
      "Consectetur aute ea aliquip esse elit cupidatat elit amet pariatur nulla deserunt id nisi cillum.",
    size: "md",
    className: "bg-slate-500  bg-gradient-to-b from-muted/50 to-mute",
  },
  {
    title: "MM",
    description:
      "In aliquip deserunt cupidatat sint ullamco ut amet elit laboris duis. Aliquip proident aliqua reprehenderit mollit et velit eu excepteur laboris. Deserunt ipsum in ea voluptate ut minim velit tempor.",
    size: "md",
    className: "bg-slate-500  bg-gradient-to-b from-muted/50 to-mute",
  },
  {
    title: "MM",
    description:
      "Consectetur aute ea aliquip esse elit cupidatat elit amet pariatur nulla deserunt id nisi cillum.",
    size: "md",
    className: "bg-slate-500  bg-gradient-to-b from-muted/50 to-mute",
  },
  {
    title: "MM",
    description:
      "Consectetur aute ea aliquip esse elit cupidatat elit amet pariatur nulla deserunt id nisi cillum.",
    size: "md",
    className: "bg-slate-500  bg-gradient-to-b from-muted/50 to-mute",
  },
];