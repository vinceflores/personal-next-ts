// "use client";
import { useState } from "react";
import Image from "next/image";
import Card from "@/components/Card";
import Modal from "@/components/Modal";
import data from '../lib/data'

export default async function Home() {
  return await (
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



