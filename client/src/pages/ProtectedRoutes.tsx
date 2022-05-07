import { useGlobalContext } from "../store/context";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children }: { children: JSX.Element }) => {
  const { user } = useGlobalContext();
  if (!user) {
    return <Navigate to="/landing" />;
  }
  return children;
};
export default ProtectedRoutes;
