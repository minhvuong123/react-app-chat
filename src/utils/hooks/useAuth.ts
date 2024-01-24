import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { getAuthUser } from "../api";

export const useAuth = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const { user, updateAuthUser } = useContext(AuthContext);
  const controller = new AbortController();

  useEffect(() => {
    getAuthUser()
      .then(({ data }) => {
        updateAuthUser(data);
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