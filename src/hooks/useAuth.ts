import { useEffect, useState } from "react";
import { getAuthUser } from "../utils/api";
import { User } from "../utils/types";

export function useAuth() {
  const [user, setUser] = useState<User | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const controller = new AbortController();

  useEffect(() => {
    setIsLoading(true);
    getAuthUser()
      .then(({ data }) => {
        setUser(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });

      return () => {
        controller.abort();
      }
  }, []);

  return { user };
}
