"use client";
import React, { useState } from "react";
import { Car, Maximize2 } from "lucide-react";
import Image from "next/image";
import { Button } from "../../components/ui/button";
import Card from "../../components/Card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import data from "../../lib/data";

const Page = () => {
  return (
    <>

      {data.map((a, i) => (
        <Card key={i} {...a} />
      ))}
    </>
  );
};

export default Page;
