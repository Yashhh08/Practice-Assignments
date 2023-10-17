"use client";

import Navbar from "@/components/shared/navbar/Navbar";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

export default function Home() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <>
      <div className="flex flex-col gap-5">
        <div>
          <h1 className="text-3xl font-bold">All Questions</h1>
          <Button className="bg-gradient-to-r from-orange-500 to-orange-400">Ask a Question</Button>
        </div>
      </div>

      {/* <div className="flex justify-center items-center p-2">
        <Calendar mode="single" selected={date} onSelect={setDate} />
      </div>

      <p className="text-center p-4">{date?.toDateString()}</p>

      <div className="flex justify-center items-center gap-5 p-4">
        <Button variant={"secondary"}>Click Me</Button>
        <Button>Learn more</Button>
      </div> */}
    </>
  );
}
