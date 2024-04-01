import { useNavigation } from "react-router-dom";
import { Button } from "./ui/button";

const SubmitButton = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <Button type="submit" className="w-full" disabled={isSubmitting}>
      {isSubmitting ? "submitting" : "submit"}
    </Button>
  );
};

export default SubmitButton;
