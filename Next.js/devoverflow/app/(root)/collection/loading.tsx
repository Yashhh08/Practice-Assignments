import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const Loading = () => {
  return (
    <>
      <div className="flex flex-col gap-7">
        <h1 className="font-bold text-3xl text-center">Saved Questions</h1>

        <div className="flex justify-between items-center gap-5 max-sm:flex-col">
          <Skeleton className="w-full h-10 p-4 ml-1 rounded-full" />
          <Skeleton className="w-[100px] h-10 rounded-full" />
        </div>

        <div className="flex flex-col justify-center items-center gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
            return (
              <Skeleton
                key={item}
                className="w-full h-44 py-9 px-[45px] border-none "
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Loading;
