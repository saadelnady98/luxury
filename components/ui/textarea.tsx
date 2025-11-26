import * as React from "react";

import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  form: any;
  name: string;
  reset?: boolean;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, form, name, reset, ...props }, ref) => {
    const [value, setValue] = React.useState("");
    React.useEffect(() => {
      setValue("");
    }, [reset]);
    return (
      <textarea
        className={cn(
          "flex min-h-[80px] w-full  px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-[#D9D9D90D] bg-opacity-50 capitalize placeholder-gray-500 border border-[#d9d9d9] border-opacity-20",
          className
        )}
        ref={ref}
        {...props}
        value={value}
        onChange={({ target }) => {
          const { value } = target;
          setValue(value);
          form.setValue(name, value);
        }}
        required
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
