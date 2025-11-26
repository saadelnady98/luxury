"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import useCurrentLang from "../hooks/useCurrentLang";
type DropdownProps_TP = {
  children: React.ReactNode;
  title?: string;
  className?: string;
  showIcon?: boolean;
};
const Dropdown = ({
  children,
  title,
  className,
  showIcon,
}: DropdownProps_TP) => {
  const { lang } = useCurrentLang();
  const [open, setOpen] = useState(false);
  
  const handleClose = () => {
    setOpen(false);
  };

  const handleSelect = () => {
    // Close the dropdown when an item is selected
    setOpen(false);
  };
  return (
    <DropdownMenu open={open} onOpenChange={() => setOpen(!open)}>
      <DropdownMenuTrigger
        className={`uppercase  text-sm mx-6 flex gap-x-2 ${className}`}
      >
        {title || lang}
        {showIcon ? <ChevronDown /> : null}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onSelect={handleClose}>
          {children}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
};

export default Dropdown;
