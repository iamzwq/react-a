import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

export function useRouter() {
  const navigate = useNavigate();
  return useMemo(
    () => ({
      back: () => navigate(-1),
      forward: () => navigate(1),
      push: navigate,
      replace: (url: string) => navigate(url, { replace: true }),
    }),
    [navigate]
  );
}
