"use client";
import { useState } from "react";
import Image from "next/image";
import Card from "@/components/Card";
import Modal from "@/components/Modal";
export default function Home() {
  return (
    <>
      <div className="col-span-full ">
        <h1 className="text-2xl">Welcome</h1>
        <p className=" text-slate-400">
          {" "}
          Hi! I'm Vince, Software Developer in making{" "}
        </p>
      </div>
      {data.map((a, i) => (
        <Card key={i} {...a} />
      ))}
    </>
  );
}

const data = [
  {
    title: "MM",
    description:
      "Consectetur aute ea aliquip esse elit cupidatat elit amet pariatur nulla deserunt id nisi cillum.",
    size: "md",
    className: "bg-slate-500  bg-gradient-to-b from-muted/50 to-mute",
    image:
      "https://images.unsplash.com/photo-1683009427479-c7e36bbb7bca?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "MM",
    description:
      "Consectetur aute ea aliquip esse elit cupidatat elit amet pariatur nulla deserunt id nisi cillum.",
    size: "lg",
    className: "bg-slate-500  bg-gradient-to-b from-muted/50 to-mute",
    image:
      "https://images.unsplash.com/photo-1682686580186-b55d2a91053c?q=80&w=1550&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "MM",
    description:
      "Consectetur aute ea aliquip esse elit cupidatat elit amet pariatur nulla deserunt id nisi cillum.",
    size: "lg",
    className: "bg-slate-500  bg-gradient-to-b from-muted/50 to-mute",
    image:
      "https://images.unsplash.com/photo-1703747269814-769250ef0568?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "MM",
    description:
      "Consectetur aute ea aliquip esse elit cupidatat elit amet pariatur nulla deserunt id nisi cillum.",
    size: "md",
    className: "bg-slate-500  bg-gradient-to-b from-muted/50 to-mute",
    image:
      "https://images.unsplash.com/photo-1682695799561-033f55f75b25?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "MM",
    description:
      "In aliquip deserunt cupidatat sint ullamco ut amet elit laboris duis. Aliquip proident aliqua reprehenderit mollit et velit eu excepteur laboris. Deserunt ipsum in ea voluptate ut minim velit tempor.",
    size: "md",
    className: "bg-slate-500  bg-gradient-to-b from-muted/50 to-mute",
    image:
      "https://images.unsplash.com/photo-1703622603725-a6a102e12fbc?q=80&w=1455&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "MM",
    description:
      "Consectetur aute ea aliquip esse elit cupidatat elit amet pariatur nulla deserunt id nisi cillum.",
    size: "md",
    className: "bg-slate-500  bg-gradient-to-b from-muted/50 to-mute",
    image:
      "https://images.unsplash.com/photo-1703586015469-62e744b5b949?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "MM",
    description:
      "Consectetur aute ea aliquip esse elit cupidatat elit amet pariatur nulla deserunt id nisi cillum.",
    size: "md",
    className: "bg-slate-500  bg-gradient-to-b from-muted/50 to-mute",
    image:
      "https://images.unsplash.com/photo-1666597107756-ef489e9f1f09?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
