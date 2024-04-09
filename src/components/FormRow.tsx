import { FC } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

interface FormRowProps extends React.InputHTMLAttributes<HTMLInputElement> {
  labelText: string;
}

const FormRow: FC<FormRowProps> = ({
  type,
  name,
  labelText,
  defaultValue,
  onChange,
}) => {
  return (
    <div className="space-y-3 w-full">
      <Label htmlFor={name}>{labelText || name}</Label>
      <Input
        type={type}
        name={name}
        defaultValue={defaultValue || ""}
        onChange={onChange}
        required
        className="w-full"
        id={name}
      />
    </div>
  );
};

export default FormRow;
