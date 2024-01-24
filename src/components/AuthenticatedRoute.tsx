import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../utils/hooks/useAuth";


export const AuthenticatedRoute: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const location = useLocation();
  const { loading, user } = useAuth();

  if (loading) {
    return <>Loading</>;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return <>{children}</>;
};
