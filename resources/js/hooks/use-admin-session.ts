import { useEffect, useState } from "react";

type AdminSessionState = {
  authenticated: boolean;
  loading: boolean;
};

const defaultState: AdminSessionState = {
  authenticated: false,
  loading: true,
};

const fetchAdminSession = async () => {
  const response = await fetch("/admin/session", {
    method: "GET",
    credentials: "same-origin",
    headers: {
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    return { authenticated: false };
  }

  const data = (await response.json().catch(() => ({}))) as { authenticated?: boolean };
  return { authenticated: Boolean(data.authenticated) };
};

export const useAdminSession = () => {
  const [state, setState] = useState<AdminSessionState>(defaultState);

  useEffect(() => {
    let isMounted = true;

    fetchAdminSession()
      .then((data) => {
        if (isMounted) {
          setState({ authenticated: data.authenticated, loading: false });
        }
      })
      .catch(() => {
        if (isMounted) {
          setState({ authenticated: false, loading: false });
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return state;
};
