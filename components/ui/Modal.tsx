"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
type ModalProps_TP = {
  children: React.ReactNode;
  title?: string;
  description?: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  className?:string
};

export function Modal({
  children,
  description,
  title,
  open,
  setOpen,
  className
}: ModalProps_TP) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className={`${className} sm:max-w-[425px] sm:min-h-[95vh] lg:min-w-[1024px] lg:min-h-[700px] pt-0 px-0 bg-[#171717] border-none`}>
        {description && title ? (
          <DialogHeader className="h-[50px]">
            <DialogTitle className="p-2">{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>
        ) : null}
        {children}
      </DialogContent>
    </Dialog>
  );
}
