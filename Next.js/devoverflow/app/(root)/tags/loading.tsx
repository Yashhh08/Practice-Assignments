import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const Loading = () => {
  return (
    <>
      <div className="flex flex-col gap-7">
        <h1 className="font-bold text-3xl text-center">Tags</h1>

        <div className="flex justify-between items-center gap-5 max-sm:flex-col">
          <Skeleton className="w-full h-10 p-4 ml-1 rounded-full" />
          <Skeleton className="w-[100px] h-10 rounded-full" />
        </div>

        <div className="flex justify-center items-center gap-3 flex-wrap">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => {
            return (
              <Skeleton
                key={item}
                className="w-[260px] h-[280px] border-none p-7 flex flex-col gap-5 justify-center items-center shadow-md"
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Loading;
