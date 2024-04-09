/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FC } from "react";
import { Label } from "./ui/label";

interface FormSelectRowProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  labelText: string;
  list: any;
  defaultValue: string;
}

const FormSelectRow: FC<FormSelectRowProps> = ({
  name,
  labelText,
  list,
  onChange,
  defaultValue = "",
}) => {
  const handleChange = (value: any) => {
    onChange?.(value);
  };

  return (
    <div className="space-y-3 w-full">
      <Label htmlFor={name}>{labelText}</Label>
      <Select
        name={name}
        onValueChange={handleChange}
        defaultValue={defaultValue}
      >
        <SelectTrigger className="w-full">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {list.map((itemValue: any) => {
              return (
                <SelectItem key={itemValue} value={itemValue}>
                  {itemValue}
                </SelectItem>
              );
            })}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default FormSelectRow;
