"use client";
import React, { useState } from "react";
import { Car, Maximize2 } from "lucide-react";
import Image from "next/image";
import { Button } from "../../components/ui/button";
import Card from "../../components/Card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { data, category } from "../../lib/data";

const Page = () => {
  return (
    <>
      <TabsContent
        value="All"
        className="grid grid-cols-2 md:grid-cols-3 gap-4 my-4 w-[90vw] md:w-[80vw]"
      >
        {data.map((a, i) => (
          <Card key={i} {...a} />
        ))}
      </TabsContent>
      {category.map((A) => (
        <TabsContent
          key={A}
          value={`${A}`}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 my-4 w-[90vw] md:w-[80vw]"
        >
          {data
            .filter((a) => a.tags.find((b) => b === `${A}`))
            .map((a, i) => (
              <Card key={i} {...a} />
            ))}
        </TabsContent>
      ))}
    </>
  );
};

export default Page;
