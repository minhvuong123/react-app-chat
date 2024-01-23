import { useEffect, useState } from "react";
import { getAuthUser } from "../utils/api";
import { User } from "../utils/types";
import { Navigate, useLocation } from "react-router-dom";

export const useAuth = () => {
  const [user, setUser] = useState<User | undefined>();
  const [loading, setLoading] = useState<boolean>(true);
  const controller = new AbortController();

  useEffect(() => {
    getAuthUser()
      .then(({ data }) => {
        setUser(data);
        // setLoading(false)
        setTimeout(() => setLoading(false), 1000);
      })
      .catch((err) => {
        console.log(err);
        // setLoading(false)
        setTimeout(() => setLoading(false), 1000);
      });

    return () => {
      controller.abort();
    };
  }, []);

  return { user, loading }
}

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
