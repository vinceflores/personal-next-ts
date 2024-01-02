import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ProjectLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Tabs className=" grid grid-cols-2 md:grid-cols-3 gap-4 my-4 w-[90vw] md:w-[80vw]">
      <div className="col-span-full ">
        <h1 className="text-2xl">Projects</h1>
        <p className=" text-slate-400">Click on a category to filter</p>
      </div>

      <TabsList className="h-auto col-span-full  dark:bg-black rounded-lg flex flex-wrap justify-start">
        {/* <TabsTrigger className="hover:underline data-[state=active]:underline " value="Backend">Backend</TabsTrigger>
        <TabsTrigger className="hover:underline data-[state=active]:underline " value="FullStack">Full Stack</TabsTrigger>
    <TabsTrigger className="hover:underline data-[state=active]:underline " value="AIandML">AI and ML</TabsTrigger> */}
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
  );
};

export default ProjectLayout;

const category = ["Frontend", "Backend", "Full Stack", "AI and ML"];
