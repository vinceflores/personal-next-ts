'use client'
import React, {useState} from "react";
import Button from "./(components)/button";
const Page = () => {
  const [text, setText] = useState("click me");
  return (
    <div>
      <h1>Projects</h1>
      <p>{text}</p>
      <Button text="click me" handleClick={() => setText("clicked")} />
    </div>
  );
};

export default Page;
