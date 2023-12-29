import Image from "next/image";
import Card from "@/components/Card";
export default function Home() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-4 w-[90vw] md:w-[80vw] ">
      <div className="col-span-full ">
        <h1 className="text-2xl">Home</h1>
        <p className=" text-slate-400"> Welcome to my website 😂</p>
      </div>
      <Card title="Md" description="World" size="md" className="bg-slate-500  bg-gradient-to-b from-muted/50 to-muted" />
      <Card title="Md" description="World" size="lg" className="bg-slate-500" />
      <Card title="Md" description="World" size="lg" className="bg-slate-500" />
      <Card title="Md" description="World" size="md" className="bg-slate-500  bg-gradient-to-b from-muted/50 to-muted" />
      <Card title="Md" description="World" size="md" className="bg-slate-500  bg-gradient-to-b from-muted/50 to-muted" />
      <Card title="Md" description="World" size="md" className="bg-slate-500  bg-gradient-to-b from-muted/50 to-muted" />
      <Card title="Md" description="World" size="md" className="bg-slate-500  bg-gradient-to-b from-muted/50 to-muted" />
 
    </div>
  );
}
