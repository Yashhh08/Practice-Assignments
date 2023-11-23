"use client";

import React, { useRef } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { formUrlQuery, removeKeysFromQuery } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";

interface Props {
  filter: { name: string; value: string }[];
}

const Filter = ({ filter }: Props) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleSelectFilter = (value: string) => {
    if (value === "none") {
      const newUrl = removeKeysFromQuery({
        params: searchParams.toString(),
        keysToRemove: ["filter"],
      });
      router.push(newUrl, { scroll: false });
    } else {
      const newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: "filter",
        value: value,
      });
      router.push(newUrl, { scroll: false });
    }
  };

  return (
    <Select
      onValueChange={handleSelectFilter}
      value={searchParams.get("filter") || ""}
    >
      <SelectTrigger className="w-auto max-sm:h-8">
        <SelectValue placeholder="Filter" />
      </SelectTrigger>
      <SelectContent>
        {filter.map((item) => {
          return (
            <SelectItem key={item.name} value={item.value}>
              {item.name}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
};

export default Filter;
