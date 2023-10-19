"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

// const frameworks = [
//   {
//     value: "newest",
//     label: "Newest",
//   },
//   {
//     value: "recommended",
//     label: "Recommended",
//   },
//   {
//     value: "frequent",
//     label: "Frequent",
//   },
//   {
//     value: "unanswered",
//     label: "Unanswered",
//   },
// ];

interface ComboboxProps {
  filter: (value: string) => void;
  filters: { name: string; value: string }[];
}

export function Combobox({ filter, filters }: ComboboxProps) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          size={"sm"}
          aria-expanded={open}
          className="justify-between items-center"
        >
          {value ? filters.find((fil) => fil.value === value)?.name : "Filter"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          {/* <CommandInput placeholder="Search framework..." />
          <CommandEmpty>No framework found.</CommandEmpty> */}
          <CommandGroup>
            {filters.map((fil) => (
              <CommandItem
                key={fil.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                  filter(currentValue);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === fil.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {fil.name}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
