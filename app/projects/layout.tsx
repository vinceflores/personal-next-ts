import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { category } from "@/lib/data";

const ProjectLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="col-span-full ">
        <h1 className="text-2xl">Projects</h1>
        <p className=" text-slate-400">Click on a category to filter</p>
      </div>
      <Tabs
        defaultValue={"All"}
        className="w-full"
      >
        <TabsList className="h-auto w-[90vw] md:w-[80vw] dark:bg-black rounded-lg flex flex-wrap justify-start">
          <TabsTrigger
            className="hover:underline data-[state=active]:underline "
            value="All"
          >
            All
          </TabsTrigger>
          {category.map((a) => (
            <TabsTrigger
              key={a}
              className="hover:underline data-[state=active]:underline "
              value={a}
            >
              {a}
            </TabsTrigger>
          ))}
        </TabsList>

        {children}

      </Tabs>
    </>
  );
};

export default ProjectLayout;
