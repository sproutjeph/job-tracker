import { useNavigation } from "react-router-dom";
import { Button } from "./ui/button";
import { FC } from "react";
import { cn } from "@/lib/utils";

interface SubmitButtonProps {
  className?: string;
}

const SubmitButton: FC<SubmitButtonProps> = ({ className }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <Button
      type="submit"
      className={cn("w-full", className)}
      disabled={isSubmitting}
    >
      {isSubmitting ? "submitting" : "submit"}
    </Button>
  );
};

export default SubmitButton;
